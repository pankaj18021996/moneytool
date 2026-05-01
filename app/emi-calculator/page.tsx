"use client";
import { useState } from "react";

export default function EMICalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(24);

  const r = rate / (12 * 100);
  const emi = amount * r * Math.pow(1+r,tenure) / (Math.pow(1+r,tenure) - 1);
  const totalPay = emi * tenure;
  const totalInt = totalPay - amount;
  const pPct = (amount / totalPay * 100).toFixed(1);

  const fmt = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-1">EMI Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your monthly loan installment instantly
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Loan Amount</span>
            <span className="font-medium">{fmt(amount)}</span>
          </div>
          <input type="range" min="50000" max="10000000" step="10000"
            value={amount} onChange={e => setAmount(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Interest Rate (per annum)</span>
            <span className="font-medium">{rate.toFixed(1)}%</span>
          </div>
          <input type="range" min="1" max="30" step="0.1"
            value={rate} onChange={e => setRate(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Loan Tenure</span>
            <span className="font-medium">{tenure} months</span>
          </div>
          <input type="range" min="1" max="360" step="1"
            value={tenure} onChange={e => setTenure(Number(e.target.value))}
            className="w-full accent-green-600" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Monthly EMI</p>
            <p className="text-lg font-medium">{fmt(emi)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Total Interest</p>
            <p className="text-lg font-medium">{fmt(totalInt)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Total Payment</p>
            <p className="text-lg font-medium">{fmt(totalPay)}</p>
          </div>
        </div>

        <div className="flex rounded-full overflow-hidden h-2 mb-3">
          <div className="bg-green-500" style={{width: pPct + "%"}}></div>
          <div className="bg-orange-400" style={{width: (100 - Number(pPct)) + "%"}}></div>
        </div>
        <div className="flex gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Principal
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block"></span>
            Interest
          </span>
        </div>
      </div>
    </main>
  );
}