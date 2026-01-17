"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import KeyIcon from "@/public/icons/KeyIcon";
import { Eye, EyeOff } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ResetPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onReset: (newPassword: string, confirmPassword: string) => void;
}

interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

export default function ResetPasswordModal({
  open,
  onOpenChange,
  onReset,
}: ResetPasswordModalProps) {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ResetPasswordFormData) => {
    onReset(data.newPassword, data.confirmPassword);
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
              <span>Reset Password</span>
            </h1>
            <p className="text-[16px] leading-[160%] tracking-[0.08px] text-[#333] mt-2">
              Your password must be 8-10 character long.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              {/* <label className="block text-sm font-medium text-[#333] mb-2">
                Set your password
              </label> */}
              <div className="relative">
                <input
                  {...register("newPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password must be at most 10 characters",
                    },
                  })}
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Set your password"
                  className="input pl-10 pr-10 placeholder:text-sm placeholder:text-[#333] placeholder:leading-[140%] tracking-[0.07px] rounded-[8px]"
                />

                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <KeyIcon className="h-5 w-5" />
                </div>

                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {errors.newPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div>
              {/* <label className="block text-sm font-medium text-[#333] mb-2">
                Re-enter password
              </label> */}
              <div className="relative">
                <input
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  className="input pl-10 pr-10 placeholder:text-sm placeholder:text-[#333] placeholder:leading-[140%] tracking-[0.07px] rounded-[8px]"
                />

                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <KeyIcon className="h-5 w-5" />
                </div>

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-3 rounded-[8px] cursor-pointer mt-6 font-medium"
            >
              <span className="leading-[10%] tracking-[0.12px]">
                Reset Password
              </span>
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
