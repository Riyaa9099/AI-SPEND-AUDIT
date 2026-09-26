"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface SpendingChartProps {
  data: {
    name: string;
    value: number;
  }[];
  currency: string;
}

const COLORS = ["#6366f1", "#10b981", "#06b6d4", "#f59e0b", "#ec4899", "#8b5cf6"];

export default function SpendingChart({ data, currency }: SpendingChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const chartData = data.filter((item) => item.value > 0);

  if (!isMounted) {
    return (
      <div className="h-64 flex items-center justify-center text-xs text-zinc-500">
        Loading chart...
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-center text-zinc-500 text-xs border border-dashed border-zinc-800 rounded-2xl p-4">
        <p className="font-medium text-zinc-400">No spend data yet</p>
        <p className="mt-1">Add your tool subscriptions to see the visual breakdown.</p>
      </div>
    );
  }

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#18181b"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0];
                return (
                  <div className="bg-zinc-900 border border-zinc-700 text-xs p-2 rounded-lg text-white shadow-lg">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-emerald-400 font-mono">
                      {currency}
                      {item.value}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
