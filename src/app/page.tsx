import Assets from "@/components/Assets";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen h-[2000px] flex-col gap-10 items-center  bg-hero-bg bg-no-repeat no-scrollbar bg-top bg-contain">
      <Navbar />
      <Hero />
      <Assets />
    </main>
  );
}
