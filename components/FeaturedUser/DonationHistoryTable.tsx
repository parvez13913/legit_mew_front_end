"use client";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import { TableRowItem } from "@/types/types";

import dayjs from "dayjs";
import { CheckCircle, Clock } from "lucide-react";
import { ReactNode } from "react";

const donations = [
  {
    id: 1,
    date: "Dec 24, 2024",
    donor: "Jane Cooper",
    message: "Lorem ipsum is...",
    stock: "Apple Inc.",
    status: "Completed",
  },
  {
    id: 2,
    date: "Dec 22, 2024",
    donor: "Wade Warren",
    message: "Lorem ipsum is...",
    stock: "NVIDIA Corporation",
    status: "Completed",
  },
  {
    id: 3,
    date: "Dec 20, 2024",
    donor: "Jenny Wilson",
    message: "Lorem ipsum is...",
    stock: "Microsoft Corporation",
    status: "Pending",
  },
  {
    id: 4,
    date: "Dec 18, 2024",
    donor: "Robert Fox",
    message: "Lorem ipsum is...",
    stock: "Apple Inc.",
    status: "Completed",
  },
  {
    id: 5,
    date: "Dec 15, 2024",
    donor: "Jacob Jones",
    message: "Lorem ipsum is...",
    stock: "NVIDIA Corporation",
    status: "Completed",
  },
];

const DonationHistoryTable = () => {
  const tableData = donations;
  const tableHeader = [
    "Date",
    "Donor Name",
    "Donor Message",
    "Stock",
    "Status",
  ];

  const currentItems = tableData ?? [];
  const isLoading = false;
  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number,
  ) => ReactNode)[] = [
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#1D1F2C]">
        {item?.date ? dayjs(item.date).format("YYYY-MM-DD") : "-"}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[142.857%] text-[#2E2E2E] tracking-[-0.084px]">
        {item?.donor}
      </span>
    ),

    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        {item?.message}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        {item?.stock}
      </span>
    ),
    (item) => {
      const isCompleted = item?.status === "Completed";

      return (
        <span
          className={`
        inline-flex items-center gap-2
        px-3 py-1 rounded-full
        text-[14px] md:text-base leading-[160%]
        font-medium
        ${
          isCompleted
            ? "bg-green-100 text-[#08A270]"
            : "bg-yellow-100 text-[#F9C80E]"
        }
      `}
        >
          {isCompleted ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <Clock className="w-4 h-4" />
          )}
          {item?.status}
        </span>
      );
    },
  ];

  return (
    <div className="bg-white rounded-md p-8 mt-4 border">
      <h1 className="text-[#333] text-[32px] font-medium leading-[130%] mb-3">
        Donation History
      </h1>
      <ReuseAbleTable
        allClientDataList={tableData ?? []}
        isLoadings={isLoading}
        currentItems={currentItems}
        tableHeader={tableHeader}
        tableRowDataRenderers={tableRowDataRenderers}
        isBg={false}
      />
    </div>
  );
};

export default DonationHistoryTable;
