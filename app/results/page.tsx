"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpendingChart from "@/components/SpendingChart";
import { ToolItem, Currency } from "@/lib/types";
import { calculateAudit } from "@/lib/auditLogic";
import { ArrowLeft, ArrowRight, Download, CheckCircle, AlertCircle } from "lucide-react";

export default function ResultsPage() {
  const [tools, setTools] = useState<ToolItem[]>([]);
  const [currency, setCurrency] = useState<Currency>("$");

  useEffect(() => {
    const savedTools = localStorage.getItem("my_tools");
    const savedCurrency = localStorage.getItem("my_currency");

    if (savedTools) {
      try {
        const parsed = JSON.parse(savedTools);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTools(parsed);
        }
      } catch (err) {
        console.error("Error reading saved tools", err);
      }
    }

    if (savedCurrency) {
      setCurrency(savedCurrency as Currency);
    }
  }, []);

  const { totalSpend, totalSavings, yearlySavings, score, recommendations } =
    useMemo(() => calculateAudit(tools), [tools]);

  const chartData = tools.map((t) => ({
    name: t.name,
    value: Number(t.spend) || 0,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-zinc-100">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
        <Link
          href="/audit"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Audit Dashboard</span>
        </Link>

        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Audit Results
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-4">
            You Could Save{" "}
            <span className="text-emerald-400 font-mono">
              {currency}
              {yearlySavings}
            </span>{" "}
            Every Year
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Based on your tracked subscriptions ({tools.length} active tools, totaling {currency}
            {totalSpend}/month).
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center">
            <span className="text-xs text-zinc-400">Total Monthly Spend</span>
            <p className="text-xl font-bold font-mono text-white mt-1">
              {currency}{totalSpend}
            </p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-emerald-500/30 text-center">
            <span className="text-xs text-zinc-400">Monthly Savings</span>
            <p className="text-xl font-bold font-mono text-emerald-400 mt-1">
              {currency}{totalSavings}
            </p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-emerald-500/30 text-center">
            <span className="text-xs text-zinc-400">Annual Savings</span>
            <p className="text-xl font-bold font-mono text-emerald-400 mt-1">
              {currency}{yearlySavings}
            </p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center">
            <span className="text-xs text-zinc-400">Efficiency Score</span>
            <p className="text-xl font-bold font-mono text-indigo-400 mt-1">
              {score}/100
            </p>
          </div>
        </div>

        {/* CHART & RECOMMENDATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
            <h3 className="text-sm font-bold text-white mb-2">Spend Distribution</h3>
            <SpendingChart data={chartData} currency={currency} />
          </div>

          <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-3">
            <h3 className="text-sm font-bold text-white mb-2">Key Recommendations</h3>
            {recommendations.length === 0 ? (
              <p className="text-xs text-zinc-400">No active tools tracked yet.</p>
            ) : (
              recommendations.map((r, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span>{r.toolName}</span>
                    {r.savings > 0 ? (
                      <span className="text-emerald-400 font-mono">
                        Save {currency}{r.savings}/mo
                      </span>
                    ) : (
                      <span className="text-zinc-500">Optimized</span>
                    )}
                  </div>
                  <p className="text-zinc-400">{r.suggestion}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-xs transition"
          >
            <span>Edit My Subscriptions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}