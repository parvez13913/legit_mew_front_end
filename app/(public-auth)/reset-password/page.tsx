import ResetPasswordForm from "@/components/reset-password-form";

import Image from "next/image";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="container">
      <Link href="/">
        <Image
          src="/images/Logo.png"
          alt="nav-logo"
          height={400}
          width={400}
          className="object-cover w-22.5 h-19.5 mb-10"
        />
      </Link>
      <div className="flex items-center justify-center gap-20 max-md:flex-col">
        <div className="w-full">
          <Image
            src={"/images/reset-password.png"}
            alt="sign in"
            height={400}
            width={400}
            className="object-cover"
          />
        </div>
        <div className="w-full">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}
