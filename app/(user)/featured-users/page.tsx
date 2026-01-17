"use client";

import GiftIcon from "@/public/icons/GiftIcon";
import GrowIcon from "@/public/icons/GrowIcon";
import Image from "next/image";
import Link from "next/link";

interface Creator {
  id: number;
  name: string;
  bio: string;
  image: string;
}

const creators: Creator[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    bio: "Sarai loves to be creative in birthdays, graduations, reunions, or to thank you gifts.",
    image: "/images/Image-1.png",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    bio: "Gift shares to commemorate you new dreams - perfect for birthdays, graduations, and special moments.",
    image: "/images/Image-2.png",
  },
  {
    id: 3,
    name: "James Parker",
    bio: "Cam celebrations look simple gifts - caring for friends & family for birthdays just in they you",
    image: "/images/Image-3.png",
  },
  {
    id: 4,
    name: "Theresa Webb",
    bio: "Pick a recipient, choose a stock, and send it as a meaningful gift for birthdays, graduations, holidays.",
    image: "/images/Image-4.png",
  },
  {
    id: 5,
    name: "Esther Howard",
    bio: "A simple way to gift stocks to a recipient for graduations, birthdays, holidays, milestones.",
    image: "/images/Image-5.png",
  },
  {
    id: 6,
    name: "Jane Cooper",
    bio: "Celebrate life moments by gifting stocks to  love ideal for birthdays,, holidays, and thank you gifts.",
    image: "/images/Image-6.png",
  },
];

export default function FeaturedUserPage() {
  return (
    <section className="w-full bg-[#F8F8F8] py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-[56px] leading-[130%] font-semibold text-[#1D1F2C]">
            Featured Creators
          </h2>
          <p className="text-[#1D1F2C] leading-[140%] text-sm tracking-[0.07px] mt-4">
            Discover talented users and support them with stock donations
          </p>
        </div>

        {/* Creator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {creators.map((creator) => (
            <Link
              href={"/featured-user-details"}
              key={creator.id}
              className="bg-white p-6 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-71 bg-gray-200 rounded-xl">
                <Image
                  src={creator.image || "/placeholder.svg"}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-[#12151A] leading-[130%] tracking-[ 0.12px] mt-6 mb-4">
                  {creator.name}
                </h3>
                <p className="text-sm text-[#404C5C] leading-[140%] tracking-[0.07px] mb-4">
                  {creator.bio}
                </p>

                {/* Donate Button */}
                <button className="w-full p-2.5 rounded-lg bg-[#F3F3F4] flex gap-2 items-center cursor-pointer">
                  <span>
                    <GrowIcon className="inline-block" />
                  </span>
                  <span>Wishlist: AAPL</span>
                </button>
                <div className="w-[60%] mx-auto mt-6">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
