import Assets from "@/components/Assets";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Swap from "@/components/Swap";
import Image from "next/image";
import React from "react";
import handler from "./api/fetchAndStoreData";

export default async function Home() {
await handler();
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center  bg-hero-bg bg-no-repeat no-scrollbar bg-top bg-contain mb-20">
      <Navbar />
      <Hero />
      <Assets />
      <Swap />
    </main>
  );
}
