# AI Spend Audit & Subscription Optimizer

An intelligent, privacy-first web application designed to help developers, creators, and teams track their monthly AI tool subscriptions (ChatGPT, Claude, Cursor, GitHub Copilot, Midjourney), detect duplicate licenses, visualize spending breakdown, and uncover instant monthly & annual savings.

🔗 **Live Demo**: https://ai-spend-audit1-gamma.vercel.app/
---

## ✨ Features

- **📊 Visual Spending Breakdown**: Interactive Donut/Pie Chart powered by Recharts showing cost distribution across your AI stack.
- **⚡ Duplicate Tool & Redundancy Detection**: Automatically identifies overlapping subscriptions (e.g. paying for both Cursor and GitHub Copilot simultaneously).
- **💡 Plan Right-Sizing Recommendations**: Suggests tier downgrades when small teams overpay for enterprise or multi-seat tiers.
- **📈 AI Efficiency Score**: Dynamic 0–100 health rating that reflects how well-optimized your spending is.
- **🌐 Multi-Currency Support**: Switch between USD (`$`), INR (`₹`), EUR (`€`), and GBP (`£`) with real-time recalculations.
- **📄 Instant Audit Report Export**: Download a clean, formatted `.txt` executive summary with one click.
- **🔒 100% Private (Client-Side Persistence)**: Stores data in browser `localStorage`. No external databases, no logins, no credit card connections required.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React.js](https://react.dev/) (Hooks: `useState`, `useEffect`, `useMemo`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Responsive, Dark Theme)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/<YOUR_USERNAME>/ai-spend-audit.git
cd ai-spend-audit
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

```text
ai-spend-audit/
├── app/
│   ├── audit/
│   │   └── page.tsx        # Main AI Spend Audit Dashboard
│   ├── results/
│   │   └── page.tsx        # Audit Results Summary View
│   ├── globals.css         # Tailwind styles & background wallpaper
│   ├── layout.tsx          # Root layout & SEO metadata
│   └── page.tsx            # Landing page
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Footer.tsx          # App footer
│   └── SpendingChart.tsx   # Recharts Donut visualization
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── auditLogic.ts       # Core calculation & recommendation engine
├── public/
│   └── ai-bg.jpg           # Background wallpaper
├── package.json
└── README.md
```

---

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
