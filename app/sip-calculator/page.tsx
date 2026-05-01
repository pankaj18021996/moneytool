"use client";
import { useState } from "react";

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const n = years * 12;
  const r = rate / (12 * 100);
  const invested = monthly * n;
  const maturity = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const returns = maturity - invested;

  const fmt = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  const iPct = ((invested / maturity) * 100).toFixed(1);
  const rPct = (100 - Number(iPct)).toFixed(1);

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-1">SIP Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your mutual fund SIP returns instantly
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Monthly Investment</span>
            <span className="font-medium">{fmt(monthly)}</span>
          </div>
          <input type="range" min="500" max="200000" step="500"
            value={monthly} onChange={e => setMonthly(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Expected Return Rate (per annum)</span>
            <span className="font-medium">{rate.toFixed(1)}%</span>
          </div>
          <input type="range" min="1" max="30" step="0.1"
            value={rate} onChange={e => setRate(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Time Period</span>
            <span className="font-medium">{years} years</span>
          </div>
          <input type="range" min="1" max="40" step="1"
            value={years} onChange={e => setYears(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Invested Amount</p>
            <p className="text-lg font-medium">{fmt(invested)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Est. Returns</p>
            <p className="text-lg font-medium text-green-600">{fmt(returns)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Total Value</p>
            <p className="text-lg font-medium">{fmt(maturity)}</p>
          </div>
        </div>

        <div className="flex rounded-full overflow-hidden h-2 mb-3">
          <div className="bg-blue-500" style={{width: iPct + "%"}}></div>
          <div className="bg-green-500" style={{width: rPct + "%"}}></div>
        </div>
        <div className="flex gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
            Invested Amount
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Est. Returns
          </span>
        </div>
      </div>
    </main>
  );
}