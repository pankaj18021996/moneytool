"use client";
import { useState } from "react";

export default function SalaryCalculator() {
  const [ctc, setCtc] = useState(600000);
  const [bonus, setBonus] = useState(50000);
  const [basicPct, setBasicPct] = useState(40);
  const [hraPct, setHraPct] = useState(50);
  const [pfPct, setPfPct] = useState(12);
  const [professionalTax, setProfessionalTax] = useState(2400);
  const [incomeTax, setIncomeTax] = useState(0);

  const basic = ctc * (basicPct / 100);
  const hra = basic * (hraPct / 100);
  const pf = basic * (pfPct / 100);
  const specialAllowance = ctc - basic - hra - bonus;
  const grossMonthly = ctc / 12;
  const totalDeductions = pf + professionalTax + incomeTax;
  const netAnnual = ctc - totalDeductions;
  const netMonthly = netAnnual / 12;

  const fmt = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-1">Salary Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your in-hand salary from CTC — fully customizable
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">

        <p className="text-sm font-medium mb-4">💼 CTC Details</p>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Annual CTC</span>
            <span className="font-medium">{fmt(ctc)}</span>
          </div>
          <input type="range"
            min="100000" max="10000000" step="50000"
            value={ctc}
            onChange={e => setCtc(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Annual Bonus</span>
            <span className="font-medium">{fmt(bonus)}</span>
          </div>
          <input type="range"
            min="0" max="500000" step="10000"
            value={bonus}
            onChange={e => setBonus(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="border-t border-gray-100 pt-6 mb-6">
          <p className="text-sm font-medium mb-4">
            ⚙️ Customize Salary Structure
          </p>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Basic Salary</span>
              <span className="font-medium">{basicPct}% of CTC
                = {fmt(basic / 12)}/mo</span>
            </div>
            <input type="range" min="30" max="60" step="1"
              value={basicPct}
              onChange={e => setBasicPct(Number(e.target.value))}
              className="w-full accent-blue-500" />
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">HRA</span>
              <span className="font-medium">{hraPct}% of Basic
                = {fmt(hra / 12)}/mo</span>
            </div>
            <input type="range" min="10" max="60" step="1"
              value={hraPct}
              onChange={e => setHraPct(Number(e.target.value))}
              className="w-full accent-blue-500" />
          </div>

        </div>

        <div className="border-t border-gray-100 pt-6 mb-6">
          <p className="text-sm font-medium mb-4">
            📉 Customize Deductions
          </p>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">PF Contribution</span>
              <span className="font-medium">{pfPct}% of Basic
                = {fmt(pf / 12)}/mo</span>
            </div>
            <input type="range" min="0" max="12" step="1"
              value={pfPct}
              onChange={e => setPfPct(Number(e.target.value))}
              className="w-full accent-red-400" />
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Professional Tax (Annual)</span>
              <span className="font-medium">{fmt(professionalTax)}</span>
            </div>
            <input type="range" min="0" max="5000" step="100"
              value={professionalTax}
              onChange={e => setProfessionalTax(Number(e.target.value))}
              className="w-full accent-red-400" />
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Income Tax (Annual)</span>
              <span className="font-medium">{fmt(incomeTax)}</span>
            </div>
            <input type="range" min="0" max="500000" step="1000"
              value={incomeTax}
              onChange={e => setIncomeTax(Number(e.target.value))}
              className="w-full accent-red-400" />
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-green-50 rounded-xl p-4 col-span-2">
            <p className="text-xs text-gray-500 mb-1">
              Monthly In-Hand Salary
            </p>
            <p className="text-2xl font-medium text-green-600">
              {fmt(netMonthly)}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Annual In-Hand</p>
            <p className="text-lg font-medium">{fmt(netAnnual)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Gross Monthly</p>
            <p className="text-lg font-medium">{fmt(grossMonthly)}</p>
          </div>
        </div>

        <div className="border border-gray-100 rounded-xl p-4">
          <p className="text-sm font-medium mb-3">Salary Breakdown</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Basic ({basicPct}%)</span>
              <span>{fmt(basic / 12)}/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">HRA ({hraPct}% of Basic)</span>
              <span>{fmt(hra / 12)}/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Special Allowance</span>
              <span>{fmt(specialAllowance / 12)}/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Bonus</span>
              <span>{fmt(bonus / 12)}/mo</span>
            </div>
            <div className="border-t border-gray-100 pt-2 mt-2">
              <p className="text-sm font-medium mb-2 text-red-500">
                Deductions
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">PF ({pfPct}%)</span>
                <span className="text-red-500">-{fmt(pf / 12)}/mo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Professional Tax</span>
                <span className="text-red-500">
                  -{fmt(professionalTax / 12)}/mo
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Income Tax</span>
                <span className="text-red-500">
                  -{fmt(incomeTax / 12)}/mo
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}