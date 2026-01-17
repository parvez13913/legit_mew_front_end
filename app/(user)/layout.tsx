"use client";

import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
