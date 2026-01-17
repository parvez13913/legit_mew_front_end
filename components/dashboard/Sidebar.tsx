"use client";

import {
  BarChart3,
  CreditCard,
  FileText,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "@/public/images/DashboardLogo.png";
import Image from "next/image";
import DonationIcon from "@/public/icons/DonationIcon";
import EarningIcon from "@/public/icons/EarningIcon";
import SidebarUserIcon from "@/public/icons/SidebarUserIcon";
import AnalyticIcon from "@/public/icons/AnalyticIcon";
import SettingIcon from "@/public/icons/SettingIcon";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navItems: NavItem[] = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <DonationIcon />,
      label: "Donation History",
      href: "/dashboard/donation-history",
    },
    {
      icon: <EarningIcon />,
      label: "Earning",
      href: "/dashboard/earning",
    },
    {
      icon: <SidebarUserIcon />,
      label: "User",
      href: "/dashboard/user",
    },
    {
      icon: <AnalyticIcon />,
      label: "Analytics",
      href: "/dashboard/analytics",
    },
    {
      icon: <SettingIcon />,
      label: "Setting",
      href: "/dashboard/setting",
    },
  ];

  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    const pathWithoutLocale =
      pathname?.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
    if (href === "/dashboard") {
      return pathWithoutLocale === "/dashboard" || pathWithoutLocale === "/";
    }
    return pathWithoutLocale.startsWith(href);
  };

  return (
    <div className="h-screen shadow-2xl">
      {/* Overlay for mobile */}
      <div
        className={`
          absolute top-0 left-0 w-full h-full z-40 xl:hidden bg-black/50
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Sidebar container */}
      <div
        className={`
          ${isOpen
            ? "z-50 translate-x-0 xl:translate-x-0"
            : "-translate-x-full xl:translate-x-0"
          }
          h-full overflow-hidden absolute top-0 left-0 xl:relative xl:z-auto
          flex flex-col
          bg-white
          w-[238px] overflow-y-auto
          transition-transform duration-300 ease-in-out
        `}
      >
        <div className="flex justify-end xl:hidden p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="cursor-pointer hover:opacity-70 transition-opacity p-2 rounded-md hover:bg-gray-100 relative z-10"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* App Name Section */}
        <div className="px-6 pt-10 pb-[64px] flex justify-center items-center">
          <Link href="/" className="block">
            <Image src={Logo} alt="Logo" width={150} height={130} />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="px-4 space-y-1">
          {navItems.map((item, idx) => {
            const active = isActive(item.href);
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-full
                  transition-colors duration-200
                  ${active
                    ? "bg-[#08A270] text-white"
                    : "text-black hover:bg-gray-100"
                  }
                `}
              >
                <div className={`${active ? "text-white" : ""}`}>
                  {item.icon}
                </div>
                <span className="text-base font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Section - Log out */}
        <div className="mt-auto px-4 py-4 space-y-1">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-3 py-2.5 rounded-full text-white bg-[#F70300] transition-colors duration-200 cursor-pointer"
          >
            <LogOut size={20} />
            <span className="text-base font-medium">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
