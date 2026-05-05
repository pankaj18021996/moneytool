"use client";
import { useState } from "react";

export default function FDCalculatorClient() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(3);
  const [months, setMonths] = useState(0);
  const [frequency, setFrequency] = useState(4);

  const totalYears = years + months / 12;
  const n = frequency * totalYears;
  const r = rate / (100 * frequency);
  const maturity = principal * Math.pow(1 + r, n);
  const interest = maturity - principal;

  const fmt = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  const frequencies = [
    { label: "Monthly", value: 12 },
    { label: "Quarterly", value: 4 },
    { label: "Half Yearly", value: 2 },
    { label: "Yearly", value: 1 },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Principal Amount</span>
          <span className="font-medium">{fmt(principal)}</span>
        </div>
        <input type="range"
          min="10000" max="10000000" step="10000"
          value={principal}
          onChange={e => setPrincipal(Number(e.target.value))}
          className="w-full accent-green-600" />
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-3">
          Interest Rate (per annum)
        </p>
        <div className="flex items-center gap-3 mb-3">
          <input
            type="number"
            min="1" max="20" step="0.1"
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className="w-24 border border-gray-200 rounded-xl
              px-3 py-2 text-sm focus:outline-none
              focus:border-green-400 text-center font-medium"
          />
          <span className="text-sm text-gray-500">%</span>
          <input type="range"
            min="1" max="20" step="0.1"
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className="flex-1 accent-green-600" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {[5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map((r) => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`px-3 py-1 rounded-lg text-xs border
                transition-all ${rate === r
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-500 border-gray-200"}`}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-3">Time Period</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400">Years</span>
              <span className="font-medium">{years} yr</span>
            </div>
            <input type="range"
              min="0" max="10" step="1"
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="w-full accent-green-600" />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400">Months</span>
              <span className="font-medium">{months} mo</span>
            </div>
            <input type="range"
              min="0" max="11" step="1"
              value={months}
              onChange={e => setMonths(Number(e.target.value))}
              className="w-full accent-green-600" />
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Total tenure: {years} years {months} months
        </p>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-3">
          Compounding Frequency
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {frequencies.map((f) => (
            <button
              key={f.value}
              onClick={() => setFrequency(f.value)}
              className={`py-2 px-3 rounded-xl text-xs border
                transition-all ${frequency === f.value
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-500 border-gray-200"}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-500 mb-1">Principal</p>
          <p className="text-lg font-medium">{fmt(principal)}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-500 mb-1">Interest Earned</p>
          <p className="text-lg font-medium text-green-600">
            {fmt(interest)}
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-500 mb-1">Maturity Amount</p>
          <p className="text-lg font-medium">{fmt(maturity)}</p>
        </div>
      </div>

      <div className="flex rounded-full overflow-hidden h-2 mb-3">
        <div className="bg-blue-500"
          style={{width: (principal/maturity*100).toFixed(1) + "%"}}>
        </div>
        <div className="bg-green-500"
          style={{width: (interest/maturity*100).toFixed(1) + "%"}}>
        </div>
      </div>
      <div className="flex gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500
            inline-block"></span>
          Principal
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500
            inline-block"></span>
          Interest Earned
        </span>
      </div>

    </div>
  );
}
