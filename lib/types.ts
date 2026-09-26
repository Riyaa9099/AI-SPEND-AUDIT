export interface ToolItem {
  id: string;
  name: string;
  spend: number;
  teamSize: number;
}

export interface ToolRecommendation {
  toolId: string;
  toolName: string;
  suggestion: string;
  savings: number;
  status: "optimized" | "can-save" | "duplicate";
}

export type Currency = "$" | "₹" | "€" | "£";
