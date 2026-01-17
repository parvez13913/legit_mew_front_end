"use client";
import MessageIcon from "@/public/icons/MessageIcon";
import { TrendingUp } from "lucide-react";

const stocks = [
  {
    id: 1,
    symbol: "AAPL",
    name: "Apple Inc.",
    description: "Cash Contribution",
    date: "2024-12-27",
    amount: "$50.00",
    message:
      "Happy Birthday! Hope you have an amazing year ahead with plenty of success.",
  },
  {
    id: 2,
    symbol: "TSLA",
    name: "Tesla Inc.",
    description: "Cash Contribution",
    date: "2024-12-27",
    amount: "5 shares of TSLA",
    message: "No message",
  },
  {
    id: 3,
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    description: "Cash Contribution",
    date: "2024-12-27",
    amount: "$50.00",
    message: "Supporting the cause! Keep up the great work.",
  },
  {
    id: 4,
    symbol: "LLC",
    name: "Tech Ventures ",
    description: "Cash Contribution",
    date: "2024-12-27",
    amount: "10 shares of AAPL",
    message: "Supporting the cause! Keep up the great work.",
  },
];

export default function DonationHistory() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-[#1D1F2C] text-[32px] font-medium leading-[130%] mb-3">
        Donation History
      </h1>

      <div className="space-y-4 mb-8">
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="p-4.5 border border-gray-200 rounded-lg"
          >
            <div className="grid grid-cols-3">
              <div className="flex items-center gap-3 col-span-1">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="leading-[160%] text-[#1D1F2C] mb-2">
                    <span className=" font-medium ">{stock.name}</span> (
                    {stock.symbol})
                  </h1>
                  <p className="text-[#777980] text-sm leading-[140%] tracking-[0.07px]">
                    {stock.date}
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <span className="font-medium text-[16px] text-primary leading-[160%] tracking-[0.08px] bg-[#E6F6F1] px-2 py-1 rounded-full">
                  {stock.amount}
                </span>
                <p className="text-[14px] text-[#777980] leading-[140%] tracking-[0.07px] mt-2.5">
                  {stock.description}
                </p>
              </div>

              <div className="px-4 py-2.5 bg-[#F8F8F8] border border-[#E9E9EA] col-span-1 rounded-lg flex items-center gap-2">
                <span>
                  <MessageIcon className="size-8" />
                </span>
                <span className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
                  {stock.message}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
