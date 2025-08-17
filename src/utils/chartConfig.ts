import { type ChartConfig } from "@/components/ui/chart";

export const chartData = [
  { month: "Jan", income: 38.5, gvr: 15, mmr: 30 },
  { month: "Feb", income: 10, gvr: 15, mmr: 30 },
  { month: "Mar", income: 38, gvr: 10, mmr: 25 },
  { month: "Apr", income: 25, gvr: 15, mmr: 38 },
  { month: "May", income: 30, gvr: 20, mmr: 5 },
  { month: "Jun", income: 38.5, gvr: 5, mmr: 47 },
  { month: "Jul", income: 25, gvr: 18, mmr: 38 },
  { month: "Aug", income: 25, gvr: 18, mmr: 8 },
  { month: "Sep", income: 35, gvr: 8, mmr: 32 },
];

export const chartConfig = {
  gvr: {
    label: "amount",
    color: "#2563eb",
  },
  income: {
    label: "amount",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
