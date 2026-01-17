import React from "react";
import { TrendingUp, TrendingDown, Clock, LucideIcon } from "lucide-react";

// Icon mapping - all icons come from JSON data
const iconMap: Record<string, LucideIcon> = {
  growth: TrendingUp,
  "trending-up": TrendingUp,
  loss: TrendingDown,
  "trending-down": TrendingDown,
  pending: Clock,
  clock: Clock,
};

export interface DashboardCardData {
  icon: {
    // Icon can be specified as a string name (maps to iconMap) or as a custom component
    name?: string; // e.g., "growth", "trending-up", "loss", "pending", "clock"
    component?: React.ComponentType<{
      className?: string;
      style?: React.CSSProperties;
    }>;
    // Both backgroundColor and iconColor come from JSON data
    backgroundColor: string;
    iconColor: string;
  };
  title: string;
  value: string;
  hasCurrency?: boolean;
  secondaryInfo?: {
    periodLabel: string;
    secondaryValue?: string;
    trend: {
      direction: "up" | "down" | "neutral";
      percentage: string;
      showPill?: boolean;
    };
  };
}

interface DashboardCardProps {
  data: DashboardCardData;
}

const renderIcon = (
  iconName: string | undefined,
  iconColor: string,
  customComponent?: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>
) => {
  // If custom component is provided in JSON, use it
  if (customComponent) {
    return React.createElement(customComponent, {
      className: "w-5 h-5",
      style: { color: iconColor },
    });
  }

  // Otherwise, use icon name from JSON to get the icon from iconMap
  const IconComponent = iconName ? iconMap[iconName] : TrendingUp;
  const iconStyle = { color: iconColor };

  if (IconComponent) {
    return <IconComponent className="w-5 h-5" style={iconStyle} />;
  }

  // Fallback to TrendingUp if icon name not found
  return <TrendingUp className="w-5 h-5" style={iconStyle} />;
};

export default function DashboardCard({ data }: DashboardCardProps) {
  const trendColor =
    data.secondaryInfo?.trend.direction === "up"
      ? "text-green-600"
      : data.secondaryInfo?.trend.direction === "down"
        ? "text-red-600"
        : "text-gray-600";
  const trendBgColor =
    data.secondaryInfo?.trend.direction === "up"
      ? "bg-green-50"
      : data.secondaryInfo?.trend.direction === "down"
        ? "bg-red-50"
        : "bg-gray-50";
  const TrendIcon =
    data.secondaryInfo?.trend.direction === "up"
      ? TrendingUp
      : data.secondaryInfo?.trend.direction === "down"
        ? TrendingDown
        : null;

  return (
    <div className="bg-white rounded-xl p-6 w-full" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
      {/* Icon and Title Section */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: data.icon.backgroundColor }}
        >
          {renderIcon(data.icon.name, data.icon.iconColor, data.icon.component)}
        </div>
        <h3 className="text-base font-medium text-gray-800">{data.title}</h3>
      </div>

      {/* Main Value */}
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900">
          {data.hasCurrency && "$"}
          {data.value}
        </p>
      </div>

      {/* Secondary Info */}
      {data.secondaryInfo && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">
            {data.secondaryInfo.periodLabel}
          </span>
          {data.secondaryInfo.secondaryValue && (
            <span className="text-gray-500">
              {data.secondaryInfo.secondaryValue}
            </span>
          )}
          {data.secondaryInfo.trend && (
            <div
              className={`flex items-center gap-1 ${data.secondaryInfo.trend.showPill
                ? `px-2 py-0.5 rounded-full ${trendBgColor}`
                : ""
                }`}
            >
              {TrendIcon && <TrendIcon className={`w-3 h-3 ${trendColor}`} />}
              <span className={trendColor}>
                {data.secondaryInfo.trend.percentage}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
