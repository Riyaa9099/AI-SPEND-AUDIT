import { ToolItem, ToolRecommendation } from "./types";

export function calculateAudit(tools: ToolItem[]) {
  const activeTools = tools.filter((t) => t.spend > 0);
  const totalSpend = activeTools.reduce((sum, item) => sum + Number(item.spend || 0), 0);

  let totalSavings = 0;
  const recommendations: ToolRecommendation[] = [];

  // Check if both Cursor and GitHub Copilot are present (duplicate assistant)
  const hasCursor = activeTools.some((t) => t.name.toLowerCase().includes("cursor"));
  const hasCopilot = activeTools.some((t) => t.name.toLowerCase().includes("copilot"));

  activeTools.forEach((item) => {
    let suggestion = "Plan looks well-optimized for your team size.";
    let savings = 0;
    let status: "optimized" | "can-save" | "duplicate" = "optimized";

    const name = item.name.toLowerCase();
    const spend = Number(item.spend || 0);
    const teamSize = Number(item.teamSize || 1);

    // 1. ChatGPT Rule
    if (name.includes("chatgpt")) {
      if (teamSize <= 2 && spend > 40) {
        savings = spend - 40;
        suggestion = "Switch to ChatGPT Plus ($20/user) instead of higher tier.";
        status = "can-save";
      }
    }

    // 2. Cursor Rule
    else if (name.includes("cursor")) {
      if (teamSize <= 3 && spend > 60) {
        savings = spend - 20 * teamSize;
        suggestion = "Downgrade to Cursor Pro ($20/user) for this team size.";
        status = "can-save";
      }
    }

    // 3. GitHub Copilot Rule (with duplicate check)
    else if (name.includes("copilot")) {
      if (hasCursor) {
        savings = Math.round(spend * 0.8);
        suggestion = "Cursor already includes code completions; Copilot might be redundant.";
        status = "duplicate";
      } else if (teamSize === 1 && spend > 15) {
        savings = spend - 10;
        suggestion = "Use the individual Copilot plan ($10/mo).";
        status = "can-save";
      }
    }

    // 4. Claude Rule
    else if (name.includes("claude")) {
      if (teamSize <= 2 && spend > 40) {
        savings = spend - 40;
        suggestion = "Switch to Claude Pro ($20/user) for small team.";
        status = "can-save";
      }
    }

    // 5. General rule for any other tool
    else if (spend > 100 && teamSize <= 2) {
      savings = Math.round(spend * 0.2);
      suggestion = "Review active usage; consider basic tier or annual billing.";
      status = "can-save";
    }

    if (savings > 0) {
      totalSavings += savings;
    }

    recommendations.push({
      toolId: item.id,
      toolName: item.name,
      suggestion,
      savings,
      status,
    });
  });

  const yearlySavings = totalSavings * 12;

  // AI Efficiency Score (0 to 100)
  // If spend is 0, score is 100. If waste is high, score drops.
  let score = 100;
  if (totalSpend > 0) {
    const wastePercent = Math.min(100, Math.round((totalSavings / totalSpend) * 100));
    score = Math.max(10, 100 - wastePercent);
  }

  // Find tool with highest spend
  const highestTool = activeTools.reduce(
    (max, item) => (item.spend > (max?.spend || 0) ? item : max),
    activeTools[0] || null
  );

  return {
    totalSpend,
    totalSavings,
    yearlySavings,
    score,
    recommendations,
    highestTool,
  };
}
