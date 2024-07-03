import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";

const prisma = new PrismaClient();

export default async function handler() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-cGcgDUcQCpZTPurt9d3ihLak	",
    },
    cache: "no-store",
  };
  // Fetch price data from CoinGecko
  const priceResponse = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin,ethereum,dogecoin,algorand,polkadot,uniswap,compound&vs_currency=usd",
    options
  );
  const priceData = await priceResponse.json();


  (priceData as any[]).forEach(async (asset) => {
    const {
      symbol,
      current_price: price,
      image,
      name,
      price_change_percentage_24h: percentage_24H,
      price_change_24h: price_24H,
    } = asset;

    // Upsert data into PostgreSQL database
    await prisma.asset.upsert({
      where: { symbol },
      update: { price, price_24H, percentage_24H },
      create: { symbol, price, image, name, percentage_24H, price_24H },
    });
  });

  
}
