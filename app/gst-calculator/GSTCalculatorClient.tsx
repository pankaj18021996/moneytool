"use client";
import { useState } from "react";

export default function GSTCalculatorClient() {
  const [amount, setAmount] = useState(1000);
  const [gstRate, setGstRate] = useState(18);
  const [type, setType] = useState<"exclusive" | "inclusive">("exclusive");

  const gstAmount =
    type === "exclusive"
      ? (amount * gstRate) / 100
      : amount - amount * (100 / (100 + gstRate));

  const preGst =
    type === "exclusive"
      ? amount
      : amount - gstAmount;

  const postGst =
    type === "exclusive"
      ? amount + gstAmount
      : amount;

  const fmt = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  const gstRates = [3, 5, 12, 18, 28];

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-4">

      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-3">Calculation Type</p>
        <div className="flex gap-3">
          <button
            onClick={() => setType("exclusive")}
            className={`flex-1 py-2 px-4 rounded-xl text-sm border
              transition-all ${type === "exclusive"
                ? "bg-green-600 text-white border-green-600"
                : "bg-gray-800 text-gray-400 border-gray-700"}`}
          >
            Add GST
          </button>
          <button
            onClick={() => setType("inclusive")}
            className={`flex-1 py-2 px-4 rounded-xl text-sm border
              transition-all ${type === "inclusive"
                ? "bg-green-600 text-white border-green-600"
                : "bg-gray-800 text-gray-400 border-gray-700"}`}
          >
            Remove GST
          </button>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-3">Enter Amount (₹)</p>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="w-full border border-gray-700 rounded-xl
            px-4 py-3 text-sm focus:outline-none bg-gray-800 text-white
            focus:border-green-400"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-3">GST Rate</p>
        <div className="flex gap-2 flex-wrap">
          {gstRates.map((r) => (
            <button
              key={r}
              onClick={() => setGstRate(r)}
              className={`px-4 py-2 rounded-xl text-sm border
                transition-all ${gstRate === r
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-800 text-gray-400 border-gray-700"}`}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Pre GST Amount</p>
          <p className="text-lg font-medium text-white">{fmt(preGst)}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">GST Amount</p>
          <p className="text-lg font-medium text-orange-400">
            {fmt(gstAmount)}
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Post GST Amount</p>
          <p className="text-lg font-medium text-green-400">
            {fmt(postGst)}
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">CGST ({gstRate / 2}%)</span>
          <span className="font-medium text-white">{fmt(gstAmount / 2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">SGST ({gstRate / 2}%)</span>
          <span className="font-medium text-white">{fmt(gstAmount / 2)}</span>
        </div>
      </div>

    </div>
  );
}
