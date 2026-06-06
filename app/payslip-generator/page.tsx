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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
        <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>Why use this payslip generator?</h2>
          <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>
            Use this tool to generate a complete monthly payslip with all salary components, deductions, and net pay clearly displayed. This is especially useful for salaried professionals, employers, and payroll managers who want an accurate salary breakdown in seconds.
          </p>
          <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8 }}>
            The payslip summary helps you verify salary calculations and can be shared with employees, used for bank applications, or stored for record keeping.
          </p>
        </div>

        <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>How the salary is calculated</h2>
          <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>
            The gross salary is the sum of Basic, HRA, Allowances and any other earnings. From this amount, payroll deductions such as PF, tax, and other deductions are subtracted. The result is your net pay — the amount you take home.
          </p>
          <div style={{ background: '#18181b', borderRadius: 12, padding: 18, marginBottom: 14 }}>
            <p style={{ fontSize: 13, color: '#a1a1aa', fontFamily: 'monospace', lineHeight: 1.8 }}>
              Gross = Basic + HRA + Allowances + Other Earnings<br />
              Total Deductions = PF + Tax + Other Deductions<br />
              Net Pay = Gross - Total Deductions
            </p>
          </div>
          <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8 }}>
            For example, with ₹50,000 basic, ₹20,000 HRA, ₹5,000 allowances and ₹0 other earnings, gross pay is ₹75,000. If PF is ₹1,800, tax is ₹5,000 and other deductions are ₹0, net pay becomes ₹68,200.
          </p>
        </div>

        <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>Common mistakes to avoid</h2>
          <ul style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.9, paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 10 }}>Entering the wrong HRA amount — ensure the HRA field matches what your employer pays.</li>
            <li style={{ marginBottom: 10 }}>Using incorrect tax or PF values — verify the actual deduction amounts in your salary slip or payroll statement.</li>
            <li style={{ marginBottom: 10 }}>Ignoring other earnings — any bonuses or allowances should be added separately to compute gross pay correctly.</li>
            <li style={{ marginBottom: 10 }}>Mixing annual and monthly figures — this tool assumes monthly values for all inputs.</li>
            <li style={{ marginBottom: 10 }}>Forgetting to update the month — set the correct month so the payslip is easy to identify later.</li>
          </ul>
        </div>

        <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>Frequently asked questions</h2>
          <div style={{ display: 'grid', gap: 18 }}>
            {[
              {
                q: 'Can I use this to generate salary slips for employees?',
                a: 'Yes. Enter the employee details, salary components, and deductions to generate a complete payslip. It is suited for small teams and contractors.',
              },
              {
                q: 'Does this calculator handle monthly PF and tax deductions?',
                a: 'Yes. Enter the monthly PF and tax amounts and the payslip will subtract them from gross salary to show net pay.',
              },
              {
                q: 'Can I print the payslip?',
                a: 'Yes. Use the Print Payslip button to open the browser print dialog and save the payslip as a PDF or print it directly.',
              },
              {
                q: 'What if my employer has additional deductions?',
                a: 'You can add those values in the Other Deductions field to include them in the total deduction calculation.',
              },
              {
                q: 'Is the net pay calculation accurate for India?',
                a: 'This tool uses standard salary breakdown rules for Indian payslips and is designed for monthly payroll estimates.',
              },
            ].map((faq, index) => (
              <div key={index} style={{ borderBottom: index < 4 ? '1px solid #27272a' : 'none', paddingBottom: index < 4 ? 16 : 0 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#f4f4f5', marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
