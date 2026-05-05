"use client";
import { useState, useMemo } from "react";

/* ── Loan presets ── */
const PRESETS = {
  home:      { label: "Home Loan",     icon: "🏠", min: 100000, max: 100000000, def: 3000000,  rMin: 6, rMax: 15, rDef: 8.5,  tMin: 12, tMax: 360, tDef: 240 },
  car:       { label: "Car Loan",      icon: "🚗", min: 100000, max: 5000000,   def: 800000,   rMin: 7, rMax: 18, rDef: 9.5,  tMin: 12, tMax: 84,  tDef: 60  },
  personal:  { label: "Personal",      icon: "👤", min: 10000,  max: 5000000,   def: 500000,   rMin: 9, rMax: 36, rDef: 12,   tMin: 3,  tMax: 72,  tDef: 36  },
  education: { label: "Education",     icon: "🎓", min: 100000, max: 10000000,  def: 1000000,  rMin: 6, rMax: 14, rDef: 8,    tMin: 12, tMax: 180, tDef: 84  },
  business:  { label: "Business",      icon: "🏢", min: 50000,  max: 50000000,  def: 2000000,  rMin: 8, rMax: 22, rDef: 11,   tMin: 12, tMax: 180, tDef: 60  },
};
type LoanType = keyof typeof PRESETS;

/* ── Helpers ── */
const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const fmtShort = (n: number) => {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000)   return "₹" + (n / 100000).toFixed(2) + " L";
  return fmt(n);
};

