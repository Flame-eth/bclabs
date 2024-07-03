import { AssetType } from "@/types";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
//     if (req.method === 'GET') {
//         const assets: Asset[] = await prisma.asset.findMany();
//         res.status(200).json(assets);
//     } else {
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const assets: AssetType[] = await prisma.asset.findMany();
  return NextResponse.json(
    {
      data: assets,
    },
    { status: 200 }
  );
}
