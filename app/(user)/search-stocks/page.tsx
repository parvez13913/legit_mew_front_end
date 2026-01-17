"use client";

import { Search, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface Stock {
  id: number;
  name: string;
  ticker: string;
  description: string;
  category: string;
}

const allStocks: Stock[] = [
  {
    id: 1,
    name: "Apple Inc.",
    ticker: "AAPL",
    description: "Creator's top choice for tech investors",
    category: "Tech",
  },
  {
    id: 2,
    name: "Amazon.com Inc.",
    ticker: "AMZN",
    description: "Producer's top choice for tech investors",
    category: "Tech",
  },
  {
    id: 3,
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    description: "Creator's top choice for tech investors",
    category: "Tech",
  },
  {
    id: 4,
    name: "Metro Platforms Inc.",
    ticker: "MTA",
    description: "Creator's top choice for tech investors",
    category: "Interest",
  },
  {
    id: 5,
    name: "Netflix Inc.",
    ticker: "NFLX",
    description: "Creator's top choice for tech investors",
    category: "Tech",
  },
  {
    id: 6,
    name: "NVIDIA Corp.",
    ticker: "NVDA",
    description: "Creator's top choice for tech investors",
    category: "Tech",
  },
];

export default function SearchStocks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStocks = allStocks.filter((stock) => {
    const matchesSearch =
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.ticker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || stock.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <div className="py-14">
        <div className="text-center">
          <h2 className="text-[#1D1F2C] text-[32px] font-semibold leading-[130%] mb-2">
            Search Stocks
          </h2>
          <p className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
            Find and select a stock in seconds
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-3 mt-14">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
          <input
            type="text"
            placeholder="Search stock"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-4.5 border border-input rounded-lg text-foreground placeholder:text-[#4A4C56] focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-6">
          {["All", "Tech", "Interest"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium leading-[160%] tracking-[0.08px] cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-[#DDECE7] border border-primary text-primary hover:bg-[#DDECE7]/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stock List */}
        <div className="space-y-3">
          {filteredStocks.map((stock) => (
            <Link
              href={`/donation-summary`}
              key={stock.id}
              className="flex items-start gap-4 p-6 bg-white rounded-[10px] hover:bg-muted/50 transition-colors cursor-pointer border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              {/* Company Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">
                    {stock.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {stock.ticker}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {stock.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
