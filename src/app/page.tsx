import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen h-[2000px] flex-col items-center justify-between bg-hero-bg bg-no-repeat no-scrollbar bg-top">
      <Navbar />
      
    </main>
  );
}
