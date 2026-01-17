"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import KeyIcon from "@/public/icons/KeyIcon";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ChangePasswordFormProps {
  onClose?: () => void;
  open: boolean;
  onForgotPassword?: () => void;
}

export default function ChangePasswordForm({
  onClose,
  open,
  onForgotPassword,
}: ChangePasswordFormProps) {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ChangePasswordFormData>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ChangePasswordFormData) => {
    console.log("Form submitted:", data);
    // Add your password change logic here
  };

  const handleForgotPasswordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onForgotPassword?.();
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#333] leading-[130%] tracking-[0.12px] flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rotate-180 hover:opacity-70 transition-opacity"
          >
            <ArrowIcon className="w-6 h-6" />
          </button>
          <span>Change Password</span>
        </h1>
        <p className="text-[16px] leading-[160%] tracking-[0.08px] text-[#333] mt-2">
          Your password must be 8-10 character long.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Old Password Field */}
        <div>
          <label className="block text-sm font-medium text-[#333] mb-2">
            Enter old password
          </label>
          <div className="relative">
            <input
              {...register("oldPassword", {
                required: "Old password is required",
              })}
              type={showOldPassword ? "text" : "password"}
              placeholder="Enter old password"
              className="input pl-10 pr-10 placeholder:text-sm placeholder:text-[#333] placeholder:leading-[140%] tracking-[0.07px] rounded-[8px]"
            />

            {/* Left icon */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
              <KeyIcon className="h-5 w-5" />
            </div>

            {/* Right toggle button */}
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showOldPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {errors.oldPassword && (
            <p className="text-red-400 text-sm mt-1">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        {/* New Password Field */}
        <div>
          <label className="block text-sm font-medium text-[#333] mb-2">
            Set new password
          </label>
          <div className="relative">
            <input
              {...register("newPassword", {
                required: "New password is required",
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
              placeholder="Set new password"
              className="input pl-10 pr-10 placeholder:text-sm placeholder:text-[#333] placeholder:leading-[140%] tracking-[0.07px] rounded-[8px]"
            />

            {/* Left icon */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
              <KeyIcon className="h-5 w-5" />
            </div>

            {/* Right toggle button */}
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

        {/* Confirm Password Field */}
        <div>
          <label className="block text-sm font-medium text-[#333] mb-2">
            Re-enter new password
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter new password"
              className="input pl-10 pr-10 placeholder:text-sm placeholder:text-[#333] placeholder:leading-[140%] tracking-[0.07px] rounded-[8px]"
            />

            {/* Left icon */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
              <KeyIcon className="h-5 w-5" />
            </div>

            {/* Right toggle button */}
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

        {/* Forget Password Link */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleForgotPasswordClick}
            className="text-sm leading-[150%] text-primary hover:underline"
          >
            Forget password?
          </button>
        </div>

        {/* Update Password Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white px-4 py-3 rounded-[12px] cursor-pointer mt-6 font-medium"
        >
          <span className="leading-[10%] tracking-[0.12px]">
            Update password
          </span>
        </button>
      </form>
    </div>
  );
}
