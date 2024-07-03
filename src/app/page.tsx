import Assets from '@/components/Assets';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Swap from '@/components/Swap';
import React from 'react';
import handler from './api/fetchAndStoreData';

export default async function Home() {
  // Fetch and store live price data on page load
  await handler();
  return (
    <main className="mb-20 flex min-h-screen flex-col items-center gap-10 bg-hero-bg bg-contain bg-top bg-no-repeat no-scrollbar">
      <Navbar />
      <Hero />
      <Assets />
      <Swap />
    </main>
  );
}
