import HeartIcon from "@/public/icons/HeartIcon";
import LikeIcon from "@/public/icons/LikeIcon";
import ShareIcon from "@/public/icons/ShareIcon";
import StarIcon from "@/public/icons/StarIcon";
import TwitterIcon from "@/public/icons/TwitterIcon";
import Link from "next/link";

export default function ConfirmDonationPage() {
  return (
    <div className="py-14 bg-[#F5F5F5]">
      <div className="p-2.5 rounded-full bg-[#DDECE7] w-16 h-16 flex items-center justify-center mx-auto">
        <LikeIcon className="w-10 h-10 text-primary" />
      </div>
      <div>
        <h1 className="text-center text-[#1D1F2C] text-[32px] font-semibold leading-[130%] mt-4">
          Thank You! 🎉
        </h1>
        <p className="text-center text-[#1D1F2C] text-lg leading-[160%] mt-2">
          Your donation to Sarah Chen has been successfully initiated!
        </p>
      </div>

      <div className="bg-white p-8 max-w-5xl mx-auto rounded-lg mt-4.5">
        <div className="flex items-center justify-center bg-[#F3FAF8] rounded-full h-10 w-10 mx-auto mb-6">
          <HeartIcon className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-center text-[#1D1F2C] text-lg font-semibold">
          Donation Details
        </h2>
        <div className="p-6 bg-[#F6F6F6] mt-4.5 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-[#1D1F2C] text-lg font-medium leading-[160%]">
              Stock
            </h1>
            <p className="text-[16px] text-[#4A4C56] leading-[160%]">
              Apple Inc. (AAPL)
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <h1 className="text-[#1D1F2C] text-lg font-medium leading-[160%]">
              Sarah Chen
            </h1>
            <p className="text-[16px] text-[#4A4C56] leading-[160%]">
              Sarah Chen
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-[#1D1F2C] text-lg font-medium leading-[160%]">
              Status
            </h1>
            <p className="text-[16px] text-[#4A4C56] leading-[160%]">
              Processing
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center mb-2.5">
            <ShareIcon className="w-6 h-6" />
          </div>
          <div className="text-center">
            <h1 className="text-center text-[#1D1F2C] text-lg font-medium leading-[160%]">
              Spread the Word
            </h1>
            <p className="text-[#4A4C56] text-sm leading-[140%] tracking-[0.07px] mt-2.5 mb-6">
              Share your support and inspire others to help users
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <button className="w-full px-4 py-3 bg-transparent rounded-lg font-medium text-lg leading-[160%] border border-primary max-w-50 cursor-pointer">
                <span>
                  <TwitterIcon className="w-5 h-5 mr-2 inline-block" />
                </span>
                <span className="font-medium text-primary text-[16px] leading-[160%] tracking-[0.08px]">
                  Share on Twitter
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center">
              <Link
                href={"/"}
                className="w-full px-4 py-3 bg-primary hover:bg-primary/90 rounded-lg font-medium text-lg leading-[160%] text-center flex items-center justify-center mt-8 "
              >
                <span>
                  <StarIcon className="w-5 h-5 mr-2 inline-block text-white" />
                </span>
                <span className="font-medium text-white text-[16px] leading-[160%] tracking-[0.08px]">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
