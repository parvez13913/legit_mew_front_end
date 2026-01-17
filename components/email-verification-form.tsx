/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
interface EmailVerificationFormProps {
  email?: string;
  onVerify?: (otp: string) => void;
}

export default function EmailVerificationForm({
  email = "user@example.com",
  onVerify,
}: EmailVerificationFormProps) {
  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

        // Focus on last filled input or first empty one
        const nextIndex = Math.min(digits.length, 5);
        inputRefs.current[nextIndex]?.focus();
      }
    };

    // Add paste listener to first input
    const firstInput = inputRefs.current[0];
    if (firstInput) {
      firstInput.addEventListener("paste", handlePaste);
      return () => firstInput.removeEventListener("paste", handlePaste);
    }
  }, [setValue]);

  const handleInputChange = (index: number, value: string) => {
    const sanitized = value.replace(/\D/g, "").slice(-1);
    setValue(`otp.${index}` as any, sanitized);

    // Auto-focus to next input
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);

    onVerify?.(otpCode);

    // Reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <div className="w-full">
      <div className="bg-[#E6F6F1] border border-primary rounded-2xl p-10">
        <div className="mb-7">
          <h1 className="text-2xl font-medium text-[#333] leading-[130%] tracking-[0.12px] text-center flex items-center justify-center gap-1">
            <span className="rotate-180">
              <ArrowIcon />
            </span>
            <span>Verify Email</span>
          </h1>
          <p className="text-center mt-4 leading-[160%] tracking-[0.08px] text-[#333] text-[16px]">
            Please enter the otp we have sent you <br /> in your email.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="flex justify-center gap-3 sm:gap-4">
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
                  className={`w-12 h-12 sm:w-14 sm:h-14 text-center text-lg font-semibold border-2 border-primary rounded-full transition-all focus:outline-none text-[#333] bg-white `}
                  aria-label={`OTP digit ${index + 1}`}
                  disabled={isSuccess}
                />
              ))}
            </div>

            {/* Success indicator */}
            {isSuccess && (
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-full px-4 py-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    Email verified!
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* send otp Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-3 rounded-full cursor-pointer mt-8"
          >
            <span className="leading-[10%] tracking-[0.12px] font-medium">
              Verify
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
