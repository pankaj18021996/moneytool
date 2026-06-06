"use client";
import React from "react";

function currency(n: number) { return "₹" + n.toLocaleString("en-IN"); }

export default function InvoiceBuilder() {
  const [invoiceNo, setInvoiceNo] = React.useState("INV-0001");
  const [date, setDate] = React.useState(() => new Date().toISOString().slice(0,10));
  const [dueDate, setDueDate] = React.useState("");

  React.useEffect(() => {
    setInvoiceNo(`INV-${Date.now()}`);
  }, []);
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
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={addItem}>Add item</button>
            <button onClick={()=>setItems([{ desc: '', qty:1, rate:0 }])}>Reset</button>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>Tax %</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={1}
                  value={taxPct}
                  onChange={e => setTaxPct(Number(e.target.value || 0))}
                  style={{ width: 80 }}
                />
              </label>
            </div>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
          <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>Why use this invoice builder?</h2>
            <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>
              This invoice builder helps freelancers, consultants, and small businesses generate clean, professional invoices instantly. You can enter line items, quantities, rates, and tax percentages without any complex setup, so you always have an accurate total and printable invoice ready for your client.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8 }}>
              A well-formatted invoice reduces confusion, speeds up payment, and makes your business look more trustworthy. This tool also makes it easy to preview the invoice before printing or saving as PDF.
            </p>
          </div>

          <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>How the calculations work</h2>
            <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>
              The invoice total is calculated using a simple three-step formula. First, the tool totals each line item by multiplying quantity by rate. Then it adds GST or service tax using the percentage you enter. Finally, the invoice total is the sum of subtotal and tax.
            </p>
            <div style={{ background: '#18181b', borderRadius: 12, padding: 18, marginBottom: 14 }}>
              <p style={{ fontSize: 13, color: '#a1a1aa', fontFamily: 'monospace', lineHeight: 1.8 }}>
                Subtotal = Σ (Quantity × Rate)<br />
                Tax = Subtotal × (Tax % ÷ 100)<br />
                Total = Subtotal + Tax
              </p>
            </div>
            <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8 }}>
              Example: if you sell 2 items at ₹1,500 each and 1 item at ₹6,000, the subtotal becomes ₹9,000. With 18% tax, the tax amount is ₹1,620, so the final invoice total becomes ₹10,620. The tool calculates this automatically as you type.
            </p>
          </div>

          <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>Common mistakes to avoid</h2>
            <ul style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.9, paddingLeft: 20, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>Entering the wrong tax percentage — always verify whether your service is charged at 5%, 12%, 18%, or 28% GST.</li>
              <li style={{ marginBottom: 10 }}>Forgetting to include all items — add each service and expense separately so the subtotal is complete.</li>
              <li style={{ marginBottom: 10 }}>Using the wrong currency formatting — this tool uses Indian rupees and formatting to avoid confusion.</li>
              <li style={{ marginBottom: 10 }}>Not checking the preview — the printed invoice should match the calculator summary exactly.</li>
              <li style={{ marginBottom: 10 }}>Leaving description fields blank — clear descriptions help clients approve invoices faster.</li>
            </ul>
          </div>

          <div style={{ background: '#111113', border: '1px solid #27272a', borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', marginBottom: 14 }}>Frequently asked questions</h2>
            <div style={{ display: 'grid', gap: 18 }}>
              {[
                {
                  q: 'Can I use this tool for GST invoices?',
                  a: 'Yes. Enter the tax rate in the field and the calculator applies it to the subtotal. You can use it for most GST slabs used in India.',
                },
                {
                  q: 'Can I print or save the invoice as a PDF?',
                  a: 'Yes. Click the Print / Save as PDF button to open the browser print dialog, where you can save the invoice as a PDF file.',
                },
                {
                  q: 'Does this invoice include company and client details?',
                  a: 'Yes. Add your company details in the From box and your client details in the To box for a professional invoice layout.',
                },
                {
                  q: 'What if I need to change the invoice number?',
                  a: 'You can edit the Invoice No field at the top to use any number or code your business prefers.',
                },
                {
                  q: 'Can I calculate multiple items and taxes at once?',
                  a: 'Yes. Add multiple line items and the tool will sum them automatically. It applies the same tax rate to the full subtotal.',
                },
                {
                  q: 'Is the total updated automatically?',
                  a: 'Yes. Whenever you change quantities, rates, or tax percentage, the subtotal, tax, and final total update immediately.',
                },
              ].map((faq, index) => (
                <div key={index} style={{ borderBottom: index < 5 ? '1px solid #27272a' : 'none', paddingBottom: index < 5 ? 16 : 0 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#f4f4f5', marginBottom: 8 }}>{faq.q}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: 14, lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
