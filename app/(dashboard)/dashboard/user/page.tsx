"use client";

import TransactionDetailsModal, {
  TransactionDetails,
} from "@/components/reusable/TransactionDetailsModal";
import DashboardTable, {
  TableColumn,
  TableRowData,
} from "@/components/reusable/DashboardTable";
import React, { useState } from "react";

export default function Userpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionDetails | null>(null);

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
      userName: "Enrique",
      accountNumber: "1234567890545",
      accountHolderName: "Enrique",
      transactionAmount: typeof row.amount === "number" ? row.amount : 0,
      service: "Moving",
    };
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className="mt-8">
        <DashboardTable
          title="User"
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
