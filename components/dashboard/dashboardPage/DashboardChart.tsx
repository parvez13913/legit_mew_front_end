"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

// Chart data for all 12 months
const allChartData = [
  { month: "Jan", value: 50 },
  { month: "Feb", value: 800 },
  { month: "Mar", value: 12 },
  { month: "Apr", value: 900 },
  { month: "May", value: 15 },
  { month: "Jun", value: 180 },
  { month: "Jul", value: 2500 },
  { month: "Aug", value: 40 },
  { month: "Sep", value: 3200 },
  { month: "Oct", value: 280 },
  { month: "Nov", value: 2000 },
  { month: "Dec", value: 1600 },
];

// Weekly data for last 7 days
const weeklyData = [
  { month: "Mon", value: 180 },
  { month: "Tue", value: 220 },
  { month: "Wed", value: 25 },
  { month: "Thu", value: 300 },
  { month: "Fri", value: 35 },
  { month: "Sat", value: 380 },
  { month: "Sun", value: 400 },
];

// Monthly data for last 30 days (4 weeks)
const monthlyData = [
  { month: "Week 1", value: 200 },
  { month: "Week 2", value: 25 },
  { month: "Week 3", value: 320 },
  { month: "Week 4", value: 40 },
  { month: "Week 5", value: 400 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "#08A270",
  },
} satisfies ChartConfig;

export function DashboardChart() {
  const [timeRange, setTimeRange] = React.useState("365d");

  // Get filtered data based on time range
  const getFilteredData = () => {
    switch (timeRange) {
      case "7d":
        return weeklyData;
      case "30d":
        return monthlyData;
      case "365d":
        return allChartData;
      default:
        return allChartData.slice(-3);
    }
  };

  // Get total value based on time range
  const getTotalValue = () => {
    const data = getFilteredData();
    return data[data.length - 1]?.value || 200;
  };

  // Get percentage change based on time range
  const getPercentageChange = () => {
    const data = getFilteredData();
    if (data.length < 2) return 10;
    const current = data[data.length - 1]?.value || 0;
    const previous = data[data.length - 2]?.value || 0;
    if (previous === 0) return 10;
    return Math.round(((current - previous) / previous) * 100);
  };

  const chartData = getFilteredData();
  const totalValue = getTotalValue();
  const percentageChange = getPercentageChange();

  // Calculate dynamic Y-axis domain
  const maxValue = Math.max(...chartData.map((d) => d.value));
  const yAxisMax = Math.ceil(maxValue * 1.2); // Add 20% padding
  const yAxisTicks = Array.from({ length: 6 }, (_, i) =>
    Math.round((yAxisMax / 5) * i)
  );

  return (
    <Card className="bg-white rounded-xl border-none h-[424px]" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
      <CardHeader className="flex flex-row items-start justify-between pb-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-900">Total Value</h2>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold text-gray-900">{totalValue}</p>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-sm font-medium text-green-600">
                {percentageChange > 0 ? "+" : ""}
                {percentageChange}%
              </span>
            </div>
          </div>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex border border-[#E9E9E9]"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Years" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-none bg-white">
            <SelectItem value="365d" className="rounded-lg">
              Years
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Months
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Weeks
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[270px] w-full">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#08A270" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#08A270" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              tick={(props: any) => {
                const { x, y, payload } = props;
                const lastItem = chartData[chartData.length - 1]?.month;
                const isCurrentItem = payload.value === lastItem;
                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dy={16}
                      textAnchor="middle"
                      fill={isCurrentItem ? "#08A270" : "#6B7280"}
                      fontSize={12}
                      fontWeight={isCurrentItem ? 600 : 400}
                    >
                      {payload.value}
                    </text>
                  </g>
                );
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              domain={[0, yAxisMax]}
              ticks={yAxisTicks}
            />
            <ChartTooltip
              cursor={false}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              content={({ active, payload, label }: any) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3">
                      <p className="font-bold text-sm mb-1">{label}</p>
                      <p className="text-sm text-gray-600">
                        Value: {payload[0]?.value}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#08A270"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
