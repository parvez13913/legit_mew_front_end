/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface VerifyEmailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
  onVerify: (otp: string) => void;
  onResend?: () => void;
}

export default function VerifyEmailModal({
  open,
  onOpenChange,
  onVerify,
  onResend,
}: VerifyEmailModalProps) {
  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const otp = watch("otp");

  // Handle paste functionality
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData?.getData("text");

      if (pastedData) {
        const digits = pastedData.replace(/\D/g, "").split("").slice(0, 6);
        digits.forEach((digit, index) => {
          setValue(`otp.${index}` as any, digit);
        });

        const nextIndex = Math.min(digits.length, 5);
        inputRefs.current[nextIndex]?.focus();
      }
    };

    const firstInput = inputRefs.current[0];
    if (firstInput) {
      firstInput.addEventListener("paste", handlePaste);
      return () => firstInput.removeEventListener("paste", handlePaste);
    }
  }, [setValue]);

  const handleInputChange = (index: number, value: string) => {
    const sanitized = value.replace(/\D/g, "").slice(-1);
    setValue(`otp.${index}` as any, sanitized);

    if (sanitized && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    onVerify(otpCode);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className=" bg-white border-none shadow-lg"
        showCloseButton={false}
      >
        <div className="w-full">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#333] leading-[130%] tracking-[0.12px] flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rotate-180 hover:opacity-70 transition-opacity"
              >
                <ArrowIcon className="w-6 h-6" />
              </button>
              <span>Verify Email</span>
            </h1>
            <p className="text-[16px] leading-[160%] tracking-[0.08px] text-[#333] mt-2">
              Please enter the OTP we have sent you in your email.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-center gap-2 md:gap-3">
              {otp.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  placeholder="0"
                  className="w-full md:w-[65px] h-[72px] text-center text-lg font-semibold border-2 border-primary rounded-[8px] transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 text-[#333] bg-white"
                  aria-label={`OTP digit ${index + 1}`}
                  disabled={isLoading}
                />
              ))}
            </div>

            <div className="pt-2 text-center flex justify-between">
              <span className="text-sm text-[#333]">
                Didn&apos;t receive the code?{" "}
              </span>
              <button
                type="button"
                onClick={onResend}
                className="text-sm text-primary hover:underline font-medium"
              >
                Resend
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading || otp.join("").length !== 6}
              className="w-full bg-primary text-white px-4 py-3 rounded-[8px] cursor-pointer mt-6 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="leading-[10%] tracking-[0.12px]">
                {isLoading ? "Verifying..." : "Verify"}
              </span>
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
