"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/Components/Navbar/navbar";
import Footer from "@/app/Components/Footer/footer";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/UI/Login" || pathname === "/UI/Register";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
