"use client";

import { useState } from "react";
import DashboardCard, {
  DashboardCardData,
} from "@/components/reusable/DashboardCard";
import DashboardTable, {
  TableColumn,
  TableRowData,
} from "@/components/reusable/DashboardTable";
import TransactionDetailsModal, {
  TransactionDetails,
} from "@/components/reusable/TransactionDetailsModal";

export default function EarningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionDetails | null>(null);
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

  // Sample data for donation history table
  const donationTableColumns: TableColumn[] = [
    { key: "date", label: "Date" },
    { key: "order", label: "Order" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action", isAction: true },
  ];

  const donationTableData: TableRowData[] = [
    {
      date: "06/06/2025",
      order: "41527541",
      amount: 400,
      status: "Paid",
    },
    {
      date: "06/03/2025",
      order: "41526399",
      amount: 350,
      status: "Pending",
    },
    {
      date: "06/03/2025",
      order: "41526398",
      amount: 300,
      status: "Pending",
    },
    {
      date: "06/06/2025",
      order: "41527541",
      amount: 350,
      status: "Paid",
    },
    {
      date: "06/08/2025",
      order: "41526386",
      amount: 250,
      status: "Pending",
    },
    {
      date: "06/06/2025",
      order: "41527541",
      amount: 400,
      status: "Paid",
    },
    {
      date: "06/03/2025",
      order: "41526398",
      amount: 250,
      status: "Pending",
    },
    {
      date: "06/03/2025",
      order: "4152605",
      amount: 350,
      status: "Pending",
    },
  ];

  const handleActionClick = (row: TableRowData) => {
    // Convert table row data to transaction details format
    const transaction: TransactionDetails = {
      transactionId: String(row.order || ""),
      date: String(row.date || ""),
      userName: "Enrique", // You can add this to your table data if needed
      accountNumber: "1234567890545", // You can add this to your table data if needed
      accountHolderName: "Enrique", // You can add this to your table data if needed
      transactionAmount: typeof row.amount === "number" ? row.amount : 0,
      service: "Moving", // You can add this to your table data if needed
    };
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {dashboardCardsData.map((cardData, index) => (
          <DashboardCard key={index} data={cardData} />
        ))}
      </div>
      <div className="mt-8">
        <DashboardTable
          title="Earning"
          columns={donationTableColumns}
          data={donationTableData}
          showDateRange={true}
          statusKey="status"
          onActionClick={handleActionClick}
        />
      </div>
      <TransactionDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        transaction={selectedTransaction}
      />
    </div>
  );
}
