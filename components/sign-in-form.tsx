"use client";

import EmailIcon from "@/public/icons/EmailIcon";
import KeyIcon from "@/public/icons/KeyIcon";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="w-full">
      <div className="bg-[#E6F6F1] border border-primary rounded-2xl p-14">
        <h1 className="text-2xl font-medium text-[#333] leading-[130%] tracking-[0.12px] text-center mb-7">
          Sign In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* Email Field */}
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
                placeholder="Enter Your Email"
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

          {/* Password Field */}
          <div className="mb-4">
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("rememberMe")}
                type="checkbox"
                className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
              />
              <span className="text-[16px] leading-[150%] text-[#333]">
                Remember me
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm leading-[150%] text-[#333]"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-3 rounded-full cursor-pointer mb-3"
          >
            <span className="leading-[10%] tracking-[0.12px] font-medium">
              Sign In
            </span>
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-[16px] text-[#333] leading-[150%]">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-primary font-medium">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
