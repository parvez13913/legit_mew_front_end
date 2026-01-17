"use client"
import CommunityActivity from "@/components/FeaturedUser/CommunityActivity";
import DonationHistoryTable from "@/components/FeaturedUser/DonationHistoryTable";
import Donations from "@/components/FeaturedUser/Donations";
import InstagramPosts from "@/components/FeaturedUser/InstagramPost";
import GiftIcon from "@/public/icons/GiftIcon";
import LocationIcon from "@/public/icons/LocationIcon";
import { Calendar1Icon, Users } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[#F8F8F8] py-11">
      <div className="container">
        <div className="px-6 py-8 bg-white shadow-md flex items-center gap-8 border border-gray-100 rounded-[10px] mb-11">
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
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h1 className="text-primary text-2xl font-medium leading-[130%] tracking-[0.12px]">
                  12.4k
                </h1>
                <p className="mt-2.5 text-[#1D1F2C] text-sm leading-[140%] tracking-[0.07px]">
                  Followers
                </p>
              </div>
              <div>
                <h1 className="text-primary text-2xl font-medium leading-[130%] tracking-[0.12px]">
                  2,021
                </h1>
                <p className="mt-2.5 text-[#1D1F2C] text-sm leading-[140%] tracking-[0.07px]">
                  Posts
                </p>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full px-5.5 py-4 rounded-full bg-[#E6F6F1] flex gap-2 items-center cursor-pointer justify-center">
                <span>
                  <GiftIcon className="inline-block" />
                </span>
                <span className="text-lg text-primary leading-[160%]">
                  Donate Stock
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 bg-white shadow-md border border-gray-100 rounded-[10px]">
          <h1 className="text-[#333] font-medium leading-[130%] text-[32px] mb-2.5">
            About
          </h1>
          <p className="text-lg text-[#1D1F2C] leading-[190%] mb-8">
            Hi! I’m Sarah Chen, a passionate artist content creator gamer etc.
            sharing my journey and creations with the world. I create [digital
            art, videos, tutorials, or other content and love connecting with my
            audience while growing my projects. Through StockGifter, I aim to
            receive support in the form of stocks to expand my work and continue
            delivering high-quality content. When I’m not creating, I enjoy
            [hobby or interest] and exploring new ideas to share with my
            followers.
          </p>

          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2">
              <LocationIcon className="text-primary h-5 w-5" />
              <span className="text-primary text-[16px] leading-[160%] tracking-[0.08px]">
                San Francisco, CA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar1Icon className="text-primary h-5 w-5" />
              <span className="text-primary text-[16px] leading-[160%] tracking-[0.08px]">
                Member since January 2023
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-primary h-5 w-5" />
              <span className="text-primary text-[16px] leading-[160%] tracking-[0.08px]">
                125 supporters
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-8 bg-white shadow-md border border-gray-100 rounded-[10px] mt-11">
          <InstagramPosts />
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