const calcEMI = (P: number, annualRate: number, months: number) => {
  if (P <= 0 || annualRate <= 0 || months <= 0) return 0;
  const r = annualRate / (12 * 100);
  return (P * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
};

/* ── SVG Donut ── */
function Donut({ principal, interest }: { principal: number; interest: number }) {
  const total = principal + interest;
  if (total === 0) return null;
  const pPct = (principal / total) * 100;
  const C = 2 * Math.PI * 54;
  const pLen = (pPct / 100) * C;
  const iLen = C - pLen;

  return (
    <svg viewBox="0 0 160 160" className="w-40 h-40 mx-auto">
      <circle cx="80" cy="80" r="54" fill="none" stroke="#f3f4f6" strokeWidth="18" />
      <circle cx="80" cy="80" r="54" fill="none" stroke="#22c55e" strokeWidth="18"
        strokeDasharray={`${pLen} ${C}`} strokeDashoffset={C / 4}
        strokeLinecap="round" className="transition-all duration-700" />
      <circle cx="80" cy="80" r="54" fill="none" stroke="#f97316" strokeWidth="18"
        strokeDasharray={`${iLen} ${C}`} strokeDashoffset={C / 4 - pLen}
        strokeLinecap="round" className="transition-all duration-700" />
      <text x="80" y="74" textAnchor="middle" className="fill-gray-400 text-[9px]">Total</text>
      <text x="80" y="90" textAnchor="middle" className="fill-gray-800 text-[11px] font-semibold">{fmtShort(total)}</text>
    </svg>
  );
}

/* ── Yearly Bar Chart ── */
function YearlyChart({ schedule }: { schedule: MonthRow[] }) {
  const years: Record<number, { p: number; i: number }> = {};
  schedule.forEach(m => {
    const y = Math.ceil(m.month / 12);
    if (!years[y]) years[y] = { p: 0, i: 0 };
    years[y].p += m.prinPaid;
    years[y].i += m.intPaid;
  });
  const keys = Object.keys(years).map(Number);
  const max = Math.max(...keys.map(y => years[y].p + years[y].i), 1);
  // Show max ~20 bars
  const step = keys.length > 20 ? Math.ceil(keys.length / 20) : 1;
  const show = keys.filter((_, i) => i % step === 0 || i === keys.length - 1);

  return (
    <div className="overflow-x-auto">
      <div className="flex items-end gap-[3px] h-28 min-w-[200px]">
        {show.map(y => {
          const pH = (years[y].p / max) * 96;
          const iH = (years[y].i / max) * 96;
          return (
            <div key={y} className="flex-1 flex flex-col items-center min-w-[12px]"
              title={`Yr ${y}: Principal ${fmt(years[y].p)}, Interest ${fmt(years[y].i)}`}>
              <div className="w-full max-w-[14px] flex flex-col">
                <div className="bg-orange-400 rounded-t" style={{ height: iH }} />
                <div className="bg-green-500 rounded-b" style={{ height: pH }} />
              </div>
              <span className="text-[8px] text-gray-400 mt-1">{y}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Types ── */
type MonthRow = {
  month: number;
  emi: number;
  prinPaid: number;
  intPaid: number;
  balance: number;
};

/* ═══════════ MAIN COMPONENT ═══════════ */
export default function EMICalculatorClient() {
  /* — Core state — */
  const [loanType, setLoanType] = useState<LoanType>("home");
  const [amount, setAmount]     = useState(3000000);
  const [rate, setRate]         = useState(8.5);
  const [tenure, setTenure]     = useState(240);
  const [tenureYears, setTenureYears] = useState(true);

  /* — Feature toggles — */
  const [showPrepay, setShowPrepay]       = useState(false);
  const [showCompare, setShowCompare]     = useState(false);
  const [showAfford, setShowAfford]       = useState(false);
  const [showSchedule, setShowSchedule]   = useState(false);
  const [activeViz, setActiveViz]         = useState<"donut" | "yearly">("donut");

  /* — Prepayment — */
  const [extraMonthly, setExtraMonthly] = useState(0);
  const [lumpSum, setLumpSum]           = useState(0);
  const [lumpMonth, setLumpMonth]       = useState(12);

  /* — Comparison — */
  const [cAmount, setCAmount]   = useState(3000000);
  const [cRate, setCRate]       = useState(9.5);
  const [cTenure, setCTenure]   = useState(240);

  /* — Affordability — */
  const [salary, setSalary]       = useState(100000);
  const [existingEMI, setExistingEMI] = useState(0);

  /* — Schedule pagination — */
  const [schedPage, setSchedPage] = useState(0);
  const PER_PAGE = 12;

  const p = PRESETS[loanType];

  /* ── Switch loan type ── */
  const switchType = (t: LoanType) => {
    const pr = PRESETS[t];
    setLoanType(t);
    setAmount(pr.def);
    setRate(pr.rDef);
    setTenure(pr.tDef);
    setTenureYears(pr.tDef >= 12);
    setExtraMonthly(0);
    setLumpSum(0);
    setSchedPage(0);
  };

  /* ── Tenure display ── */
  const tenureMonths = tenure;
  const tenureDisplay = tenureYears
    ? `${Math.floor(tenure / 12)} yr${tenure % 12 ? ` ${tenure % 12} mo` : ""}`
    : `${tenure} months`;

  const toggleTenureUnit = () => {
    setTenureYears(!tenureYears);
  };

  /* ── Core calculation ── */
  const emi = calcEMI(amount, rate, tenureMonths);
  const totalPay = emi * tenureMonths;
  const totalInt = totalPay - amount;
  const pPct = totalPay > 0 ? (amount / totalPay * 100) : 50;

  /* ── Amortization schedule (with prepayment) ── */
  const schedule = useMemo(() => {
    const rows: MonthRow[] = [];
    let bal = amount;
    const r = rate / (12 * 100);
    for (let m = 1; m <= tenureMonths && bal > 0.5; m++) {
      const intPaid = bal * r;
      let prinPaid = emi - intPaid;
      let extra = extraMonthly;
      if (lumpSum > 0 && m === lumpMonth) extra += lumpSum;
      if (prinPaid + extra > bal) { prinPaid = bal; extra = 0; }
      bal = Math.max(0, bal - prinPaid - extra);
      rows.push({ month: m, emi: Math.min(emi, prinPaid + intPaid), prinPaid: prinPaid + extra, intPaid, balance: bal });
    }
    return rows;
  }, [amount, rate, tenureMonths, emi, extraMonthly, lumpSum, lumpMonth]);

  /* ── Prepayment savings ── */
  const actualMonths = schedule.length;
  const actualInterest = schedule.reduce((s, r) => s + r.intPaid, 0);
  const savedInterest = totalInt - actualInterest;
  const savedMonths = tenureMonths - actualMonths;
  const hasPrepay = extraMonthly > 0 || lumpSum > 0;

  /* ── Comparison ── */
  const compEmi = calcEMI(cAmount, cRate, cTenure);
  const compTotal = compEmi * cTenure;
  const compInt = compTotal - cAmount;

  /* ── Affordability ── */
  const maxEMI = Math.max(0, (salary - existingEMI) * 0.5);
  const rMonth = rate / (12 * 100);
  const maxLoan = maxEMI > 0 && rMonth > 0
    ? maxEMI * (Math.pow(1 + rMonth, tenureMonths) - 1) / (rMonth * Math.pow(1 + rMonth, tenureMonths))
    : 0;

  /* ── Schedule pagination ── */
  const totalPages = Math.ceil(schedule.length / PER_PAGE);
  const pageRows = schedule.slice(schedPage * PER_PAGE, (schedPage + 1) * PER_PAGE);

  return (
    <div className="space-y-4">

      {/* ━━━ Loan Type Pills ━━━ */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
        {(Object.entries(PRESETS) as [LoanType, typeof PRESETS.home][]).map(([key, pr]) => (
          <button key={key} onClick={() => switchType(key)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm whitespace-nowrap border transition-all
              ${loanType === key
                ? "bg-green-50 border-green-500 text-green-700 font-medium"
                : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"}`}>
            <span>{pr.icon}</span>
            <span>{pr.label}</span>
          </button>
        ))}
      </div>

      {/* ━━━ Main Calculator Card ━━━ */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        {/* Loan Amount */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Loan Amount</span>
            <span className="font-medium">{fmt(amount)}</span>
          </div>
          <input type="range" min={p.min} max={p.max} step={p.min >= 100000 ? 50000 : 10000}
            value={amount} onChange={e => setAmount(Number(e.target.value))}
            className="w-full accent-green-600" />
          <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
            <span>{fmtShort(p.min)}</span><span>{fmtShort(p.max)}</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Interest Rate (p.a.)</span>
            <span className="font-medium">{rate.toFixed(1)}%</span>
          </div>
          <input type="range" min={p.rMin} max={p.rMax} step={0.1}
            value={rate} onChange={e => setRate(Number(e.target.value))}
            className="w-full accent-green-600" />
          <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
            <span>{p.rMin}%</span><span>{p.rMax}%</span>
          </div>
        </div>

        {/* Loan Tenure */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Loan Tenure</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">{tenureDisplay}</span>
              <button onClick={toggleTenureUnit}
                className="text-[10px] px-2 py-0.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-50 transition">
                {tenureYears ? "Months" : "Years"}
              </button>
            </div>
          </div>
          <input type="range"
            min={tenureYears ? Math.ceil(p.tMin / 12) * 12 : p.tMin}
            max={tenureYears ? Math.floor(p.tMax / 12) * 12 : p.tMax}
            step={tenureYears ? 12 : 1}
            value={tenure} onChange={e => setTenure(Number(e.target.value))}
            className="w-full accent-green-600" />
          <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
            <span>{tenureYears ? `${Math.ceil(p.tMin / 12)} yr` : `${p.tMin} mo`}</span>
            <span>{tenureYears ? `${Math.floor(p.tMax / 12)} yr` : `${p.tMax} mo`}</span>
          </div>
        </div>

        {/* ── Result Stats ── */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Monthly EMI",    value: fmt(emi),      accent: "text-green-700" },
            { label: "Total Interest", value: fmt(hasPrepay ? actualInterest : totalInt), accent: "text-orange-600" },
            { label: "Total Payment",  value: fmt(amount + (hasPrepay ? actualInterest : totalInt)), accent: "text-gray-800" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-[11px] text-gray-500 mb-1">{s.label}</p>
              <p className={`text-base sm:text-lg font-semibold ${s.accent}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* ── Principal vs Interest bar ── */}
        <div className="flex rounded-full overflow-hidden h-2.5 mb-3">
          <div className="bg-green-500 transition-all duration-500" style={{ width: pPct + "%" }} />
          <div className="bg-orange-400 transition-all duration-500" style={{ width: (100 - pPct) + "%" }} />
        </div>
        <div className="flex gap-4 text-xs text-gray-500 mb-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Principal ({pPct.toFixed(0)}%)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> Interest ({(100 - pPct).toFixed(0)}%)
          </span>
        </div>
      </div>

      {/* ━━━ Chart Toggle ━━━ */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <div className="flex bg-gray-100 rounded-lg p-0.5 mb-4">
          {([["donut", "Breakdown"], ["yearly", "Year-wise"]] as const).map(([key, label]) => (
            <button key={key} onClick={() => setActiveViz(key)}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all
                ${activeViz === key ? "bg-white text-green-700 shadow-sm" : "text-gray-400"}`}>
              {label}
            </button>
          ))}
        </div>
        {activeViz === "donut"
          ? <Donut principal={amount} interest={hasPrepay ? actualInterest : totalInt} />
          : <YearlyChart schedule={schedule} />}
      </div>

      {/* ━━━ Prepayment Simulator ━━━ */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <button onClick={() => setShowPrepay(!showPrepay)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition text-sm font-medium text-gray-700">
          <span>💰 Prepayment Simulator</span>
          <span className={`text-gray-400 transition-transform ${showPrepay ? "rotate-180" : ""}`}>▾</span>
        </button>
        {showPrepay && (
          <div className="bg-white border-t border-gray-100 px-5 py-4 space-y-4">
            {/* Extra monthly */}
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-500">Extra Monthly Payment</span>
                <span className="font-medium text-green-700">{fmt(extraMonthly)}</span>
              </div>
              <input type="range" min={0} max={Math.max(5000, Math.round(emi))} step={500}
                value={extraMonthly} onChange={e => setExtraMonthly(Number(e.target.value))}
                className="w-full accent-green-600" />
            </div>
            {/* Lump sum */}
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-500">One-time Lump Sum</span>
                <span className="font-medium text-green-700">{fmt(lumpSum)}</span>
              </div>
              <input type="range" min={0} max={Math.round(amount * 0.5)} step={10000}
                value={lumpSum} onChange={e => setLumpSum(Number(e.target.value))}
                className="w-full accent-green-600" />
              {lumpSum > 0 && (
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">Pay at month #</span>
                  <input type="number" min={1} max={tenureMonths} value={lumpMonth}
                    onChange={e => setLumpMonth(Math.max(1, Math.min(tenureMonths, Number(e.target.value))))}
                    className="w-16 text-center text-sm border border-gray-200 rounded-lg py-1 focus:outline-none focus:border-green-400" />
                </div>
              )}
            </div>
            {/* Savings result */}
            {hasPrepay && (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-[10px] text-green-600 mb-0.5">Interest Saved</p>
                  <p className="text-base font-semibold text-green-700">{fmt(savedInterest)}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-[10px] text-green-600 mb-0.5">Time Saved</p>
                  <p className="text-base font-semibold text-green-700">
                    {savedMonths >= 12 ? `${Math.floor(savedMonths / 12)} yr ${savedMonths % 12} mo` : `${savedMonths} months`}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ━━━ Loan Comparison ━━━ */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <button onClick={() => setShowCompare(!showCompare)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition text-sm font-medium text-gray-700">
          <span>⇄ Compare Two Loans</span>
          <span className={`text-gray-400 transition-transform ${showCompare ? "rotate-180" : ""}`}>▾</span>
        </button>
        {showCompare && (
          <div className="bg-white border-t border-gray-100 px-5 py-4 space-y-4">
            <p className="text-xs text-gray-400">Enter details of the second loan to compare</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Amount (₹)", val: cAmount, set: setCAmount, step: 50000 },
                { label: "Rate (%)", val: cRate, set: setCRate, step: 0.1 },
                { label: "Months", val: cTenure, set: setCTenure, step: 1 },
              ].map((f, i) => (
                <div key={i}>
                  <label className="text-[10px] text-gray-400 block mb-1">{f.label}</label>
                  <input type="number" value={f.val} step={f.step}
                    onChange={e => f.set(Number(e.target.value))}
                    className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-green-400" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Your Loan (A)", emi, int: totalInt, color: "green" },
                { title: "Loan B", emi: compEmi, int: compInt, color: "orange" },
              ].map((l, i) => (
                <div key={i} className={`rounded-xl p-3 text-center border ${l.color === "green" ? "border-green-200 bg-green-50" : "border-orange-200 bg-orange-50"}`}>
                  <p className={`text-[10px] font-medium mb-1 ${l.color === "green" ? "text-green-600" : "text-orange-600"}`}>{l.title}</p>
                  <p className={`text-lg font-semibold ${l.color === "green" ? "text-green-700" : "text-orange-700"}`}>{fmt(l.emi)}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Interest: {fmtShort(l.int)}</p>
                </div>
              ))}
            </div>
            <div className={`rounded-lg p-2.5 text-center text-xs font-medium ${totalInt <= compInt ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
              {totalInt < compInt
                ? `✅ Loan A saves you ${fmt(compInt - totalInt)} in interest`
                : totalInt > compInt
                  ? `🔄 Loan B saves you ${fmt(totalInt - compInt)} in interest`
                  : "Both loans have the same cost"}
            </div>
          </div>
        )}
      </div>

      {/* ━━━ Affordability Calculator ━━━ */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <button onClick={() => setShowAfford(!showAfford)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition text-sm font-medium text-gray-700">
          <span>🧮 How Much Loan Can I Afford?</span>
          <span className={`text-gray-400 transition-transform ${showAfford ? "rotate-180" : ""}`}>▾</span>
        </button>
        {showAfford && (
          <div className="bg-white border-t border-gray-100 px-5 py-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1">Monthly Income (₹)</label>
                <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-green-400" />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Existing EMIs (₹)</label>
                <input type="number" value={existingEMI} onChange={e => setExistingEMI(Number(e.target.value))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-green-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 rounded-xl p-3 text-center border border-amber-200">
                <p className="text-[10px] text-amber-600 mb-0.5">Max EMI You Can Pay</p>
                <p className="text-lg font-semibold text-amber-700">{fmt(maxEMI)}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 text-center border border-amber-200">
                <p className="text-[10px] text-amber-600 mb-0.5">Max Loan Eligible</p>
                <p className="text-lg font-semibold text-amber-700">{fmtShort(maxLoan)}</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 text-center">
              Based on 50% of disposable income rule at {rate}% for {tenureDisplay}
            </p>
          </div>
        )}
      </div>

      {/* ━━━ Amortization Schedule ━━━ */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <button onClick={() => { setShowSchedule(!showSchedule); setSchedPage(0); }}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-white hover:bg-gray-50 transition text-sm font-medium text-gray-700">
          <span>📋 Amortization Schedule</span>
          <span className={`text-gray-400 transition-transform ${showSchedule ? "rotate-180" : ""}`}>▾</span>
        </button>
        {showSchedule && (
          <div className="bg-white border-t border-gray-100 px-3 sm:px-5 py-4">
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] sm:text-xs">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-gray-400">
                    {["Month", "EMI", "Principal", "Interest", "Balance"].map(h => (
                      <th key={h} className="py-2 px-1.5 text-right font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pageRows.map((r, i) => (
                    <tr key={r.month} className={`border-b border-gray-50 ${i % 2 ? "bg-gray-50/50" : ""}`}>
                      <td className="py-1.5 px-1.5 text-right text-gray-500 font-medium">{r.month}</td>
                      <td className="py-1.5 px-1.5 text-right text-gray-700">{fmt(r.emi)}</td>
                      <td className="py-1.5 px-1.5 text-right text-green-600">{fmt(r.prinPaid)}</td>
                      <td className="py-1.5 px-1.5 text-right text-orange-500">{fmt(r.intPaid)}</td>
                      <td className="py-1.5 px-1.5 text-right text-gray-600">{fmt(r.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <button disabled={schedPage === 0} onClick={() => setSchedPage(p => p - 1)}
                className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition">
                ← Prev
              </button>
              <span className="text-[10px] text-gray-400">{schedPage + 1} / {totalPages}</span>
              <button disabled={schedPage >= totalPages - 1} onClick={() => setSchedPage(p => p + 1)}
                className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition">
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ━━━ Tax Benefits (India — Home & Education only) ━━━ */}
      {(loanType === "home" || loanType === "education") && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 className="text-sm font-medium text-blue-800 mb-3 flex items-center gap-2">
            🇮🇳 Tax Benefits Available
          </h3>
          {loanType === "home" ? (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-xl p-3 text-center border border-blue-100">
                  <p className="text-[10px] text-blue-500">Section 80C</p>
                  <p className="text-sm font-semibold text-blue-700">Up to ₹1.5L/yr</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">On principal repaid</p>
                </div>
                <div className="bg-white rounded-xl p-3 text-center border border-blue-100">
                  <p className="text-[10px] text-blue-500">Section 24(b)</p>
                  <p className="text-sm font-semibold text-blue-700">Up to ₹2L/yr</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">On interest paid</p>
                </div>
              </div>
              <p className="text-[10px] text-blue-400 text-center mt-2">
                Max annual saving up to ₹1.05L at 30% slab (old regime). First-time buyers may claim additional ₹50K under 80EEA.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-3 text-center border border-blue-100">
              <p className="text-[10px] text-blue-500">Section 80E</p>
              <p className="text-sm font-semibold text-blue-700">Full interest deductible</p>
              <p className="text-[9px] text-gray-400 mt-1">For up to 8 years from when you start repaying. No cap on amount.</p>
            </div>
          )}
          <p className="text-[9px] text-blue-300 text-center mt-2">
            *Old tax regime. Consult a CA for your specific situation.
          </p>
        </div>
      )}
    </div>
  );
}
