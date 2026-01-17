"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import KeyIcon from "@/public/icons/KeyIcon";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ResetPasswordFormData {
  oldPassword: string;
  newPassword: string;
}

export default function ResetPasswordForm() {
  const router = useRouter();
  const [showOldPassword, setOldShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    console.log("Form submitted:", data);
    router.push("/email-verification");
  };

  return (
    <div className="w-full">
      <div className="bg-[#E6F6F1] border border-primary rounded-2xl p-14">
        <div className="mb-7">
          <h1 className="text-2xl font-medium text-[#333] leading-[130%] tracking-[0.12px] text-center flex items-center justify-center gap-1">
            <span className="rotate-180">
              <ArrowIcon />
            </span>
            <span>Reset Password</span>
          </h1>
          <p className="text-center mt-4 leading-[160%] tracking-[0.08px] text-[#333] text-[16px]">
            Your password must be 8-10 character long.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* oldPassword Field */}
          <div className="mb-4">
            <div className="relative">
              <input
                {...register("oldPassword", {
                  required: "Old Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="input pl-10 placeholder:text-sm placeholder:text-[#333 placeholder:leading-[140%] tracking-[0.07px]"
              />

              {/* Left icon */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <KeyIcon className="h-5 w-5" />
              </div>

              {/* Right toggle button */}
              <button
                type="button"
                onClick={() => setOldShowPassword(!showOldPassword)}
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
          <div className="mb-4">
            <div className="relative">
              <input
                {...register("newPassword", {
                  required: "New Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="input pl-10 placeholder:text-sm placeholder:text-[#333 placeholder:leading-[140%] tracking-[0.07px]"
              />

              {/* Left icon */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <KeyIcon className="h-5 w-5" />
              </div>

              {/* Right toggle button */}
              <button
                type="button"
                onClick={() => setNewShowPassword(!showNewPassword)}
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

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-3 rounded-full cursor-pointer mt-8"
          >
            <span className="leading-[10%] tracking-[0.12px] font-medium">
              Confirm
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
