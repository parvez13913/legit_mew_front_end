"use client";

import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChangePasswordForm from "@/components/dashboard/Setting/change-password-form";
import ForgotPasswordModal from "@/components/dashboard/Setting/ForgotPasswordModal";
import VerifyEmailModal from "@/components/dashboard/Setting/VerifyEmailModal";
import ResetPasswordModal from "@/components/dashboard/Setting/ResetPasswordModal";

export default function SettingPage() {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  // Modal states for forgot password flow
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [verifyEmailOpen, setVerifyEmailOpen] = useState(false);
  const [resetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const settingsItems = [
    {
      label: "Personal Information",
      href: "/dashboard/setting/personal-information",
      isModal: false,
    },
    {
      label: "Change Password",
      href: "/dashboard/setting/change-password",
      isModal: true,
    },
    {
      label: "Terms & Condition",
      href: "/dashboard/setting/terms-condition",
      isModal: false,
    },
    {
      label: "Privacy Policy",
      href: "/dashboard/setting/privacy-policy",
      isModal: false,
    },
    {
      label: "About Us",
      href: "/dashboard/setting/about-us",
      isModal: false,
    },
  ];

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof settingsItems)[0]
  ) => {
    if (item.isModal && item.label === "Change Password") {
      e.preventDefault();
      setIsChangePasswordOpen(true);
    }
  };

  const handleForgotPasswordClick = () => {
    setIsChangePasswordOpen(false);
    setForgotPasswordOpen(true);
  };

  const handleSendOTP = (email: string) => {
    setUserEmail(email);
    setForgotPasswordOpen(false);
    setVerifyEmailOpen(true);
  };

  const handleVerifyOTP = (otp: string) => {
    console.log("OTP verified:", otp);
    setVerifyEmailOpen(false);
    setResetPasswordOpen(true);
  };

  const handleResetPassword = (
    newPassword: string,
    confirmPassword: string
  ) => {
    console.log("Password reset:", { newPassword, confirmPassword });
    setResetPasswordOpen(false);
    // Add your password reset logic here
  };

  const handleResendOTP = () => {
    console.log("Resending OTP to:", userEmail);
    // Add your resend OTP logic here
  };

  return (
    <>
      <div className="bg-[#E6F5F0] p-8 rounded-[12px] mt-6">
        <h1 className="text-2xl font-semibold text-[#08A270] mb-4">Settings</h1>
        <hr className="border-t border-[#777980] mb-8" />
        <div className="space-y-4">
          {settingsItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={(e) => handleItemClick(e, item)}
              className="bg-white border border-[#08A270] rounded-lg px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-800 font-medium">{item.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              // className="text-[#08A270]"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <Dialog
        open={isChangePasswordOpen}
        onOpenChange={setIsChangePasswordOpen}
      >
        <DialogContent className="max-w-md">
          <ChangePasswordForm
            open={isChangePasswordOpen}
            onClose={() => setIsChangePasswordOpen(false)}
            onForgotPassword={handleForgotPasswordClick}
          />
        </DialogContent>
      </Dialog>

      {/* Forgot Password Flow Modals - rendered outside ChangePasswordForm Dialog */}
      <ForgotPasswordModal
        open={forgotPasswordOpen}
        onOpenChange={setForgotPasswordOpen}
        onSendOTP={handleSendOTP}
      />

      <VerifyEmailModal
        open={verifyEmailOpen}
        onOpenChange={setVerifyEmailOpen}
        email={userEmail}
        onVerify={handleVerifyOTP}
        onResend={handleResendOTP}
      />

      <ResetPasswordModal
        open={resetPasswordOpen}
        onOpenChange={setResetPasswordOpen}
        onReset={handleResetPassword}
      />
    </>
  );
}
