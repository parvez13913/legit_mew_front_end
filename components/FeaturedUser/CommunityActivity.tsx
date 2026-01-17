import { CheckCircle, Gift, Users } from "lucide-react";
import Image from "next/image";

const supporters = [
  { id: 1, name: "Sarah", image: "/images/Image-1.png" },
  { id: 2, name: "Mike", image: "/images/Image-2.png" },
  { id: 3, name: "Emma", image: "/images/Image-3.png" },
];

const moreCount = 117;

export default function CommunityActivity() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h2 className="text-[#333] text-[32px] font-medium leading-[130%] mb-6">
        Community Activity
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Total Supporters */}
        <div className="bg-[#F3F5F4] rounded-2xl py-6 px-4.5 flex flex-col items-center">
          <Users className="w-6 h-6 text-primary mb-6" />
          <p className="text-[32px] leading-[130%] font-semibold text-[#1D1F2C] mb-2.5">
            125
          </p>
          <p className="text-sm text-[#777980] leading-[140%] tracking-[0.07px]">
            Total Supporters
          </p>
        </div>

        {/* Donations Made */}
        <div className="bg-[#F3F5F4] rounded-2xl py-6 px-4.5 flex flex-col items-center">
          <Gift className="w-6 h-6 text-red-400 mb-6" />
          <p className="text-[32px] leading-[130%] font-semibold text-[#1D1F2C] mb-2.5">
            347
          </p>
          <p className="text-sm text-[#777980] leading-[140%] tracking-[0.07px]">
            Donations Made
          </p>
        </div>

        {/* Wishlist Fulfilled */}
        <div className="bg-[#F3F5F4] rounded-2xl py-6 px-4.5 flex flex-col items-center">
          <CheckCircle className="w-6 h-6 text-primary mb-6" />
          <p className="text-[32px] leading-[130%] font-semibold text-[#1D1F2C] mb-2.5">
            12
          </p>
          <p className="text-sm text-[#777980] leading-[140%] tracking-[0.07px]">
            Wishlist Fulfilled
          </p>
        </div>
      </div>

      {/* Recent Supporters */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-[#1D1F2C] leading-[160%] mb-3">
          Recent Supporters
        </h3>
        <div className="flex items-center gap-2">
          {/* Avatar Stack */}
          <div className="flex -space-x-3">
            {supporters.map((supporter) => (
              <div key={supporter.id}>
                <Image
                  src={supporter.image}
                  alt={supporter.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-full w-8 h-8"
                />
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            +{moreCount} more supporters
          </span>
        </div>
      </div>

      {/* Support Banner */}
      <button className="bg-[#E6F6F1] border border-teal-100 rounded-lg py-4 px-2.5 text-center">
        <p className="text-sm text-[#777980] leading-[140%] tracking-[0.07px] cursor-pointer">
          <span className="font-semibold text-primary">125 people</span> have
          supported this creator
        </p>
      </button>
    </div>
  );
}
