"use client";
import CommunityActivity from "@/components/FeaturedUser/CommunityActivity";
import DonationHistoryTable from "@/components/FeaturedUser/DonationHistoryTable";
import Donations from "@/components/FeaturedUser/Donations";
import GiftIcon from "@/public/icons/GiftIcon";
import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedUserDetailsPage() {
  return (
    <div className="bg-[#F8F8F8] py-11">
      <div className="container">
        <div className="px-6 py-8 bg-white shadow-md flex items-center gap-8 border border-gray-100 rounded-[10px]">
          <div className="h-36 w-36">
            <Image
              src={"/images/user-profile.png"}
              alt="User Profile"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl text-[#333] font-medium leading-[130%] tracking-[0.12px] mb-2.5">
              Sarah Chen
            </h1>
            <p className="text-sm text-[#333] leading-[140%] tracking-[0.07px] mb-6">
              Tech Educator | Content Creator | Building the Future
            </p>

            <div className="flex items-center justify-center gap-4 w-full">
              <Link
                href="/connect-instagram"
                className="w-full px-5.5 py-4 rounded-full bg-primary flex gap-2 items-center cursor-pointer justify-center"
              >
                <span>
                  <InstagramIcon className="text-white" />
                </span>
                <span className="text-lg text-white leading-[160%]">
                  ConnectInstagram
                </span>
              </Link>
              <Link
                href={"#"}
                className="w-full px-5.5 py-4 rounded-full bg-[#E6F6F1] flex gap-2 items-center cursor-pointer justify-center"
              >
                <span>
                  <GiftIcon className="inline-block" />
                </span>
                <span className="text-lg text-primary leading-[160%]">
                  Donate Stock
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-11">
          <h1 className="text-[#1D1F2C] text-[32px] font-medium leading-[130%] mb-3">
            Stock Wishlist
          </h1>
          <p className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px]">
            Support your favorite creator by contributing to their stock
            wishlist via our platform.
          </p>
          <Donations />
          <div className="my-11">
            <DonationHistoryTable />
          </div>
          <CommunityActivity />
        </div>
      </div>
    </div>
  );
}
