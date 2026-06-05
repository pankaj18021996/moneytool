"use client";
import React, { useState } from "react";
import LoanCalculator from "../components/LoanCalculator";
import PieChart from "../components/PieChart";

export default function EMIClient() {
  const [amount, setAmount] = useState(3000000);
  const [interest, setInterest] = useState(0);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 16 }}>
      <LoanCalculator
        defaultAmount={3000000}
        defaultRate={8.5}
        defaultTenure={240}
        minAmount={50000}
        maxAmount={100000000}
        minRate={6}
        maxRate={36}
        minTenure={12}
        maxTenure={360}
        amountStep={50000}
        onChange={({ amount: a, totalInt }) => { setAmount(a); setInterest(Math.max(0, totalInt)); }}
      />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PieChart principal={amount} interest={interest} />
      </div>
    </div>
  );
}
