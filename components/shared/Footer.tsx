import DiscordIcon from "@/public/icons/DiscordIcon";
import FacebookIcon from "@/public/icons/FacebookIcon";
import LocationIcon from "@/public/icons/LocationIcon";
import PhoneIcon from "@/public/icons/PhoneIcon";
import { InstagramIcon, LucideLinkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="flex flex-col py-30 bg-white relative">
        <div className="container mx-auto absolute top-10 left-0 right-0">
          <div className="bg-primary py-14 rounded-2xl text-white text-center">
            <h1 className="text-4xl lg:text-[56px] font-bold leading[130%] mb-5">
              Join StockGifter Today
            </h1>
            <p className="text-lg text-white mx-auto leading-[160%] mb-8">
              Start supporting your favorite creators with stock solutions and
              help <br /> them build lasting wealth
            </p>
            <Link
              href={"/featured-users"}
              className="bg-white px-9 py-5.25 rounded-full text-[#1D1F2C] cursor-pointer"
            >
              Discover users
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#E6F6F1] flex-1 px-6 pt-60 pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div>
              <Link
                href={"/"}
                className="w-15 h-15 rounded-full flex items-center justify-center mb-6"
              >
                <Image
                  src={"/images/Logo.png"}
                  alt="Logo"
                  height={400}
                  width={400}
                  className="object-cover rounded-full"
                />
              </Link>
              <p className="text-sm text-[#1D1F2C] leading-[140%] tracking-[0.07px] mb-6">
                StockGifter is a modern platform that allows supporters to gift
                stocks to their favorite users instead of traditional cash
                donations. By combining creator support with smart investing,
                StockGifter helps users grow their
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full border border-primary">
                  <DiscordIcon className="w-8 h-8" />
                </a>
                <a href="#" className="p-2 rounded-full border border-primary">
                  <FacebookIcon className="w-8 h-8" />
                </a>
                <a href="#" className="p-2 rounded-full border border-primary">
                  <InstagramIcon className="w-8 h-8 text-primary" />
                </a>
                <a href="#" className="p-2 rounded-full border border-primary">
                  <LucideLinkedin className="w-8 h-8 text-primary" />
                </a>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h4 className="text-2xl text-[#1D1F2C] leading-[130%] tracking-[0.12px] mb-4">
                About
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Creator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Creator profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Help and Support Section */}
            <div>
              <h4 className="text-2xl text-[#1D1F2C] leading-[130%] tracking-[0.12px] mb-4">
                Help and support
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Artist Coast
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px] hover:text-emerald-600 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-2xl text-[#1D1F2C] leading-[130%] tracking-[0.12px] mb-4">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-1.5">
                  <span className="bg-primary p-2 rounded-full">
                    <PhoneIcon className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px]">
                      020-0798 01-543 574746
                    </p>
                    <p className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px]">
                      01825-248509
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="bg-primary p-2 rounded-full">
                    <LocationIcon className="h-8 w-8 text-white" />
                  </span>
                  <p className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px]">
                    Roynald House, Stanfield Park, Stanfield Castle Hampshire
                    PO9
                  </p>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="bg-primary p-2 rounded-full">
                    <Mail className="h-8 w-8 text-white" />
                  </span>
                  <p className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px]">
                    office@primarycurrentsupport.com
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-6 text-center">
            <p className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px]">
              ©Copyright - All rights reserved 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
