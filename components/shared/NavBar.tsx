"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Donation", href: "/donation" },
  { label: "Dashboard", href: "/user-dashboard" },
  { label: "Settings", href: "/settings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#FFFFFF] sticky top-0 z-50 py-5.5">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="nav-logo"
            height={100}
            width={100}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-lg leading-[160%]",
                pathname === item.href
                  ? "text-white bg-[#08A270] px-6 py-3 rounded-full"
                  : "text-[#1D1F2C]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth */}

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-lg text-[#1D1F2C] leading-[100%] tracking-[0.09px] px-8 py-5 rounded-full bg-[#E6F6F1]"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-lg text-[#FFFFFF] leading-[100%] tracking-[0.09px] px-8 py-5 rounded-full bg-[#08A270] flex items-center gap-2.5"
          >
            <span>Sign up</span>
            <ArrowIcon />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 px-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block text-base font-medium",
                pathname === item.href ? "text-primary" : "text-black/80",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex gap-4 pt-4">
            <Link href="/login" className="text-black">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-black text-white rounded-lg text-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
