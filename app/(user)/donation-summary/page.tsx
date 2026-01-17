import StarIcon from "@/public/icons/StarIcon";
import { AlertCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function DonationSummary() {
  return (
    <div className="bg-[#F5F5F5] py-14">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[#1D1F2C] text-[32px] font-semibold leading-[130%] mb-2">
            Donation Summary
          </h1>
          <p className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
            Review your donation details before confirming.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg border border-border p-8 space-y-6">
          {/* Selected Stock */}
          <div className="flex items-center gap-3 pb-6 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-lg leading-[160%]">Apple Inc.</p>
              <p className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
                AAPL
              </p>
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-lg font-medium text-[#1D1F2C] leading-[160%] mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3.5 border border-input rounded-lg bg-white text-[#1D1F2C] placeholder-[#899AB2] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-lg font-medium text-[#1D1F2C] leading-[160%] mb-2">
              Message (Optional)
            </label>
            <textarea
              placeholder="Write a supportive message..."
              className="w-full px-4 py-3 border border-input rounded-lg bg-white text-[#1D1F2C] placeholder-[#899AB2] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              rows={3}
            />
          </div>

          {/* Platform Fee Alert */}
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#1D1F2C]" />
                <p className="text-[#1D1F2C] text-lg leading-[160%]">
                  Selected Stock
                </p>
              </div>
              <p className="text-[16px] text-[#1D1F2C] leading-[160%] tracking-[0.08px]">
                AAPL
              </p>
            </div>
            <div className="bg-[#FEF9E7] border border-[#FEF9E7] rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-lg leading-[160%] text-[#1D1F2C] text-nowrap">
                  Platform Fee: $1.00
                </p>
              </div>
              <p className="text-sm text-[#777980] leading-[140%] tracking-[0.07px] mt-1">
                This platform fee is separate from the stock value and helps
                maintain the service.
              </p>
            </div>
          </div>

          {/* Donation Breakdown */}
          <div className="space-y-3 pt-6 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-foreground">Your Donation</span>
              <span className="font-medium text-foreground">$50.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground">Platform Fee</span>
              <span className="font-medium text-foreground">$1.00</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-border">
              <span className="font-semibold text-foreground">
                Total to Pay
              </span>
              <span className="font-bold text-lg text-primary">$51.00</span>
            </div>
            <p className="text-sm text-[#777980] leading-[140%] tracking-[0.07px] pt-2">
              * Stock value will be processed separately on the platform.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-3 border border-primary rounded-lg text-primary bg-[#E6F6F1] cursor-pointer font-medium">
              Cancel
            </button>
            <Link
              href={"/confirm-donation"}
              className="flex-1 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 cursor-pointer font-medium flex items-center justify-center gap-2"
            >
              <StarIcon className="w-5 h-5 text-white" />
              Confirm Donation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
