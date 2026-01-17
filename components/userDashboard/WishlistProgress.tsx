import { Plus, TrendingUp } from "lucide-react";
import Link from "next/link";

const stocks = [
  {
    id: 1,
    symbol: "AAPL",
    name: "Tesla Inc.",
    donors: "24 donors",
    raised: 100,
    progress: 88,
  },
  {
    id: 2,
    symbol: "AMZN",
    name: "Amazon.com",
    donors: "24 donors",
    raised: 100,
    progress: 20,
  },
  {
    id: 3,
    symbol: "MSFT",
    name: "Microsoft Corp",
    donors: "24 donors",
    raised: 100,
    progress: 42,
  },
  {
    id: 3,
    symbol: "GOOGL",
    name: "Alphabet Inc",
    donors: "24 donors",
    raised: 100,
    progress: 42,
  },
];

export default function WishlistProgress() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between cursor-pointer">
        <h1 className="text-[#1D1F2C] text-[32px] font-medium leading-[130%] mb-3">
          Wishlist Progress
        </h1>
        <Link
          href={"/donation"}
          className="px-2.5 py-3 bg-primary rounded-lg cursor-pointer"
        >
          <Plus className="inline-block mb-1 text-white h-4 w-4" />
          <span className="text-white text-[14px] leading-[140%] tracking-[0.07px]">
            Add New Wishlist Item
          </span>
        </Link>
      </div>

      <div className="space-y-4 mt-6">
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="p-6 rounded-lg bg-white border border-border hover:bg-muted/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg leading-[160%] text-[#1D1F2C] flex items-center gap-2">
                      {stock.name}
                      <span className="text-sm font-normal text-muted-[#4A4C56] leading-[140%] tracking-[0.07px]">
                        {stock.symbol}
                      </span>
                    </h3>
                  </div>
                </div>
                <span className="text-[#777980] text-[14px] leading-[140%] tracking-[0.07] ">
                  $3,200 / $5,000
                </span>
              </div>
            </div>

            <div className="mb-3">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${stock.progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[#4A4C56] text-sm leading-[140%] tracking-[0.07px]">
                {stock.donors}
              </h1>
              <p className="text-primary text-sm leading-[140%] tracking-[0.07px]">
                64% Funded
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
