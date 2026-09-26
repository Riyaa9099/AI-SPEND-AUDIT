"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, PieChart, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-zinc-100">
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 max-w-4xl mx-auto">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Smart AI Subscription Auditor</span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Track & Optimize Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            AI Subscriptions
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Are you overpaying for AI tools? Audit your monthly subscriptions like ChatGPT, Claude, Cursor, and GitHub Copilot to identify redundant tools and see how much you can save each year.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-600/30 transition active:scale-95"
          >
            <span>Start AI Spend Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/audit"
            className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 py-2"
          >
            Try Interactive Demo →
          </Link>
        </div>

        {/* 3 CORE FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 text-left w-full">
          
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">1. Enter Your AI Tools</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Add your monthly subscriptions, seat counts, and plan costs across your dev or creative workflow.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <PieChart className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">2. Visual Breakdown</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get an instant chart showing where your budget goes and an AI Efficiency Score based on potential waste.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">3. Smart Savings Tips</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Find out if you have duplicate coding assistants (Cursor + Copilot) or if downgrading plans can save you money.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}