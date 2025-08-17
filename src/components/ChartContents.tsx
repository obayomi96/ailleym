import React from "react";
import { ChartContainer } from "./ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { chartConfig, chartData } from "@/utils/chartConfig";

export default function ChartContents() {
  return (
    <ChartContainer config={chartConfig} className="!max-h-[10.5rem] w-[85%]">
      <BarChart accessibilityLayer data={chartData} maxBarSize={4} barGap="2px">
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="income" fill="#4545FE" radius={0} />
        <Bar dataKey="mmr" fill="#12B76A" radius={0} />
        <Bar dataKey="gvr" fill="#F04438" radius={0} />
        <YAxis
          tickLine={false}
          tickMargin={5}
          axisLine={true}
          tickFormatter={(value) => `${value}m`}
        />
      </BarChart>
    </ChartContainer>
  );
}
