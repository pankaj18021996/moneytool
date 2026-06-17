import { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────
// SHARED TYPES
// ─────────────────────────────────────────────────────────────────
interface FAQ { question: string; answer: string; }
interface RelatedTool { href: string; label: string; }
interface BlogPost {
  title: string;
  date: string;
  updatedDate: string;
  category: string;
  author: string;
  readTime: string;
  description: string;
  faqs: FAQ[];
  relatedTools: RelatedTool[];
}

// ─────────────────────────────────────────────────────────────────
// BLOG POST METADATA (titles, dates, faqs, related tools)
// ─────────────────────────────────────────────────────────────────
const BLOG_POSTS: Record<string, BlogPost> = {
  "home-loan-vs-renting": {
    title: "Home Loan vs Renting: Which is Better in 2026?",
    date: "2026-05-15",
    updatedDate: "2026-06-13",
    category: "Loans",
    author: "MoneyTool Editorial Team",
    readTime: "8 min read",
    description: "Buying a home with a loan or continuing to rent — a detailed financial comparison for Indian households in 2026 covering costs, tax benefits, and wealth creation.",
    relatedTools: [
      { href: "/emi-calculator", label: "EMI Calculator" },
      { href: "/home-loan-calculator", label: "Home Loan Calculator" },
      { href: "/salary-calculator", label: "Salary Calculator" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
    ],
    faqs: [
      { question: "Is buying a home always better than renting in India?", answer: "Not always. Buying makes sense if you plan to stay in the same city for 7+ years, can afford a 20% down payment without straining your finances, and the EMI is not more than 40% of your monthly income. If your job requires mobility or you are in a city with very high property prices relative to rent, renting can be the smarter financial choice for several years." },
      { question: "What is the break-even point between buying and renting?", answer: "The break-even point is typically 7 to 10 years for most Indian cities. This means it takes roughly that long for the wealth created through home ownership (equity + appreciation) to exceed the wealth created by investing the down payment and the difference between rent and EMI in mutual funds." },
      { question: "What tax benefits do I get on a home loan?", answer: "Under the old tax regime: Section 80C allows deduction of up to ₹1.5 lakh on principal repayment. Section 24(b) allows deduction of up to ₹2 lakh on interest paid for self-occupied property. Under the new tax regime, these deductions are generally not available." },
      { question: "How much down payment is required for a home loan in India?", answer: "Banks typically finance up to 75–90% of the property value. For a ₹50 lakh property, you may need ₹5–12.5 lakh as down payment plus registration charges of 5–7% and stamp duty of 5–7%." },
      { question: "What is a good rent-to-price ratio to decide between buying and renting?", answer: "A price-to-rent ratio below 20 generally favours buying; above 25 generally favours renting. In Mumbai and Delhi, this ratio often exceeds 30–40, making renting and investing the difference financially superior for many years." },
    ],
  },
  "sip-vs-fd": {
    title: "SIP vs FD: Which Investment is Better in 2026?",
    date: "2026-05-10",
    updatedDate: "2026-06-13",
    category: "Investments",
    author: "MoneyTool Editorial Team",
    readTime: "7 min read",
    description: "A complete comparison of SIP and Fixed Deposit investments for Indian investors — covering returns, risk, tax treatment, and which suits your financial goals better.",
    relatedTools: [
      { href: "/sip-calculator", label: "SIP Calculator" },
      { href: "/fd-calculator", label: "FD Calculator" },
      { href: "/ppf-calculator", label: "PPF Calculator" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
    ],
    faqs: [
      { question: "Which gives better returns — SIP or FD?", answer: "Historically, equity SIPs have delivered 10–14% CAGR over 10+ year periods, significantly higher than FD rates of 6.5–7.5%. However, SIP returns are market-linked and not guaranteed, while FD returns are fixed and guaranteed by the bank." },
      { question: "Is SIP safe for short-term goals?", answer: "No. SIP in equity mutual funds is suitable for goals that are at least 5 years away. For goals within 1–3 years, FD or debt mutual funds are safer options since equity markets can be volatile in the short term." },
      { question: "How is FD interest taxed?", answer: "FD interest is added to your total income and taxed at your applicable income tax slab rate. If interest exceeds ₹40,000 per year (₹50,000 for senior citizens), the bank also deducts TDS at 10%." },
      { question: "How are SIP returns taxed?", answer: "For equity SIPs held over 1 year, gains above ₹1 lakh per year are taxed at 10% LTCG. Gains within 1 year are taxed at 15% STCG. Debt SIP gains are taxed as per your income slab regardless of holding period." },
      { question: "Can I do both SIP and FD?", answer: "Yes, and this is often the recommended approach. FD covers short-term goals and emergency funds while SIP builds long-term wealth. A balanced portfolio uses both based on your goals and timeline." },
    ],
  },
  "emi-calculation-guide": {
    title: "EMI Calculation Guide: Formula, Examples & How to Reduce EMI",
    date: "2026-05-05",
    updatedDate: "2026-06-13",
    category: "Loans",
    author: "MoneyTool Editorial Team",
    readTime: "7 min read",
    description: "Everything you need to know about EMI calculation — the formula, how tenure and interest rate affect your EMI, prepayment strategies, and how to reduce your loan burden.",
    relatedTools: [
      { href: "/emi-calculator", label: "EMI Calculator" },
      { href: "/home-loan-calculator", label: "Home Loan Calculator" },
      { href: "/personal-loan-calculator", label: "Personal Loan Calculator" },
      { href: "/car-loan-calculator", label: "Car Loan Calculator" },
    ],
    faqs: [
      { question: "What is the EMI formula?", answer: "EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is the principal loan amount, R is the monthly interest rate (annual rate ÷ 12 ÷ 100), and N is the number of monthly instalments." },
      { question: "Does a longer loan tenure reduce EMI?", answer: "Yes, a longer tenure lowers the monthly EMI, but increases the total interest paid significantly. For example, a ₹50 lakh home loan at 9% for 15 years has an EMI of ₹50,714 and total interest of ₹41.3 lakh. The same loan for 25 years has an EMI of ₹41,960 but total interest of ₹75.9 lakh — nearly double." },
      { question: "What happens if I miss an EMI?", answer: "Missing an EMI attracts a late payment penalty (typically 1–2% of the EMI amount) and a negative entry in your CIBIL report. Multiple missed EMIs can lead to loan default, legal action, and significant damage to your credit score." },
      { question: "How does prepayment affect my loan?", answer: "Prepayment reduces the outstanding principal, which lowers the interest component of future EMIs. You can either reduce your EMI keeping the tenure same, or keep the EMI same and reduce the tenure. Reducing tenure saves more interest overall." },
      { question: "What is a floating rate EMI?", answer: "A floating rate EMI changes when the bank's benchmark rate (such as the repo rate linked rate) changes. If the RBI increases the repo rate, your EMI or tenure increases. If rates fall, your EMI decreases. Most home loans in India today are on floating rates." },
    ],
  },
  "tax-savings-strategies": {
    title: "Top 10 Tax Saving Strategies for Salaried Employees in India (FY 2025-26)",
    date: "2026-04-28",
    updatedDate: "2026-06-13",
    category: "Taxes",
    author: "MoneyTool Editorial Team",
    readTime: "9 min read",
    description: "Practical tax saving strategies for Indian salaried employees in FY 2025-26 — covering Section 80C, 80D, HRA, NPS, home loan benefits, and new vs old regime comparison.",
    relatedTools: [
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
      { href: "/salary-calculator", label: "Salary Calculator" },
      { href: "/hra-calculator", label: "HRA Calculator" },
      { href: "/tds-calculator", label: "TDS Calculator" },
    ],
    faqs: [
      { question: "Which tax regime is better — old or new in FY 2025-26?", answer: "The new regime has lower tax rates but removes most deductions. The old regime is better if your total deductions (80C + 80D + HRA + home loan interest) exceed ₹3.75 lakh for someone earning ₹10 lakh/year. Use the income tax calculator to compare both for your specific income and deductions." },
      { question: "What is the maximum deduction under Section 80C?", answer: "The maximum deduction under Section 80C is ₹1.5 lakh per financial year. Eligible investments include EPF, PPF, ELSS mutual funds, NSC, life insurance premiums, 5-year FD, and principal repayment of home loan." },
      { question: "Can I claim both HRA and home loan interest?", answer: "Yes, you can claim both — but only if your rented residence and the home loan property are in different cities, or if you are paying rent while your owned property is under construction or in a different city for work reasons. Both claims must be genuinely justified." },
      { question: "What is Section 80D deduction?", answer: "Section 80D allows deduction for health insurance premiums paid for yourself, spouse, children, and parents. The limit is ₹25,000 for self and family, plus ₹25,000 for parents (₹50,000 if parents are senior citizens), for a total possible deduction of ₹75,000." },
      { question: "Is NPS a good tax saving option?", answer: "NPS offers an additional ₹50,000 deduction under Section 80CCD(1B) over and above the ₹1.5 lakh 80C limit — making total possible deduction ₹2 lakh. However, NPS has limited liquidity (withdrawal restrictions until age 60) and requires 40% of corpus to be used for annuity purchase at maturity." },
    ],
  },
  "ppf-complete-guide": {
    title: "PPF Investment Guide 2026: Interest Rate, Rules, Tax Benefits & Calculator",
    date: "2026-04-20",
    updatedDate: "2026-06-13",
    category: "Investments",
    author: "MoneyTool Editorial Team",
    readTime: "8 min read",
    description: "Complete guide to Public Provident Fund (PPF) in India — current interest rate, contribution rules, tax benefits, withdrawal rules, and how to maximise your PPF corpus.",
    relatedTools: [
      { href: "/ppf-calculator", label: "PPF Calculator" },
      { href: "/fd-calculator", label: "FD Calculator" },
      { href: "/sip-calculator", label: "SIP Calculator" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
    ],
    faqs: [
      { question: "What is the current PPF interest rate in 2026?", answer: "The PPF interest rate is currently 7.1% per annum, compounded annually. The rate is set by the government and reviewed quarterly, though it has remained at 7.1% since April 2020. Interest is calculated on the minimum balance between the 5th and last day of each month." },
      { question: "What is the minimum and maximum PPF investment per year?", answer: "The minimum annual contribution is ₹500 and the maximum is ₹1,50,000 per financial year. You can make up to 12 deposits per year in any amount as long as the total does not exceed ₹1.5 lakh. Contributions above ₹1.5 lakh do not earn interest and are not eligible for tax deduction." },
      { question: "When can I withdraw from PPF?", answer: "Full withdrawal is allowed only at maturity (after 15 years). Partial withdrawal is permitted from the 7th year onwards — up to 50% of the balance at the end of the 4th year or the previous year, whichever is lower. Premature closure before 15 years is only allowed in exceptional cases like serious illness or higher education." },
      { question: "Can I extend my PPF account after 15 years?", answer: "Yes. After maturity, you can extend the account in blocks of 5 years — either with further contributions (and continue earning interest + tax benefits) or without contributions (balance continues to earn interest tax-free). Many investors extend multiple times to build a large tax-free retirement corpus." },
      { question: "Is PPF better than ELSS for tax saving?", answer: "PPF is risk-free with guaranteed returns and full tax exemption (EEE — exempt at investment, interest, and withdrawal). ELSS is market-linked with historically higher returns but with risk and a 3-year lock-in. PPF suits conservative investors with long horizons; ELSS suits those comfortable with equity risk seeking higher potential returns." },
    ],
  },
  "gst-compliance-guide": {
    title: "GST Compliance Guide for Small Business Owners in India (2026)",
    date: "2026-04-12",
    updatedDate: "2026-06-13",
    category: "Business",
    author: "MoneyTool Editorial Team",
    readTime: "8 min read",
    description: "A practical GST compliance guide for small business owners and freelancers in India — covering registration, return filing, invoicing rules, input tax credit, and common mistakes to avoid.",
    relatedTools: [
      { href: "/gst-calculator", label: "GST Calculator" },
      { href: "/invoice-builder", label: "Invoice Builder" },
      { href: "/tds-calculator", label: "TDS Calculator" },
      { href: "/salary-calculator", label: "Salary Calculator" },
    ],
    faqs: [
      { question: "Who must register for GST in India?", answer: "GST registration is mandatory if your aggregate annual turnover exceeds ₹40 lakh (for goods) or ₹20 lakh (for services) in most states. For special category states (North-East, Uttarakhand, etc.), the threshold is ₹10 lakh. Inter-state sellers and e-commerce sellers must register regardless of turnover." },
      { question: "What GST returns does a small business need to file?", answer: "Regular taxpayers must file GSTR-1 (outward supplies — monthly or quarterly), GSTR-3B (monthly summary return with tax payment), and GSTR-9 (annual return). Composition scheme taxpayers file CMP-08 quarterly and GSTR-4 annually. Missing return deadlines attracts late fees of ₹50/day (₹20/day for nil returns)." },
      { question: "What is Input Tax Credit (ITC)?", answer: "ITC allows you to deduct the GST you paid on business purchases from the GST collected on your sales. For example, if you collected ₹18,000 GST from customers and paid ₹8,000 GST on raw materials, you only pay ₹10,000 to the government. ITC is the core benefit of the GST system for registered businesses." },
      { question: "What are the GST rates in India?", answer: "GST has four main rates: 5% (essential goods — food grains, medicines), 12% (processed foods, computers), 18% (most services and manufactured goods), and 28% (luxury and sin goods — cars, tobacco, ACs). Some items like fresh vegetables and educational services are exempt (0%)." },
      { question: "Can a freelancer or consultant register for GST?", answer: "Yes. Freelancers and consultants providing services above ₹20 lakh per year must register for GST. Services are typically taxed at 18%. Registered freelancers can issue proper GST invoices, claim ITC on business expenses like software subscriptions and equipment, and comply with international client requirements." },
    ],
  },
  "reduce-home-loan-emi": {
    title: "How to Reduce Home Loan EMI: 7 Proven Strategies That Work in 2026",
    date: "2026-04-15",
    updatedDate: "2026-06-13",
    category: "Loans",
    author: "MoneyTool Editorial Team",
    readTime: "7 min read",
    description: "Seven proven strategies to reduce your home loan EMI and save lakhs in interest — covering prepayment, balance transfer, tenure adjustment, and negotiation tactics for Indian borrowers.",
    relatedTools: [
      { href: "/emi-calculator", label: "EMI Calculator" },
      { href: "/home-loan-calculator", label: "Home Loan Calculator" },
      { href: "/salary-calculator", label: "Salary Calculator" },
      { href: "/income-tax-calculator", label: "Income Tax Calculator" },
    ],
    faqs: [
      { question: "Does prepaying a home loan reduce EMI?", answer: "Yes. When you make a partial prepayment, the outstanding principal reduces. You can ask the bank to either reduce the EMI (keeping tenure same) or reduce the tenure (keeping EMI same). Reducing tenure saves more interest overall, but reducing EMI improves monthly cash flow." },
      { question: "How much can a balance transfer save on a home loan?", answer: "A 0.5% reduction in interest rate on a ₹50 lakh home loan with 15 years remaining saves approximately ₹2.8–3.5 lakh in total interest. The saving increases with larger loan amounts and longer remaining tenures. Always subtract the transfer costs (0.5–1% processing fee of new lender) before deciding." },
      { question: "Can I negotiate a lower rate with my existing lender?", answer: "Yes. If your CIBIL score has improved since you took the loan, or if competing lenders are offering significantly lower rates, you can request your existing lender to reduce your rate under 'internal balance transfer'. This is often cheaper than switching lenders as it avoids processing fees." },
      { question: "What is MCLR and how does it affect my EMI?", answer: "MCLR (Marginal Cost of Funds-based Lending Rate) was the benchmark for home loans before October 2019. Most new home loans are now linked to the external benchmark (repo rate). If you have an old MCLR-linked loan, consider switching to a repo-rate-linked loan which resets faster when RBI cuts rates." },
      { question: "How does increasing down payment reduce EMI?", answer: "A higher down payment reduces the loan principal, which directly lowers the EMI. For example, on a ₹80 lakh property at 9% for 20 years: with 10% down (₹72 lakh loan), EMI is ₹64,799. With 25% down (₹60 lakh loan), EMI drops to ₹53,999 — a saving of ₹10,800 per month." },
    ],
  },
  "cibil-score-loan": {
    title: "CIBIL Score: What It Is, How It Is Calculated & How to Improve It",
    date: "2026-04-05",
    updatedDate: "2026-06-13",
    category: "Loans",
    author: "MoneyTool Editorial Team",
    readTime: "8 min read",
    description: "A complete guide to CIBIL score in India — what it means, how it is calculated, what score you need for a home loan, and proven ways to improve a low CIBIL score.",
    relatedTools: [
      { href: "/emi-calculator", label: "EMI Calculator" },
      { href: "/home-loan-calculator", label: "Home Loan Calculator" },
      { href: "/personal-loan-calculator", label: "Personal Loan Calculator" },
      { href: "/salary-calculator", label: "Salary Calculator" },
    ],
    faqs: [
      { question: "What is a good CIBIL score for a home loan?", answer: "A CIBIL score of 750 or above is considered excellent and qualifies you for the best home loan interest rates. Scores between 700–749 are good and will get loan approval but possibly at slightly higher rates. Scores below 650 make approval difficult and may result in rejection or very high interest rates." },
      { question: "How is CIBIL score calculated?", answer: "CIBIL score (range 300–900) is calculated based on: payment history (35% weightage — most important), credit utilisation ratio (30%), credit age and mix (15% each), and new credit enquiries (5%). Consistently paying dues on time and keeping credit card utilisation below 30% are the two most impactful factors." },
      { question: "How long does it take to improve a CIBIL score?", answer: "With consistent good behaviour (on-time payments, low utilisation), a score can improve by 50–100 points in 6–12 months. Severe negatives like loan defaults or settlements take 3–7 years to fully clear from your credit report, though their impact reduces over time with positive behaviour." },
      { question: "Does checking my own CIBIL score reduce it?", answer: "No. Checking your own CIBIL score is a 'soft enquiry' and has no impact on your score. Only 'hard enquiries' — when a lender checks your score after you apply for credit — slightly reduce the score. Multiple hard enquiries in a short period signal credit-hungry behaviour and can reduce the score." },
      { question: "Can I get a loan with a low CIBIL score?", answer: "Some NBFCs and fintech lenders offer loans to applicants with scores below 650, but at significantly higher interest rates (18–36% versus 8–10% for good scores). A better strategy is to improve the score first before applying, or apply with a co-applicant who has a strong score." },
    ],
  },
  "fixed-vs-floating-rate": {
    title: "Fixed vs Floating Interest Rate: Which Should You Choose in 2026?",
    date: "2026-03-25",
    updatedDate: "2026-06-13",
    category: "Loans",
    author: "MoneyTool Editorial Team",
    readTime: "7 min read",
    description: "A detailed comparison of fixed and floating interest rates for home loans and other loans in India — covering how each works, risk factors, and which is better in the current rate environment.",
    relatedTools: [
      { href: "/emi-calculator", label: "EMI Calculator" },
      { href: "/home-loan-calculator", label: "Home Loan Calculator" },
      { href: "/fd-calculator", label: "FD Calculator" },
      { href: "/rd-calculator", label: "RD Calculator" },
    ],
    faqs: [
      { question: "What is the difference between fixed and floating interest rate?", answer: "A fixed rate remains constant throughout the loan tenure regardless of market conditions. A floating rate changes with the benchmark (RBI repo rate or MCLR), which means your EMI or tenure can increase or decrease over time. Fixed rates offer certainty; floating rates offer potential savings when rates fall." },
      { question: "Is floating rate always cheaper than fixed rate?", answer: "Initially, floating rates are usually 0.5–1% lower than fixed rates offered by the same lender. Over the long run, floating rates can be cheaper if rates fall, or more expensive if rates rise. Historically, floating rates have been favourable for most borrowers over 10–15 year home loan tenures." },
      { question: "Can I switch from fixed to floating rate?", answer: "Yes, most lenders allow conversion from fixed to floating rate (and vice versa) for a fee, typically 0.5–2% of the outstanding loan. The switch makes sense if floating rates have fallen significantly below your fixed rate and you have a long remaining tenure." },
      { question: "Which is better in 2026 — fixed or floating?", answer: "In 2026, with the RBI's rate cycle expected to be neutral to easing, floating rates are generally preferred for long-term home loans. If rates fall, your EMI or tenure will reduce. Fixed rates make more sense for short-term loans (2–5 years) where you want certainty over EMI budgeting." },
      { question: "Are fixed rates truly fixed in India?", answer: "Not always. Many Indian banks offer 'fixed' rates that are actually fixed only for an initial period (3–5 years) after which they convert to floating. Always read the fine print before opting for a 'fixed' rate home loan to understand if it is truly fixed for the entire tenure." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// ARTICLE CONTENT COMPONENTS
// ─────────────────────────────────────────────────────────────────

const textStyle = { fontSize: "15px", lineHeight: "1.9", color: "#a1a1aa" };
const h2Style: React.CSSProperties = { fontSize: "22px", fontWeight: 700, color: "#f4f4f5", margin: "36px 0 14px" };
const h3Style: React.CSSProperties = { fontSize: "17px", fontWeight: 600, color: "#f4f4f5", margin: "24px 0 10px" };
const pStyle = { marginBottom: "18px" };
const ulStyle = { paddingLeft: "20px", marginBottom: "20px" };
const liStyle = { marginBottom: "8px" };

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: "28px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
        <thead>
          <tr style={{ background: "#111113" }}>
            {headers.map((h) => (
              <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 ? 500 : 400 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 1. Home Loan vs Renting ──────────────────────────────────────
function HomeLoanVsRenting() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>Buying a home with a loan or continuing to rent — this is one of the most important financial decisions an Indian household faces. In 2026, with property prices elevated in most metro cities and home loan interest rates between 8.5% and 9.5%, the decision requires a careful comparison of costs, tax benefits, and long-term wealth creation.</p>
      <h2 style={h2Style}>The Real Cost of Buying a Home</h2>
      <p style={pStyle}>Most people compare only rent versus EMI. That is an incomplete picture. The true cost of buying includes:</p>
      <ul style={ulStyle}>
        {["Down payment — typically 10–25% of property value", "Stamp duty and registration — 5–7% of property value", "Home loan processing fee — 0.5–1% of loan amount", "Maintenance charges — ₹2–5/sq.ft/month", "Property tax — ₹5,000–25,000/year", "Interior fit-out — ₹3–10 lakh for a basic 2BHK"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <p style={pStyle}>For a ₹70 lakh flat, the upfront cash requirement including down payment and registration can easily reach ₹20–25 lakh. This capital, if invested in a mutual fund at 12% CAGR, would grow to over ₹62 lakh in 10 years — an opportunity cost that must factor into your comparison.</p>
      <h2 style={h2Style}>Side-by-Side Comparison</h2>
      <Table
        headers={["Factor", "Home Loan", "Renting"]}
        rows={[
          ["Monthly outflow", "EMI (₹40k–₹80k for ₹50L loan)", "Rent (30–50% of equivalent EMI)"],
          ["Upfront cost", "Down payment + stamp duty (15–30%)", "Security deposit (2–3 months)"],
          ["Asset creation", "Yes — builds equity over time", "No — rent is an expense"],
          ["Flexibility", "Low — hard to relocate", "High — can move cities easily"],
          ["Tax benefit", "Section 80C + 24(b) upto ₹3.5L/yr", "HRA exemption if applicable"],
          ["Maintenance", "Owner's responsibility", "Mostly landlord's responsibility"],
          ["Appreciation", "Yes — property value may rise", "None"],
        ]}
      />
      <h2 style={h2Style}>Tax Benefits of a Home Loan (Old Regime)</h2>
      <p style={pStyle}>For a salaried employee in the 30% tax bracket, home loan deductions can save ₹90,000–₹1,05,000 per year:</p>
      <ul style={ulStyle}>
        {["Section 80C — Principal repayment up to ₹1,50,000/year", "Section 24(b) — Interest deduction up to ₹2,00,000/year", "Section 80EEA — Additional ₹1,50,000 for eligible first-time buyers"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <p style={pStyle}>Under the new tax regime, most of these deductions are unavailable. Use the income tax calculator to compare your liability under both regimes before deciding.</p>
      <h2 style={h2Style}>Price-to-Rent Ratio by City (2026)</h2>
      <Table
        headers={["City", "Avg. 2BHK Price", "Monthly Rent", "P/R Ratio", "Verdict"]}
        rows={[
          ["Mumbai (Andheri)", "₹1.8 Cr", "₹45,000", "33", "Rent"],
          ["Delhi NCR (Noida)", "₹80 L", "₹22,000", "30", "Rent"],
          ["Bengaluru (Whitefield)", "₹90 L", "₹30,000", "25", "Neutral"],
          ["Pune (Hinjewadi)", "₹65 L", "₹22,000", "25", "Neutral"],
          ["Hyderabad (Gachibowli)", "₹75 L", "₹26,000", "24", "Slight Buy"],
          ["Jaipur", "₹45 L", "₹18,000", "21", "Buy"],
          ["Indore", "₹38 L", "₹16,000", "20", "Buy"],
        ]}
      />
      <h2 style={h2Style}>When Buying Makes Sense</h2>
      <ul style={ulStyle}>
        {["You plan to stay in the same city for 7–10 years", "EMI will not exceed 35–40% of take-home salary", "Down payment is ready without touching emergency funds", "Price-to-rent ratio in target locality is below 20", "You are on old tax regime and can use the deductions"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>When Renting Makes Sense</h2>
      <ul style={ulStyle}>
        {["You are in a high P/R city like Mumbai (35+) or South Delhi (40+)", "Your career may require relocation in 3–5 years", "Buying would push debt beyond 40% of income", "Emergency fund of 6 months is not yet built", "Down payment would come from liquidating 12%+ return investments"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>There is no universal answer. In high P/R cities like Mumbai or Delhi NCR, renting and investing the surplus for 5–7 years can build more wealth than buying early. In tier-2 cities where ratios are below 20, buying sooner often makes sense. What matters most is that your EMI stays affordable, your emergency fund is intact, and you are not buying under social pressure.</p>
    </div>
  );
}

// ── 2. SIP vs FD ────────────────────────────────────────────────
function SipVsFd() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>Two of the most popular investment options for Indian households — Systematic Investment Plan (SIP) in mutual funds and Fixed Deposits (FD) in banks — serve very different financial purposes. This guide compares both on returns, risk, liquidity, and tax treatment so you can choose the right one for your goals.</p>
      <h2 style={h2Style}>What is a SIP?</h2>
      <p style={pStyle}>A SIP allows you to invest a fixed amount (as low as ₹500/month) regularly into a mutual fund scheme. Instead of timing the market, SIPs use rupee cost averaging — buying more units when prices are low and fewer when prices are high — which smooths out market volatility over time.</p>
      <p style={pStyle}>The power of SIP comes from compounding. A monthly SIP of ₹10,000 for 20 years at 12% CAGR grows to approximately ₹98 lakh. The same investment in a bank FD at 7% compounds to roughly ₹52 lakh — a difference of ₹46 lakh.</p>
      <h2 style={h2Style}>What is a Fixed Deposit?</h2>
      <p style={pStyle}>A Fixed Deposit is a lump sum investment with a bank or NBFC for a fixed tenure at a guaranteed interest rate. Returns are predictable and your capital is protected (up to ₹5 lakh per depositor per bank under DICGC insurance). FDs are the go-to instrument for risk-averse investors and short-term goals.</p>
      <h2 style={h2Style}>Returns Comparison</h2>
      <Table
        headers={["Holding Period", "SIP (Equity — Historical CAGR)", "FD (Current Rate)"]}
        rows={[
          ["1 year", "Variable (can be negative)", "6.5–7.5%"],
          ["3 years", "8–14% (historical range)", "6.5–7.5%"],
          ["5 years", "10–16% (historical range)", "6.5–7.5%"],
          ["10 years", "11–14% (historical range)", "6.5–7.5%"],
          ["15+ years", "12–15% (historical range)", "6.5–7.5%"],
        ]}
      />
      <p style={pStyle}>SIP returns are not guaranteed. Past performance does not predict future results. However, diversified equity mutual funds have historically outperformed FDs over 7+ year periods in India.</p>
      <h2 style={h2Style}>Tax Treatment</h2>
      <Table
        headers={["Aspect", "Equity SIP", "Fixed Deposit"]}
        rows={[
          ["Gains < 1 year", "15% STCG tax", "Taxed at income slab"],
          ["Gains > 1 year", "10% LTCG above ₹1 lakh/year", "Taxed at income slab"],
          ["TDS", "No TDS", "10% TDS if interest > ₹40,000/year"],
          ["80C benefit", "ELSS SIPs — ₹1.5L deduction", "5-year tax saver FD — ₹1.5L deduction"],
        ]}
      />
      <h2 style={h2Style}>Liquidity Comparison</h2>
      <p style={pStyle}>Regular equity and debt SIPs (excluding ELSS) can be redeemed anytime within 1–3 business days. There is no exit load after 1 year for most equity funds. FDs can be broken prematurely but attract a penalty of 0.5–1% on the applicable interest rate, and you lose a portion of your interest earning.</p>
      <h2 style={h2Style}>Which Should You Choose?</h2>
      <Table
        headers={["Your Situation", "Recommended Option"]}
        rows={[
          ["Goal is 1–3 years away", "FD or liquid mutual fund"],
          ["Goal is 5+ years away", "SIP in equity mutual fund"],
          ["Need guaranteed returns", "FD"],
          ["Want to beat inflation long-term", "SIP"],
          ["Saving for tax under 80C", "ELSS SIP (3-yr lock-in) or 5-yr tax saver FD"],
          ["Emergency fund", "FD or liquid fund"],
          ["Retirement corpus (20+ years)", "SIP — equity/balanced advantage fund"],
        ]}
      />
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>SIP and FD are not rivals — they serve different purposes in a balanced portfolio. Keep 3–6 months of expenses in FDs for emergencies, use FDs for near-term goals, and channel long-term wealth-creation money into equity SIPs. Use the SIP calculator and FD calculator to model your specific amounts and timelines.</p>
    </div>
  );
}

// ── 3. EMI Calculation Guide ─────────────────────────────────────
function EmiGuide() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>EMI (Equated Monthly Instalment) is the fixed amount you pay every month to repay a loan. It includes both the principal repayment and the interest component. Understanding how EMI is calculated helps you make smarter borrowing decisions and plan your repayments effectively.</p>
      <h2 style={h2Style}>The EMI Formula</h2>
      <p style={pStyle}>The mathematical formula for EMI calculation is:</p>
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: "10px", padding: "16px 20px", marginBottom: "20px", fontFamily: "monospace", fontSize: "15px", color: "#10b981" }}>
        EMI = [P × R × (1+R)^N] ÷ [(1+R)^N - 1]
      </div>
      <ul style={ulStyle}>
        {["P = Principal loan amount (₹)", "R = Monthly interest rate = Annual rate ÷ 12 ÷ 100", "N = Loan tenure in months"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h3 style={h3Style}>Example Calculation</h3>
      <p style={pStyle}>Home loan of ₹50 lakh at 9% annual interest for 20 years (240 months):</p>
      <ul style={ulStyle}>
        <li style={liStyle}>R = 9 ÷ 12 ÷ 100 = 0.0075</li>
        <li style={liStyle}>EMI = [50,00,000 × 0.0075 × (1.0075)^240] ÷ [(1.0075)^240 - 1]</li>
        <li style={liStyle}><strong style={{ color: "#f4f4f5" }}>EMI = ₹44,986/month</strong></li>
        <li style={liStyle}>Total amount paid = ₹1,07,96,640</li>
        <li style={liStyle}><strong style={{ color: "#f4f4f5" }}>Total interest paid = ₹57,96,640</strong></li>
      </ul>
      <h2 style={h2Style}>How Tenure Affects EMI and Total Interest</h2>
      <Table
        headers={["Loan Amount", "Interest Rate", "Tenure", "EMI", "Total Interest"]}
        rows={[
          ["₹50 Lakh", "9%", "10 years", "₹63,338", "₹26.0 Lakh"],
          ["₹50 Lakh", "9%", "15 years", "₹50,714", "₹41.3 Lakh"],
          ["₹50 Lakh", "9%", "20 years", "₹44,986", "₹57.9 Lakh"],
          ["₹50 Lakh", "9%", "25 years", "₹41,960", "₹75.9 Lakh"],
          ["₹50 Lakh", "9%", "30 years", "₹40,231", "₹94.8 Lakh"],
        ]}
      />
      <p style={pStyle}>A longer tenure reduces EMI but nearly doubles the total interest paid over the loan life. Choosing the shortest tenure your income can comfortably support is the financially optimal choice.</p>
      <h2 style={h2Style}>How Interest Rate Affects EMI</h2>
      <Table
        headers={["Loan Amount", "Tenure", "Interest Rate", "EMI", "Total Interest"]}
        rows={[
          ["₹50 Lakh", "20 years", "8.0%", "₹41,822", "₹50.4 Lakh"],
          ["₹50 Lakh", "20 years", "8.5%", "₹43,391", "₹54.1 Lakh"],
          ["₹50 Lakh", "20 years", "9.0%", "₹44,986", "₹57.9 Lakh"],
          ["₹50 Lakh", "20 years", "9.5%", "₹46,607", "₹61.9 Lakh"],
          ["₹50 Lakh", "20 years", "10.0%", "₹48,251", "₹66.0 Lakh"],
        ]}
      />
      <h2 style={h2Style}>Principal vs Interest in Each EMI</h2>
      <p style={pStyle}>In the early years of a loan, most of your EMI goes toward interest — not principal. This is called front-loading of interest. For a ₹50 lakh loan at 9% for 20 years:</p>
      <ul style={ulStyle}>
        <li style={liStyle}>Month 1: ₹37,500 interest + ₹7,486 principal</li>
        <li style={liStyle}>Month 60 (Year 5): ₹35,420 interest + ₹9,566 principal</li>
        <li style={liStyle}>Month 120 (Year 10): ₹30,850 interest + ₹14,136 principal</li>
        <li style={liStyle}>Month 180 (Year 15): ₹23,060 interest + ₹21,926 principal</li>
        <li style={liStyle}>Month 240 (Year 20): ₹335 interest + ₹44,651 principal</li>
      </ul>
      <p style={pStyle}>This is why prepaying in the early years saves far more interest than prepaying in the later years.</p>
      <h2 style={h2Style}>How to Reduce Your Total EMI Burden</h2>
      <ul style={ulStyle}>
        {["Make a larger down payment — reduces principal and therefore EMI", "Choose the shortest tenure your income allows — saves lakhs in interest", "Prepay whenever you have surplus income (bonus, incentive, gifts)", "Compare lenders and negotiate — even 0.25% difference saves significantly", "Improve your CIBIL score before applying for a better rate", "Consider balance transfer if current lender's rate is much higher than market"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>Understanding EMI calculation empowers you to make better borrowing decisions. Always compare the total interest paid — not just the monthly EMI — before finalising a loan. Use the EMI calculator to test different combinations of principal, rate, and tenure to find the optimal balance for your financial situation.</p>
    </div>
  );
}

// ── 4. Tax Saving Strategies ─────────────────────────────────────
function TaxSavings() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>For most salaried employees in India, tax planning is a once-a-year rush in January–March. But a well-structured approach to tax saving throughout the year can reduce your tax liability significantly while also building wealth. Here are 10 proven strategies for FY 2025-26.</p>
      <h2 style={h2Style}>First: Decide Between Old and New Tax Regime</h2>
      <p style={pStyle}>The most important tax decision is which regime to choose. The new regime offers lower rates but removes most deductions. The old regime is better if your total deductions exceed a certain threshold.</p>
      <Table
        headers={["Annual Income", "New Regime Tax", "Old Regime Tax (with deductions)", "Better Choice"]}
        rows={[
          ["₹7 lakh", "₹0 (rebate)", "₹0 (rebate)", "Either"],
          ["₹10 lakh", "₹54,600", "₹37,700 (with ₹3.5L deductions)", "Old Regime"],
          ["₹12 lakh", "₹83,200", "₹62,400 (with ₹3.5L deductions)", "Old Regime"],
          ["₹15 lakh", "₹1,45,600", "₹1,30,000 (with ₹3.5L deductions)", "Old Regime"],
          ["₹20 lakh", "₹2,96,400", "₹2,42,200 (with ₹3.5L deductions)", "Old Regime"],
        ]}
      />
      <p style={pStyle}>Use the income tax calculator to compute your specific liability under both regimes based on your actual income and deductions.</p>
      <h2 style={h2Style}>Strategy 1: Max Out Section 80C — ₹1.5 Lakh Deduction</h2>
      <p style={pStyle}>Section 80C is the most widely used deduction, available only under the old regime. Eligible investments and expenses:</p>
      <ul style={ulStyle}>
        {["EPF contribution (mandatory for most salaried — counts automatically)", "PPF deposit — ₹500 to ₹1.5 lakh/year", "ELSS mutual funds — 3-year lock-in, highest potential returns", "Life insurance premium", "5-year tax saver FD", "Home loan principal repayment", "Children's tuition fees (up to 2 children)"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>Strategy 2: Additional ₹50,000 via NPS (Section 80CCD(1B))</h2>
      <p style={pStyle}>Over and above the 80C limit of ₹1.5 lakh, you can invest an additional ₹50,000 in the National Pension System (NPS) under Section 80CCD(1B). For someone in the 30% bracket, this saves ₹15,600 in additional tax. NPS has a lock-in until age 60 and mandates 40% annuity purchase at maturity.</p>
      <h2 style={h2Style}>Strategy 3: Health Insurance — Section 80D</h2>
      <ul style={ulStyle}>
        {["Self, spouse, children: deduction up to ₹25,000", "Parents below 60: additional ₹25,000", "Parents above 60 (senior citizens): additional ₹50,000", "Maximum total deduction possible: ₹75,000/year"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>Strategy 4: HRA Exemption</h2>
      <p style={pStyle}>If you live in rented accommodation, HRA received from your employer is partially or fully exempt from tax. The exempt amount is the minimum of: actual HRA received, 50% of basic salary (metro cities) or 40% (non-metro), and actual rent paid minus 10% of basic salary. Use the HRA calculator to find your exact exemption.</p>
      <h2 style={h2Style}>Strategy 5: Home Loan Interest — Section 24(b)</h2>
      <p style={pStyle}>If you have a home loan on a self-occupied property, you can claim up to ₹2 lakh deduction on interest paid under Section 24(b). For a rented-out property, there is no limit on interest deduction but the total loss from house property that can be set off against salary income is capped at ₹2 lakh.</p>
      <h2 style={h2Style}>Strategy 6–10: Additional Deductions</h2>
      <Table
        headers={["Section", "Deduction", "Limit"]}
        rows={[
          ["80E", "Education loan interest", "No limit — full interest deductible for 8 years"],
          ["80G", "Donations to approved charities", "50–100% of donation (some with limits)"],
          ["80TTA", "Savings account interest", "Up to ₹10,000/year"],
          ["80TTB", "Interest income for senior citizens", "Up to ₹50,000/year"],
          ["Leave Travel Allowance", "LTA for travel within India", "Actual travel cost — 2 journeys in 4-year block"],
        ]}
      />
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>A well-planned tax strategy using Section 80C, 80D, HRA, NPS, and home loan deductions can reduce taxable income by ₹4–5 lakh for an average salaried employee, saving ₹80,000–1,50,000 in annual tax. The key is to choose the right investments early in the financial year rather than rushing in March. Use the income tax calculator and salary calculator to estimate your exact savings.</p>
    </div>
  );
}

// ── 5. PPF Complete Guide ────────────────────────────────────────
function PpfGuide() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>Public Provident Fund (PPF) is one of India's most trusted long-term savings instruments — government-backed, completely tax-free, and available to every Indian citizen. Whether you are a salaried employee, self-employed professional, or business owner, PPF provides a safe, disciplined way to build a substantial corpus over 15 years.</p>
      <h2 style={h2Style}>PPF at a Glance (2026)</h2>
      <Table
        headers={["Feature", "Details"]}
        rows={[
          ["Current Interest Rate", "7.1% per annum (compounded annually)"],
          ["Minimum Investment", "₹500 per financial year"],
          ["Maximum Investment", "₹1,50,000 per financial year"],
          ["Lock-in Period", "15 years (extendable in 5-year blocks)"],
          ["Tax Treatment", "EEE — Exempt at investment, interest, and withdrawal"],
          ["Partial Withdrawal", "From 7th year — up to 50% of balance"],
          ["Loan Facility", "From 3rd to 6th year — up to 25% of 2nd year balance"],
          ["Who Can Open", "Indian citizens (not NRIs, HUFs, or trusts)"],
        ]}
      />
      <h2 style={h2Style}>Why PPF is Called EEE — Triple Tax Exempt</h2>
      <ul style={ulStyle}>
        {["Investment: Up to ₹1.5 lakh/year qualifies for Section 80C deduction", "Interest: Annual interest earned is completely tax-free", "Maturity: The entire corpus at maturity is tax-free — no capital gains tax"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <p style={pStyle}>No other fixed-income instrument in India offers this combination of government guarantee + triple tax exemption. Even EPF, which is similar, is taxable if you withdraw within 5 years of service.</p>
      <h2 style={h2Style}>PPF Growth — What ₹1.5 Lakh/Year Becomes</h2>
      <Table
        headers={["Year", "Cumulative Investment", "Balance (at 7.1%)"]}
        rows={[
          ["Year 5", "₹7,50,000", "₹8,97,194"],
          ["Year 10", "₹15,00,000", "₹21,24,285"],
          ["Year 15 (Maturity)", "₹22,50,000", "₹40,68,209"],
          ["Year 20 (1st Extension)", "₹30,00,000", "₹66,58,288"],
          ["Year 25 (2nd Extension)", "₹37,50,000", "₹1,03,08,015"],
        ]}
      />
      <p style={pStyle}>If you invest the maximum ₹1.5 lakh annually and extend the account for 10 years beyond maturity (25 years total), your PPF corpus grows to over ₹1 crore — entirely tax-free. Use the PPF calculator to customise projections for your investment amount.</p>
      <h2 style={h2Style}>Best Time to Deposit in PPF</h2>
      <p style={pStyle}>PPF interest is calculated on the minimum balance between the 5th and last day of each month. This means:</p>
      <ul style={ulStyle}>
        {["Deposit before the 5th of each month to earn interest for that month", "Depositing on the 6th or later means you lose one month of interest", "Annual lump sum depositors: deposit before April 5th to earn interest for the entire year", "A lump sum deposited on April 1st earns interest for all 12 months"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>PPF vs Other Fixed-Income Options</h2>
      <Table
        headers={["Instrument", "Rate", "Tax on Interest", "Lock-in", "Safety"]}
        rows={[
          ["PPF", "7.1%", "Tax-free", "15 years", "Sovereign"],
          ["Bank FD", "6.5–7.5%", "Taxable (slab)", "Flexible", "DICGC insured upto ₹5L"],
          ["NSC", "7.7%", "Taxable (slab)", "5 years", "Sovereign"],
          ["Sukanya Samriddhi", "8.2%", "Tax-free", "21 years", "Sovereign"],
          ["Senior Citizen FD", "7.5–8.0%", "Taxable (slab)", "5 years", "DICGC insured upto ₹5L"],
        ]}
      />
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>PPF is an excellent foundation for any long-term financial plan. It suits conservative investors, those in high tax brackets, and anyone who values capital safety. The 15-year lock-in — often seen as a disadvantage — actually enforces financial discipline and lets compounding work its magic. Start early, deposit consistently before the 5th of each month, and consider extending beyond 15 years for a truly transformative corpus.</p>
    </div>
  );
}

// ── 6. GST Compliance Guide ──────────────────────────────────────
function GstGuide() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>GST (Goods and Services Tax) has been in effect in India since July 2017, replacing a complex web of central and state taxes with a unified system. For small business owners, freelancers, and consultants, GST compliance is non-negotiable — and getting it right from the start saves significant time, penalties, and stress.</p>
      <h2 style={h2Style}>Do You Need to Register for GST?</h2>
      <Table
        headers={["Business Type", "Annual Turnover Threshold for Registration"]}
        rows={[
          ["Goods supplier (most states)", "₹40 lakh"],
          ["Service provider (most states)", "₹20 lakh"],
          ["Special category states (NE, Uttarakhand)", "₹10 lakh"],
          ["Inter-state seller", "Mandatory regardless of turnover"],
          ["E-commerce seller", "Mandatory regardless of turnover"],
          ["Casual taxable person", "Mandatory before supply begins"],
        ]}
      />
      <p style={pStyle}>Even if your turnover is below the threshold, voluntary GST registration is beneficial if you sell to businesses that need to claim Input Tax Credit (ITC) from your invoices.</p>
      <h2 style={h2Style}>GST Rate Structure</h2>
      <Table
        headers={["GST Rate", "What It Covers"]}
        rows={[
          ["0% (Exempt)", "Fresh vegetables, milk, eggs, educational services, healthcare"],
          ["5%", "Packed food, coffee, tea, medicines, economy hotels"],
          ["12%", "Processed foods, computers, business class flights, construction"],
          ["18%", "Most services (CA, legal, software, telecom), most manufactured goods"],
          ["28%", "Luxury goods, automobiles, tobacco, AC, cement"],
        ]}
      />
      <h2 style={h2Style}>GST Returns You Need to File</h2>
      <Table
        headers={["Return", "What It Is", "Due Date"]}
        rows={[
          ["GSTR-1", "Outward sales details", "11th of next month (monthly) or 13th of next quarter"],
          ["GSTR-3B", "Monthly summary + tax payment", "20th of next month"],
          ["GSTR-9", "Annual return", "31st December of next financial year"],
          ["CMP-08 (Composition)", "Quarterly tax payment", "18th of month after quarter end"],
        ]}
      />
      <h2 style={h2Style}>Input Tax Credit (ITC) — The Core Benefit of GST</h2>
      <p style={pStyle}>ITC allows registered businesses to claim credit for the GST they paid on purchases and reduce it from the GST collected on sales. Example:</p>
      <ul style={ulStyle}>
        <li style={liStyle}>GST collected on sales: ₹36,000</li>
        <li style={liStyle}>GST paid on raw materials and services: ₹15,000</li>
        <li style={liStyle}><strong style={{ color: "#10b981" }}>GST payable to government: ₹21,000 only</strong></li>
      </ul>
      <p style={pStyle}>To claim ITC, your supplier must have filed their GSTR-1 and the invoice must appear in your GSTR-2B. ITC cannot be claimed on personal expenses, non-business use, or blocked credits like employee insurance and club memberships.</p>
      <h2 style={h2Style}>GST Invoice Requirements</h2>
      <p style={pStyle}>A valid GST invoice must include:</p>
      <ul style={ulStyle}>
        {["Your GSTIN (Goods and Services Tax Identification Number)", "Invoice number and date", "Buyer's name, address, and GSTIN (if registered)", "Description and HSN/SAC code of goods or services", "Taxable value and applicable GST (CGST + SGST or IGST)", "Total invoice value including GST"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <p style={pStyle}>Use the free invoice builder to generate GST-compliant invoices with all required fields and auto-calculated tax splits. Download as PDF and share with clients directly.</p>
      <h2 style={h2Style}>Common GST Mistakes to Avoid</h2>
      <ul style={ulStyle}>
        {["Wrong HSN/SAC code — leads to wrong GST rate and notices", "Not reconciling GSTR-2B before claiming ITC — rejected claims", "Missing return deadlines — ₹50/day late fee per return", "Not updating business details on GST portal after changes", "Claiming ITC on ineligible expenses (personal use, blocked credits)", "Issuing invoices without GSTIN or with wrong invoice sequence"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>GST compliance is manageable once you establish a system: issue proper invoices, file returns on time, reconcile ITC monthly, and maintain clean books. The penalties for non-compliance are steep but entirely avoidable with basic discipline. Use the GST calculator for quick tax computations and the invoice builder for professional client billing.</p>
    </div>
  );
}

// ── 7. Reduce Home Loan EMI ──────────────────────────────────────
function ReduceEmi() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>A home loan is the largest financial commitment most Indian households make. With loan amounts often running into crores and tenures stretching to 20–30 years, even a small reduction in EMI or interest rate can save lakhs over the loan life. Here are 7 strategies that actually work in 2026.</p>
      <h2 style={h2Style}>Strategy 1: Make a Larger Down Payment</h2>
      <p style={pStyle}>The most direct way to reduce EMI is to borrow less. Every additional rupee you put in as down payment reduces the principal and therefore the EMI.</p>
      <Table
        headers={["Property Value", "Down Payment", "Loan Amount", "EMI (9%, 20 yrs)", "Monthly Saving"]}
        rows={[
          ["₹80 lakh", "₹8L (10%)", "₹72 lakh", "₹64,799", "—"],
          ["₹80 lakh", "₹16L (20%)", "₹64 lakh", "₹57,599", "₹7,200/month"],
          ["₹80 lakh", "₹20L (25%)", "₹60 lakh", "₹53,999", "₹10,800/month"],
        ]}
      />
      <h2 style={h2Style}>Strategy 2: Compare and Negotiate the Interest Rate</h2>
      <p style={pStyle}>Most borrowers accept the first rate offered by their bank. This is a costly mistake. Home loan rates in 2026 range from 8.35% to 9.5% across major lenders — a difference of 1.15% on ₹60 lakh over 20 years amounts to ₹9.6 lakh in extra interest. Always get quotes from at least 3–4 banks and NBFCs and negotiate.</p>
      <h2 style={h2Style}>Strategy 3: Choose Shorter Tenure Initially</h2>
      <p style={pStyle}>A shorter tenure means a higher EMI but dramatically lower total interest cost. If your income can support it, choose 15 years over 20 or 25 years.</p>
      <Table
        headers={["Loan: ₹50 Lakh @ 9%", "EMI", "Total Interest", "Saving vs 25 yr"]}
        rows={[
          ["25 year tenure", "₹41,960", "₹75.9 Lakh", "—"],
          ["20 year tenure", "₹44,986", "₹57.9 Lakh", "₹18 Lakh saved"],
          ["15 year tenure", "₹50,714", "₹41.3 Lakh", "₹34.6 Lakh saved"],
        ]}
      />
      <h2 style={h2Style}>Strategy 4: Make Regular Partial Prepayments</h2>
      <p style={pStyle}>Prepaying even small amounts early in the loan saves disproportionately large interest because the prepaid amount stops accumulating future interest. A ₹2 lakh prepayment in Year 2 of a 20-year home loan can save ₹4–5 lakh in total interest. Use your annual bonus, incentives, or any windfall toward prepayment.</p>
      <p style={pStyle}>When prepaying, you have two options: ask the bank to reduce the EMI (same tenure, lower monthly outflow) or reduce the tenure (same EMI, closes faster). Reducing tenure almost always saves more total interest.</p>
      <h2 style={h2Style}>Strategy 5: Do a Balance Transfer to a Lower-Rate Lender</h2>
      <p style={pStyle}>If your existing lender's rate is 0.5%+ higher than what other banks are offering for similar profiles, a balance transfer can save significantly. Savings calculation for ₹50 lakh outstanding, 15 years remaining, 0.75% rate reduction:</p>
      <ul style={ulStyle}>
        <li style={liStyle}>Current EMI at 9.5%: ₹52,237</li>
        <li style={liStyle}>New EMI at 8.75%: ₹49,810</li>
        <li style={liStyle}><strong style={{ color: "#10b981" }}>Monthly saving: ₹2,427 → Total saving over 15 years: ₹4.4 lakh</strong></li>
        <li style={liStyle}>Balance transfer cost (1% of loan): ₹50,000</li>
        <li style={liStyle}><strong style={{ color: "#10b981" }}>Net saving: ₹3.9 lakh</strong></li>
      </ul>
      <h2 style={h2Style}>Strategy 6: Negotiate Rate Reduction With Existing Lender</h2>
      <p style={pStyle}>Before doing a balance transfer, try negotiating with your current lender. If your CIBIL score has improved, you have a good repayment track record, or competing lenders are offering lower rates, most banks will reduce your rate through an "internal balance transfer" for a smaller fee (₹5,000–₹15,000 flat) — much cheaper than switching banks.</p>
      <h2 style={h2Style}>Strategy 7: Switch From Fixed to Floating Rate (If Applicable)</h2>
      <p style={pStyle}>If you took a fixed rate home loan when rates were high and current floating rates have fallen below your fixed rate, switching can reduce your EMI. Most lenders charge 1–2% of outstanding principal as conversion fee. Calculate the break-even before switching.</p>
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>The best home loan strategy combines multiple approaches: start with a large enough down payment, negotiate aggressively on rate, choose the shortest comfortable tenure, and make at least one prepayment per year. Use the home loan calculator and EMI calculator to model different scenarios before making any decision.</p>
    </div>
  );
}

// ── 8. CIBIL Score Guide ─────────────────────────────────────────
function CibilGuide() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>Your CIBIL score is a three-digit number between 300 and 900 that summarises your credit history. Lenders across India — banks, NBFCs, and fintech companies — use this score to decide whether to approve your loan and at what interest rate. A high score unlocks better loans at lower rates; a low score leads to rejection or expensive credit.</p>
      <h2 style={h2Style}>CIBIL Score Ranges and What They Mean</h2>
      <Table
        headers={["Score Range", "Rating", "Loan Approval Likelihood", "Interest Rate Impact"]}
        rows={[
          ["750–900", "Excellent", "Very high — best rates available", "Lowest available rate"],
          ["700–749", "Good", "High — most lenders approve", "Slightly higher rate"],
          ["650–699", "Fair", "Moderate — some lenders decline", "0.5–1% higher rate"],
          ["600–649", "Poor", "Low — mostly NBFCs and MFIs", "2–5% higher rate"],
          ["300–599", "Very Poor", "Very low — mostly rejected", "If approved, very high rate"],
        ]}
      />
      <h2 style={h2Style}>How CIBIL Score is Calculated</h2>
      <Table
        headers={["Factor", "Weightage", "What It Means"]}
        rows={[
          ["Payment History", "35%", "On-time payment of loans and credit card bills"],
          ["Credit Utilisation", "30%", "How much of your credit card limit you use"],
          ["Credit Age", "15%", "How long your credit accounts have been active"],
          ["Credit Mix", "10%", "Variety of secured (loan) and unsecured (card) credit"],
          ["New Credit Enquiries", "10%", "How many times lenders pulled your report recently"],
        ]}
      />
      <h2 style={h2Style}>Most Important: Payment History (35%)</h2>
      <p style={pStyle}>A single missed EMI or credit card payment can reduce your CIBIL score by 50–100 points. A default or settlement can reduce it by 200+ points and stays on your report for 7 years. Set up auto-pay for all EMIs and the minimum credit card payment as a non-negotiable habit.</p>
      <h2 style={h2Style}>Second Most Important: Credit Utilisation (30%)</h2>
      <p style={pStyle}>Credit utilisation is the percentage of your credit card limit being used. If your credit card limit is ₹1 lakh and your outstanding balance is ₹70,000, your utilisation is 70% — which severely damages your score. Ideal utilisation is below 30%. Strategies to improve this:</p>
      <ul style={ulStyle}>
        {["Pay credit card bills in full before the statement date, not just the due date", "Request a limit increase from the bank (without spending more)", "Distribute spending across multiple cards to keep each card's utilisation low", "Avoid using your full credit limit even if you plan to pay it off"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>How Long Does It Take to Improve Your Score?</h2>
      <Table
        headers={["Action Taken", "Expected Score Impact", "Timeframe"]}
        rows={[
          ["Pay all dues on time consistently", "+50–100 points", "6–12 months"],
          ["Reduce credit card utilisation below 30%", "+30–60 points", "1–2 months"],
          ["Close a loan with clean history", "+20–30 points", "1–2 months"],
          ["Dispute and correct report errors", "+50–150 points", "30–45 days"],
          ["Clear a loan default or settlement", "+100–200 points", "12–24 months"],
          ["Recover from bankruptcy/writeoff", "+100–200 points", "3–7 years"],
        ]}
      />
      <h2 style={h2Style}>Check Your CIBIL Score for Free</h2>
      <p style={pStyle}>You are entitled to one free CIBIL report per year at www.cibil.com. Additionally, many banks (HDFC, ICICI, Axis, SBI) and fintech apps (Paytm, BankBazaar, CreditMantri) offer free monthly CIBIL score checks. Always check your score 3–6 months before applying for a major loan to have time to correct any errors.</p>
      <h2 style={h2Style}>Common CIBIL Report Errors to Watch For</h2>
      <ul style={ulStyle}>
        {["Closed accounts still showing as active or outstanding", "Late payment marks for EMIs that were actually paid on time", "Loan accounts that don't belong to you (identity fraud)", "Incorrect personal details (name, date of birth, PAN)", "Duplicate accounts or enquiries"].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <p style={pStyle}>Dispute errors directly on the CIBIL website. Resolution typically takes 30–45 days and can improve your score significantly.</p>
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>Your CIBIL score is your financial reputation. The two most impactful habits are paying every bill on time and keeping credit card utilisation below 30%. With consistent effort, a poor score can be rebuilt over 12–24 months, and an average score can become excellent in 6–12 months. Before your next loan application, check your score, correct any errors, and give yourself time to improve it — the interest rate savings over a 20-year home loan can run into lakhs.</p>
    </div>
  );
}

// ── 9. Fixed vs Floating Rate ────────────────────────────────────
function FixedVsFloating() {
  return (
    <div style={textStyle}>
      <p style={pStyle}>When taking a home loan or any long-term loan in India, one of the key decisions is whether to choose a fixed or floating interest rate. Both have advantages and disadvantages depending on the interest rate environment, your risk tolerance, and the loan tenure. This guide explains both options clearly so you can choose wisely.</p>
      <h2 style={h2Style}>What is a Fixed Interest Rate?</h2>
      <p style={pStyle}>A fixed interest rate remains the same throughout the loan tenure regardless of what happens to market interest rates. Your EMI is predictable and does not change. Fixed rates are typically 1–2% higher than floating rates at the time of loan origination, as the lender takes on the risk of future rate movements.</p>
      <p style={pStyle}>Important: In India, most "fixed rate" home loans are fixed only for an initial 2–5 year period after which they convert to floating rate. Truly fixed rate home loans for the full tenure are rare and expensive. Always confirm whether the rate is fixed for the entire tenure or only partially.</p>
      <h2 style={h2Style}>What is a Floating Interest Rate?</h2>
      <p style={pStyle}>A floating rate is linked to an external benchmark — currently the RBI repo rate for most home loans (since October 2019). When the RBI changes the repo rate, your loan rate changes within 3 months. In a falling rate environment, your EMI reduces automatically. In a rising rate environment, it increases.</p>
      <h2 style={h2Style}>Fixed vs Floating — Direct Comparison</h2>
      <Table
        headers={["Factor", "Fixed Rate", "Floating Rate"]}
        rows={[
          ["Rate level", "Higher (1–2% above floating)", "Lower initially"],
          ["EMI predictability", "Fully predictable", "Changes with RBI rate decisions"],
          ["Benefit when rates rise", "Protected — EMI stays same", "EMI increases"],
          ["Benefit when rates fall", "No benefit — EMI stays same", "EMI reduces automatically"],
          ["Prepayment charges", "Often charged (2% of outstanding)", "Usually nil for individuals"],
          ["Best for", "Short loans, rate-rise expectations", "Long loans, rate-fall expectations"],
        ]}
      />
      <h2 style={h2Style}>How Floating Rates Work in Practice</h2>
      <p style={pStyle}>Repo rate-linked home loans (the current standard) reset quarterly. If the RBI cuts the repo rate by 25 basis points, your effective home loan rate drops by 25 basis points within 3 months. Between 2019–2020, the RBI cut rates by 250 basis points — borrowers on floating rates saw their EMIs reduce significantly or their tenure shorten. Between 2022–2023, rates rose by 250 basis points — floating rate borrowers saw EMI increases or tenure extensions.</p>
      <h2 style={h2Style}>EMI Impact of Rate Changes on a ₹50 Lakh Loan</h2>
      <Table
        headers={["Loan: ₹50 Lakh, 20 years", "Interest Rate", "Monthly EMI", "Change"]}
        rows={[
          ["Rates fall 1%", "8.0%", "₹41,822", "−₹3,164 vs 9%"],
          ["Rates fall 0.5%", "8.5%", "₹43,391", "−₹1,595 vs 9%"],
          ["Base case", "9.0%", "₹44,986", "—"],
          ["Rates rise 0.5%", "9.5%", "₹46,607", "+₹1,621 vs 9%"],
          ["Rates rise 1%", "10.0%", "₹48,251", "+₹3,265 vs 9%"],
        ]}
      />
      <h2 style={h2Style}>Which Should You Choose in 2026?</h2>
      <p style={pStyle}>In the current interest rate environment where the RBI's rate cycle is expected to be neutral to modestly easing:</p>
      <ul style={ulStyle}>
        {["Long-term home loans (15–25 years): Floating rate is generally better. You benefit from any rate cuts, and prepayment penalties are nil for individuals.", "Short-term loans (2–5 years): Fixed rate provides certainty and removes interest rate risk over a short period.", "If you believe rates will rise significantly: Fixed rate protects your EMI.", "If you believe rates will fall or stay flat: Floating rate is the better choice."].map((i) => <li key={i} style={liStyle}>{i}</li>)}
      </ul>
      <h2 style={h2Style}>For FD and RD Investors: Fixed vs Floating Applies Too</h2>
      <p style={pStyle}>When rates are expected to fall, locking in a long-term FD at the current higher rate is smart — it protects your returns from future rate cuts. When rates are rising, short-term FDs allow you to reinvest at higher rates. Use the FD calculator and RD calculator to model different scenarios.</p>
      <h2 style={h2Style}>Conclusion</h2>
      <p style={pStyle}>For most Indian home loan borrowers in 2026, a floating rate linked to the repo rate is the practical default — lower initial rate, no prepayment penalty, and automatic benefit from any future RBI rate cuts. The key is to maintain a buffer in your monthly budget to absorb potential EMI increases if rates rise, and to make regular prepayments to reduce your exposure to rate volatility.</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CONTENT ROUTER
// ─────────────────────────────────────────────────────────────────
function ArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case "home-loan-vs-renting": return <HomeLoanVsRenting />;
    case "sip-vs-fd": return <SipVsFd />;
    case "emi-calculation-guide": return <EmiGuide />;
    case "tax-savings-strategies": return <TaxSavings />;
    case "ppf-complete-guide": return <PpfGuide />;
    case "gst-compliance-guide": return <GstGuide />;
    case "reduce-home-loan-emi": return <ReduceEmi />;
    case "cibil-score-loan": return <CibilGuide />;
    case "fixed-vs-floating-rate": return <FixedVsFloating />;
    default: return null;
  }
}

// ─────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS[params.slug];
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | MoneyTool Blog`,
    description: post.description,
    alternates: { canonical: `https://www.moneytool.in/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.moneytool.in/blog/${params.slug}`,
      images: [{ url: "https://www.moneytool.in/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

// ─────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    return (
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px", color: "#f4f4f5" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>Post Not Found</h1>
        <Link href="/blog" style={{ color: "#10b981", textDecoration: "none" }}>← Back to Blog</Link>
      </main>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate,
    author: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
    publisher: {
      "@type": "Organization",
      name: "MoneyTool",
      url: "https://www.moneytool.in",
      logo: { "@type": "ImageObject", url: "https://www.moneytool.in/og-image.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.moneytool.in/blog/${params.slug}` },
    image: "https://www.moneytool.in/og-image.png",
  };

  const faqSchema = post.faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.moneytool.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.moneytool.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.moneytool.in/blog/${params.slug}` },
    ],
  };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px", color: "#f4f4f5" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: 13, color: "#52525b", marginBottom: 24 }}>
        <Link href="/" style={{ color: "#10b981", textDecoration: "none" }}>Home</Link>
        {" › "}
        <Link href="/blog" style={{ color: "#10b981", textDecoration: "none" }}>Blog</Link>
        {" › "}
        <span>{post.title}</span>
      </nav>

      <article>
        {/* Header */}
        <header style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, background: "rgba(16,185,129,0.1)", color: "#10b981", padding: "4px 12px", borderRadius: 4 }}>{post.category}</span>
            <span style={{ fontSize: 12, color: "#71717a" }}>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span style={{ fontSize: 12, color: "#52525b" }}>Updated: {new Date(post.updatedDate).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span style={{ fontSize: 12, color: "#52525b" }}>{post.readTime}</span>
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, marginBottom: 14 }}>{post.title}</h1>
          <p style={{ fontSize: 13, color: "#52525b" }}>By {post.author}</p>
        </header>

        {/* Article body */}
        <ArticleContent slug={params.slug} />

        {/* FAQs */}
        {post.faqs.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {post.faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid #27272a", paddingBottom: 20 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{faq.question}</h3>
                  <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools */}
        <section style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 12, padding: 24, marginTop: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>Related Free Tools</h2>
          <p style={{ color: "#a1a1aa", marginBottom: 16, fontSize: 14 }}>Use these calculators to apply what you just learned:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            {post.relatedTools.map((tool) => (
              <Link key={tool.href} href={tool.href} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 8, padding: "12px 16px", textDecoration: "none", color: "#a1a1aa", fontSize: 14, display: "block" }}>
                {tool.label} →
              </Link>
            ))}
          </div>
        </section>

        {/* Back */}
        <div style={{ marginTop: 40 }}>
          <Link href="/blog" style={{ color: "#10b981", textDecoration: "none", fontSize: 14 }}>← Back to Blog</Link>
        </div>
      </article>
    </main>
  );
}
