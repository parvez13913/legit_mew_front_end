import { ArrowDown, ArrowUp, ClockIcon, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  lastWeekValue: string | number;
  trend: number;
  trendDirection: "up" | "down" | "neutral";
  icon: "portfolio" | "gain-loss" | "pending";
}

export function MetricCard({
  title,
  value,
  lastWeekValue,
  trend,
  trendDirection,
  icon,
}: MetricCardProps) {
  const iconColors = {
    portfolio: "bg-emerald-100 text-emerald-600",
    "gain-loss": "bg-red-100 text-red-600",
    pending: "bg-amber-100 text-amber-600",
  };

  const trendColors = {
    up: "text-emerald-600",
    down: "text-red-600",
    neutral: "text-amber-600",
  };
  const trendbg = {
    up: "bg-green-100",
    down: "bg-red-100",
    neutral: "bg-green-100",
  };

  const iconComponents = {
    portfolio: <TrendingUp size={18} />,
    "gain-loss": <TrendingUp size={18} />,
    pending: <ClockIcon size={18} />,
  };

  const arrowIcon =
    trendDirection === "up" ? <ArrowUp size={16} /> : <ArrowDown size={16} />;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      {/* Header with icon and title */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`${iconColors[icon]} rounded-full p-2.5`}>
          {iconComponents[icon]}
        </div>
        <h3 className="text-black text-[16px] leading-[160%] tracking-[0.08px]">
          {title}
        </h3>
      </div>

      {/* Main value */}
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>

      {/* Last week info with trend */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 leading-[140%] tracking-[0.07px]">
          Last week:
        </span>
        <span className="text-sm font-medium text-[#1D1F2C] leading-[140%] tracking-[0.07px] ">
          {lastWeekValue}
        </span>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full ${trendColors[trendDirection]} ${trendbg[trendDirection]}`}
        >
          {arrowIcon}
          <span className="text-sm font-semibold">{trend}%</span>
        </div>
      </div>
    </div>
  );
}
