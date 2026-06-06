"use client";
import React from "react";

function currency(n: number) { return "₹" + n.toLocaleString("en-IN"); }

export default function InvoiceBuilder() {
  const [invoiceNo, setInvoiceNo] = React.useState(() => `INV-${Date.now()}`);
  const [date, setDate] = React.useState(() => new Date().toISOString().slice(0,10));
  const [dueDate, setDueDate] = React.useState("");
  const [from, setFrom] = React.useState("Your Company Name\nAddress line 1\nCity, State");
  const [to, setTo] = React.useState("Client Name\nClient Address");
  const [items, setItems] = React.useState([{ desc: "", qty: 1, rate: 0 }]);
  const [taxPct, setTaxPct] = React.useState(18);

  const updateItem = (index: number, key: string, value: any) => {
    setItems(prev => prev.map((it,i) => i===index ? { ...it, [key]: value } : it));
  };
  const addItem = () => setItems(prev => [...prev, { desc: "", qty: 1, rate: 0 }]);
  const removeItem = (i:number) => setItems(prev => prev.filter((_,idx)=>idx!==i));

  const subtotal = items.reduce((s, it) => s + (Number(it.qty)||0) * (Number(it.rate)||0), 0);
  const tax = Math.round(subtotal * (Number(taxPct||0)/100));
  const total = subtotal + tax;

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 12 }}>Invoice Builder</h1>
      <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label>Invoice No<br/><input value={invoiceNo} onChange={e=>setInvoiceNo(e.target.value)} style={{ width: '100%' }} /></label>
        </div>
        <div>
          <label>Date<br/><input type="date" value={date} onChange={e=>setDate(e.target.value)} /></label>
        </div>
        <div>
          <label>Due Date<br/><input type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} /></label>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
        <textarea rows={4} value={from} onChange={e=>setFrom(e.target.value)} style={{ flex: 1 }} />
        <textarea rows={4} value={to} onChange={e=>setTo(e.target.value)} style={{ flex: 1 }} />
      </div>

      <div style={{ marginBottom: 12 }}>
        <h3>Line items</h3>
        <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 8 }}>
          {items.map((it, idx) => (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 100px 60px', gap: 8, alignItems: 'center', marginBottom: 8 }}>
              <input placeholder="Description" value={it.desc} onChange={e=>updateItem(idx,'desc',e.target.value)} />
              <input type="number" min={0} value={it.qty} onChange={e=>updateItem(idx,'qty',Number(e.target.value||0))} />
              <input type="number" min={0} value={it.rate} onChange={e=>updateItem(idx,'rate',Number(e.target.value||0))} />
              <div style={{ textAlign: 'right' }}>{currency((Number(it.qty)||0)*(Number(it.rate)||0))}</div>
            </div>
          ))}
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={addItem}>Add item</button>
            <button onClick={()=>setItems([{ desc: '', qty:1, rate:0 }])}>Reset</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, marginBottom: 24 }}>
        <div style={{ textAlign: 'right' }}>
          <div>Subtotal: {currency(subtotal)}</div>
          <div>Tax ({taxPct}%): {currency(tax)}</div>
          <div style={{ fontWeight: 700 }}>Total: {currency(total)}</div>
        </div>
      </div>

      <div>
        <button onClick={()=>window.print()}>Print / Save as PDF</button>
      </div>

      <hr style={{ margin: '24px 0' }} />

      <div>
        <h3>Preview</h3>
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, background: '#fff', color: '#000' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <strong>{invoiceNo}</strong><br />Date: {date}<br />Due: {dueDate || '—'}
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ whiteSpace: 'pre-wrap' }}>{from}</div>
            </div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>Bill To</strong>
            <div style={{ whiteSpace: 'pre-wrap' }}>{to}</div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Description</th>
                <th style={{ textAlign: 'right', borderBottom: '1px solid #ddd' }}>Qty</th>
                <th style={{ textAlign: 'right', borderBottom: '1px solid #ddd' }}>Rate</th>
                <th style={{ textAlign: 'right', borderBottom: '1px solid #ddd' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={i}>
                  <td style={{ padding: '6px 4px' }}>{it.desc}</td>
                  <td style={{ padding: '6px 4px', textAlign: 'right' }}>{it.qty}</td>
                  <td style={{ padding: '6px 4px', textAlign: 'right' }}>{currency(it.rate)}</td>
                  <td style={{ padding: '6px 4px', textAlign: 'right' }}>{currency((Number(it.qty)||0)*(Number(it.rate)||0))}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display:'flex', justifyContent:'flex-end', marginTop:12 }}>
            <div style={{ textAlign: 'right' }}>
              <div>Subtotal: {currency(subtotal)}</div>
              <div>Tax ({taxPct}%): {currency(tax)}</div>
              <div style={{ fontWeight:700 }}>Total: {currency(total)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
