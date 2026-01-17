import { DashboardChart } from "@/components/dashboard/dashboardPage/DashboardChart";
import DashboardCard, {
  DashboardCardData,
} from "@/components/reusable/DashboardCard";

export default function AnalyticsPage() {
  const dashboardCardsData: DashboardCardData[] = [
    {
      icon: {
        name: "growth",
        backgroundColor: "#E6F5F0",
        iconColor: "#08A270",
      },
      title: "Portfolio Value",
      value: "200",
      hasCurrency: true,
      secondaryInfo: {
        periodLabel: "Last Month",
        trend: {
          direction: "up",
          percentage: "10%",
          showPill: false,
        },
      },
    },
    {
      icon: {
        name: "loss",
        backgroundColor: "#FEE2E2",
        iconColor: "#DC2626",
      },
      title: "Total Gain/Loss",
      value: "2,250",
      hasCurrency: false,
      secondaryInfo: {
        periodLabel: "Last week:",
        secondaryValue: "1,200",
        trend: {
          direction: "down",
          percentage: "3%",
          showPill: true,
        },
      },
    },
    {
      icon: {
        name: "pending",
        backgroundColor: "#E6F5F0",
        iconColor: "#08A270",
      },
      title: "Pending",
      value: "2,250",
      hasCurrency: false,
      secondaryInfo: {
        periodLabel: "Last week:",
        secondaryValue: "1,200",
        trend: {
          direction: "up",
          percentage: "3%",
          showPill: true,
        },
      },
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {dashboardCardsData.map((cardData, index) => (
          <DashboardCard key={index} data={cardData} />
        ))}
      </div>
      <div className="mt-8">
        <DashboardChart />
      </div>
    </div>
  );
}
