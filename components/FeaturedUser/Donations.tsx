import { Gift, TrendingUp } from "lucide-react";

interface Stock {
  id: string;
  company: string;
  estimatedValue: string;
  raised: number;
  remaining: number;
  percentage: number;
}

const stocks: Stock[] = [
  {
    id: "1",
    company: "Apple Inc.",
    estimatedValue: "$175",
    raised: 120,
    remaining: 55,
    percentage: 69,
  },
  {
    id: "2",
    company: "NVIDIA Corporation",
    estimatedValue: "$450",
    raised: 180,
    remaining: 270,
    percentage: 40,
  },
  {
    id: "3",
    company: "Microsoft Corporation",
    estimatedValue: "$380",
    raised: 280,
    remaining: 100,
    percentage: 70,
  },
];

export default function Donations() {
  return (
    <main className="mt-6">
      <div>
        <div className="space-y-4">
          {stocks.map((stock) => (
            <div
              key={stock.id}
              className="bg-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Left Content */}
              <div className="flex items-start gap-6 flex-1">
                {/* Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E7F6F1] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium leading-[160%] text-[#1D1F2C]">
                      {stock.company}
                    </h3>
                    <p className="text-sm text-[#1D1F2C] font-medium leading-[140%] tracking-[0.07px]">
                      Estimated value: {stock.estimatedValue}
                    </p>
                  </div>
                </div>

                {/* Company Info and Progress */}
                <div className="flex-1">
                  {/* Progress Section */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
                        ${stock.raised} raised
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {stock.percentage}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${stock.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
                      ${stock.remaining} remaining
                    </p>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <div className="ml-6 shrink-0">
                <button className="bg-[#CEECE2] text-primary font-semibold px-6 py-2.5 rounded-full hover:bg-[#CEECE2]/90 transition-colors flex items-center gap-2 whitespace-nowrap">
                  <Gift className="w-5 h-5" />
                  Donate Stock
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
