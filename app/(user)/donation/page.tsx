"use client";

import { Search, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const stocks = [
  {
    id: 1,
    symbol: "AAPL",
    name: "Apple Inc.",
    description: "Top choice for tech enthusiasts",
    raised: 100,
    progress: 88,
  },
  {
    id: 2,
    symbol: "TSLA",
    name: "Tesla Inc.",
    description: "Top choice for tech enthusiasts",
    raised: 100,
    progress: 20,
  },
  {
    id: 3,
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    description: "Top choice for tech enthusiasts",
    raised: 100,
    progress: 42,
  },
];

export default function DonationStocks() {
  const router = useRouter();
  const [selectedStockId, setSelectedStockId] = useState(1);
  const handelNavigation = (id: number) => {
    setSelectedStockId(id);
    router.push("/search-stocks");
  };
  return (
    <div className="text-[#F5F5F5]">
      <div className="p-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#1D1F2C] text-[32px] font-semibold leading-[130%] mb-2">
            Donation Stocks
          </h2>
          <p className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
            Creator&apos;s wishlist stocks - choose one to support
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {stocks.map((stock) => (
            <div
              key={stock.id}
              onClick={() => handelNavigation(stock.id)}
              className={`p-6 rounded-lg cursor-pointer transition-all ${
                selectedStockId === stock.id
                  ? "border-2 border-primary bg-white"
                  : "bg-white border border-border hover:bg-muted/30"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg leading-[160%] text-[#1D1F2C] flex items-center gap-2">
                      {stock.name}
                      <span className="text-sm font-normal text-muted-[#4A4C56] leading-[140%] tracking-[0.07px]">
                        {stock.symbol}
                      </span>
                    </h3>
                    <p className="text-sm font-normal text-[#777980] leading-[140%] tracking-[0.07px]">
                      {stock.description}
                    </p>
                  </div>
                </div>
                <span className="text-primary font-semibold">
                  {stock.progress}%
                </span>
              </div>

              <div className="mb-3">
                <p className="text-sm text-[#4A4C56] mb-2 leading-[140%] tracking-[0.07px]">
                  ${stock.raised} raised
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-300"
                    style={{ width: `${stock.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-55">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
            <input
              type="text"
              placeholder="Choose Another Stock"
              className="w-full pl-10 pr-4 py-3 border border-primary rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
