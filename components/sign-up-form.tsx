"use client";

import EmailIcon from "@/public/icons/EmailIcon";
import KeyIcon from "@/public/icons/KeyIcon";
import UserIcon from "@/public/icons/UserIcon";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    console.log("Form submitted:", data);
    router.push("/email-verification");
  };

  return (
    <div className="w-full">
      <div className="bg-[#E6F6F1] border border-primary rounded-2xl p-14">
        <h1 className="text-2xl font-medium text-[#333] leading-[130%] tracking-[0.12px] text-center mb-7">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* name Field */}
          <div className="mb-4">
            <div className="relative">
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Enter Your Name"
                className="input pl-10 placeholder:text-sm placeholder:text-[#333 placeholder:leading-[140%] tracking-[0.07px]"
              />

              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <UserIcon className="h-5 w-5" />
              </div>
            </div>

            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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

          {/* Sign up Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-3 rounded-full cursor-pointer mb-3"
          >
            <span className="leading-[10%] tracking-[0.12px] font-medium">
              Sign Up
            </span>
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-[16px] text-[#333] leading-[150%]">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary font-medium">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
