import Assets from "@/components/Assets";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Swap from "@/components/Swap";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center  bg-hero-bg bg-no-repeat no-scrollbar bg-top bg-contain mb-20">
      <Navbar />
      <Hero />
      <Assets />
      <Swap />
    </main>
  );
}
