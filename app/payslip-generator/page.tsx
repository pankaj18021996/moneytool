"use client";
import React from "react";

function currency(n: number) { return "₹" + n.toLocaleString("en-IN"); }

export default function PayslipGenerator(){
  const [employeeName, setEmployeeName] = React.useState('Employee Name');
  const [empId, setEmpId] = React.useState('EMP-001');
  const [designation, setDesignation] = React.useState('Software Engineer');
  const [month, setMonth] = React.useState(() => new Date().toLocaleString('default', { month: 'long', year: 'numeric' }));

  const [basic, setBasic] = React.useState(50000);
  const [hra, setHra] = React.useState(20000);
  const [allowances, setAllowances] = React.useState(5000);
  const [otherEarnings, setOtherEarnings] = React.useState(0);

  const [pf, setPf] = React.useState(1800);
  const [tax, setTax] = React.useState(5000);
  const [otherDeductions, setOtherDeductions] = React.useState(0);

  const gross = Number(basic||0)+Number(hra||0)+Number(allowances||0)+Number(otherEarnings||0);
  const totalDeductions = Number(pf||0)+Number(tax||0)+Number(otherDeductions||0);
  const net = gross - totalDeductions;

  return (
    <div style={{ padding: 24 }}>
      <h1>Payslip Generator</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom:12 }}>
        <input value={employeeName} onChange={e=>setEmployeeName(e.target.value)} />
        <input value={empId} onChange={e=>setEmpId(e.target.value)} />
        <input value={designation} onChange={e=>setDesignation(e.target.value)} />
        <input value={month} onChange={e=>setMonth(e.target.value)} />
      </div>

      <h3>Earnings</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
        <div>
          <label>Basic<br/><input type="number" value={basic} onChange={e=>setBasic(Number(e.target.value||0))} /></label>
        </div>
        <div>
          <label>HRA<br/><input type="number" value={hra} onChange={e=>setHra(Number(e.target.value||0))} /></label>
        </div>
        <div>
          <label>Allowances<br/><input type="number" value={allowances} onChange={e=>setAllowances(Number(e.target.value||0))} /></label>
        </div>
        <div>
          <label>Other<br/><input type="number" value={otherEarnings} onChange={e=>setOtherEarnings(Number(e.target.value||0))} /></label>
        </div>
      </div>

      <h3>Deductions</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
        <div><label>PF<br/><input type="number" value={pf} onChange={e=>setPf(Number(e.target.value||0))} /></label></div>
        <div><label>Tax<br/><input type="number" value={tax} onChange={e=>setTax(Number(e.target.value||0))} /></label></div>
        <div><label>Other<br/><input type="number" value={otherDeductions} onChange={e=>setOtherDeductions(Number(e.target.value||0))} /></label></div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, marginBottom: 12 }}>
        <div style={{ textAlign: 'right' }}>
          <div>Gross: {currency(gross)}</div>
          <div>Deductions: {currency(totalDeductions)}</div>
          <div style={{ fontWeight: 700 }}>Net Pay: {currency(net)}</div>
        </div>
      </div>

      <div>
        <button onClick={()=>window.print()}>Print Payslip</button>
      </div>

      <hr style={{ margin: '24px 0' }} />

      <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, background: '#fff', color: '#000' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <strong>{employeeName}</strong><br />{designation}<br />ID: {empId}
          </div>
          <div style={{ textAlign: 'right' }}>{month}</div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td>Basic</td><td style={{ textAlign: 'right' }}>{currency(basic)}</td>
            </tr>
            <tr>
              <td>HRA</td><td style={{ textAlign: 'right' }}>{currency(hra)}</td>
            </tr>
            <tr>
              <td>Allowances</td><td style={{ textAlign: 'right' }}>{currency(allowances)}</td>
            </tr>
            <tr>
              <td>Other</td><td style={{ textAlign: 'right' }}>{currency(otherEarnings)}</td>
            </tr>
            <tr style={{ borderTop: '1px solid #ddd' }}>
              <td style={{ fontWeight:700 }}>Gross</td><td style={{ textAlign: 'right', fontWeight:700 }}>{currency(gross)}</td>
            </tr>
            <tr>
              <td>PF</td><td style={{ textAlign: 'right' }}>{currency(pf)}</td>
            </tr>
            <tr>
              <td>Tax</td><td style={{ textAlign: 'right' }}>{currency(tax)}</td>
            </tr>
            <tr>
              <td>Other Deductions</td><td style={{ textAlign: 'right' }}>{currency(otherDeductions)}</td>
            </tr>
            <tr style={{ borderTop: '1px solid #ddd' }}>
              <td style={{ fontWeight:700 }}>Net Pay</td><td style={{ textAlign: 'right', fontWeight:700 }}>{currency(net)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
