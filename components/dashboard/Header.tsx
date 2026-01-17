"use client";

import NotifationIcon from "@/public/icons/NotifationIcon";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import UserIcon from "@/public/images/Ellipse 25.png";
import Link from "next/link";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function Header({
  onToggleSidebar,
  isSidebarOpen,
}: HeaderProps) {
  //   const { data: profileData } = useGetProfileQuery({});
  return (
    <div className="w-full bg-[#08A270] text-white rounded-xl mt-8">
      <div className="flex items-center justify-between p-[19px] ">
        {/* Left side - Menu/Close button and Dashboard title */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="xl:hidden cursor-pointer p-2 rounded-md transition-colors"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
          <div className="space-y-2 hidden md:block">
            <h1 className="text-2xl font-semibold hidden md:block leading-[150%]">
              Welcome,hedset
            </h1>
            <h3 className="text-[16px] font-normal leading-[150%]">
              Have a nice day
            </h3>
          </div>
        </div>

        {/* Right side - Search bar and icons */}
        <div className="flex items-center gap-8 pr-8">
          {/* Notification icon */}

          <Link href="/dashboard/notification">
            <NotifationIcon />
          </Link>

          <div className="flex items-center gap-2.5">
            <Image src={UserIcon} alt="User" width={53} height={53} />
            <span className="text-[16px] font-normal leading-[150%]">
              Kristin Watson
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
