import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Tools | MoneyTool",
  description: "Free business tools for invoicing, payslips, GST calculations and more. Perfect for freelancers and small business owners.",
  alternates: {
    canonical: "https://www.moneytool.in/business-tools",
  },
};

export default function BusinessToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}