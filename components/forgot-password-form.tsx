"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import EmailIcon from "@/public/icons/EmailIcon";
import { useForm } from "react-hook-form";

interface ForgotPasswordFormData {
  email: string;
}

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="w-full">
      <div className="bg-[#E6F6F1] border border-primary rounded-2xl p-10">
        <div className="mb-7">
          <h1 className="text-2xl font-medium text-[#333] leading-[130%] tracking-[0.12px] text-center flex items-center justify-center gap-1">
            <span className="rotate-180">
              <ArrowIcon />
            </span>
            <span>Forgot Password</span>
          </h1>
          <p className="text-center mt-4 leading-[160%] tracking-[0.08px] text-[#333] text-[16px]">
            Please enter your email address to reset <br /> your password.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="relative">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="E mail"
                className="input pl-10 placeholder:text-sm placeholder:text-[#333 placeholder:leading-[140%] tracking-[0.07px]"
              />

              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <EmailIcon className="h-5 w-5" />
              </div>
            </div>

            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* send otp Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-3 rounded-full cursor-pointer mb-3"
          >
            <span className="leading-[10%] tracking-[0.12px] font-medium">
              Send OTP
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
