import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F5F0] to-white flex items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              height={150}
              width={150}
              className="object-cover"
              priority
            />
          </Link>
        </div>

        {/* 404 Content */}
        <div className="space-y-6">
          {/* Large 404 Text */}
          <div className="space-y-2">
            <h1 className="text-9xl font-bold text-[#08A270] leading-none">
              404
            </h1>
            <div className="w-24 h-1 bg-[#08A270] mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 pt-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1F2C] poppins">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It
              might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/"
              className="text-lg text-white leading-[100%] tracking-[0.09px] px-8 py-5 rounded-full bg-[#08A270] hover:bg-[#07a270] transition-colors poppins"
            >
              Go to Homepage
            </Link>
            <Link
              href="/dashboard"
              className="text-lg text-[#08A270] leading-[100%] tracking-[0.09px] px-8 py-5 rounded-full bg-[#E6F6F1] hover:bg-[#d4ede4] transition-colors poppins border border-[#08A270]"
            >
              Go to Dashboard
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="pt-12 flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#08A270] rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-secondary rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#08A270] rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
