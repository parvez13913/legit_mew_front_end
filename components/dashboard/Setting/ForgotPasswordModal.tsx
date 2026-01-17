"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import EmailIcon from "@/public/icons/EmailIcon";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

interface ForgotPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSendOTP: (email: string) => void;
}

interface ForgotPasswordFormData {
  email: string;
}

export default function ForgotPasswordModal({
  open,
  onOpenChange,
  onSendOTP,
}: ForgotPasswordModalProps) {
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
    onSendOTP(data.email);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-white border-none shadow-lg"
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
              <span>Forgot Password</span>
            </h1>
            <p className="text-[16px] leading-[160%] tracking-[0.08px] text-[#333] mt-2">
              Please enter your email address to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#333] mb-2">
                Enter Your Email
              </label>
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
                  placeholder="Enter your Email"
                  className="input pl-10 pr-4 placeholder:text-sm placeholder:text-[#333] placeholder:leading-[140%] tracking-[0.07px] rounded-[8px]"
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

            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-3 rounded-[8px] cursor-pointer mt-6 font-medium"
            >
              <span className="leading-[10%] tracking-[0.12px]">Send OTP</span>
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
