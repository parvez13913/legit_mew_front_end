"use client";

import type React from "react";

import ArrowIcon from "@/public/icons/ArrowIcon";
import FilterIcon from "@/public/icons/FilterIcon";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function StockDonationHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "stocks", label: "Stocks" },
    { id: "dividend", label: "Dividend" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <main className="">
      {/* Hero Section */}
      <section className="h-screen w-full overflow-hidden relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero.png')`,
          }}
        ></div>

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-[64px] leading-[110%]">
              Support your favorite Person
              <br />
              with Stock Donations
            </h1>
            <p className="mb-8 text-lg text-white leading-[160%] tracking-[0.1px]">
              Give stock, not cash, and help users grow their portfolio.
            </p>
            <Link
              href={"/featured-users"}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white transition-all hover:bg-primary/97 font-medium px-8.75 py-5.25 cursor-pointer active:scale-95"
            >
              <span>Discover more</span>
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stock"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg bg-white py-4 pl-12 pr-4 font-medium text-gray-800 placeholder-[#777980] placeholder:text-[16px] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-4 top-2 rounded-lg bg-white px-4 py-1.5 font-semibold  border border-primary flex items-center gap-2 cursor-pointer"
              >
                <span className="text-primary">Filter</span>
                <FilterIcon className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`rounded-lg px-4 py-2.5 font-medium transition-all cursor-pointer ${
                  selectedFilter === filter.id
                    ? "bg-white text-primary"
                    : "border border-white text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
