"use client";

import { useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import UserIcon from "@/public/icons/UserIcon";
import profileImage from "@/public/images/Ellipse 15.png";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-[#E6F5F0] p-6 md:p-10 rounded-[12px] mt-6">
      <h1 className="text-2xl font-semibold text-[#08A270] mb-8">
        Personal Information
      </h1>
      <hr className="border-t border-[#777980] mb-8" />
      <div className="">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel - Profile Display */}
          <div className="">
            <div className="w-[300px] h-[396px] bg-white rounded-lg border border-[#08A270] flex flex-col items-center justify-center">
              {/* Profile Picture */}
              {profileImage ? (
                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="Profile"
                    width={128}
                    height={128}
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                  <UserIcon className="w-20 h-20" />
                </div>
              )}
              {/* Profile Text */}
              <p className="mb-1">Profile</p>
              <p className="text-2xl">Admin</p>
            </div>
          </div>

          {/* Right Panel - Personal Details */}
          <div className="flex-1">
            {/* Input Fields */}
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block font-medium mb-4">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-[#08A270] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#08A270] focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-medium mb-4">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-[#08A270] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#08A270] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block font-medium mb-8">Phone Number</label>
                <div className="flex gap-2">
                  <div className="w-[200px] md:w-[134px]">
                    <PhoneInput
                      country={"us"}
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      containerClass="phone-input-container"
                    />
                  </div>
                  <input
                    type="tel"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-[#08A270] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#08A270] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              {/* Header with Title and Edit Button */}
              <div className="flex items-center justify-end mb-[10px]">
                <button className="bg-[#08A270] text-white px-[30px] py-[10px] rounded-full flex items-center gap-2 hover:bg-[#07a270] transition-colors cursor-pointer">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
