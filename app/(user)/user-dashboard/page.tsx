"use client";
import DonationHistory from "@/components/userDashboard/DonationHistory";
import { MetricCard } from "@/components/userDashboard/MetricCard";
import WishlistProgress from "@/components/userDashboard/WishlistProgress";

const dashboardStats = [
  {
    title: "Portfolio Value",
    value: "3,700",
    lastWeekValue: "2,340",
    trend: 7,
    trendDirection: "up",
    icon: "portfolio",
  },
  {
    title: "Total Gain/Loss",
    value: "2,250",
    lastWeekValue: "1,200",
    trend: 3,
    trendDirection: "up",
    icon: "gain-loss",
  },
  {
    title: "Pending",
    value: "2,250",
    lastWeekValue: "1,200",
    trend: 3,
    trendDirection: "down",
    icon: "pending",
  },
] as const;

export default function UserDashboardPage() {
  return (
    <div className="bg-[#F5F5F5] py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardStats.map((stat) => (
            <MetricCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              lastWeekValue={stat.lastWeekValue}
              trend={stat.trend}
              trendDirection={stat.trendDirection}
              icon={stat.icon}
            />
          ))}
        </div>
        <div className="mt-8">
          <DonationHistory />
        </div>
        <div className="mt-8">
          <WishlistProgress />
        </div>
      </div>
    </div>
  );
}
