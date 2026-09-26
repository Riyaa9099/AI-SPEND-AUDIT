import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SpendIQ | AI Subscription & Cost Optimizer",
  description:
    "Free instant auditor for tech teams. Detect redundant code assistants (Cursor + Copilot), multi-LLM overlap, and unassigned seats to save 25-45% annually.",
  keywords: [
    "SpendIQ",
    "AI spend audit",
    "cut AI costs",
    "Cursor pricing",
    "ChatGPT team savings",
    "SaaS cost optimizer",
    "GitHub Copilot audit",
    "AI subscription management",
  ],
  openGraph: {
    title: "SpendIQ — Stop Overpaying For AI Tools",
    description:
      "Audit your company's AI stack instantly. Uncover hidden redundancies, seat waste, and monthly savings.",
    type: "website",
    url: "https://spendiq.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
