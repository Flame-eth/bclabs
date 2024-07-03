"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import useSWR from "swr";
import { AssetType } from "@/types";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

const fetcher = (url: any) => fetch(url).then((res) => res.json());


export default function Assets() {
  const { data, error, isLoading } = useSWR("/api/assets", fetcher);

  if (error) return <div>Error loading assets</div>;

  return (
    <div className="border p-2 py-5 md:p-10 border-[#464646] rounded-lg w-full  container max-w-[90%] lg:max-w-[80%] bg-black/80 shadow-2xl no-scrollbar backdrop-filter backdrop-blur-lg bg-opacity-60 ">
      <Table className="hide-scrollbar::-webkit-scrollbar hide-scrollbar">
        <TableHeader>
          <TableRow className="hover:bg-transparent data-[state=selected]:bg-transparent">
            <TableHead className=" uppercase font-medium text-xl whitespace-nowrap min-w-[220px] w-fit  text-zinc-50 ">
              Asset
            </TableHead>
            <TableHead className=" uppercase font-medium text-xl whitespace-nowrap  w-fit  text-zinc-50 ">
              Last Trade
            </TableHead>
            <TableHead className=" uppercase font-medium text-xl whitespace-nowrap  w-fit  text-zinc-50 ">
              24H %
            </TableHead>
            <TableHead className=" uppercase font-medium text-xl whitespace-nowrap  w-fit  text-zinc-50 ">
              24H Change
            </TableHead>
            <TableHead className=" uppercase font-medium text-xl whitespace-nowrap  w-fit  text-accent_blue flex items-center ">
              Trade
              <ChevronRight size={20} className="ml-2" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            // Assuming you want to show 5 skeleton loaders for example
            Array.from({ length: 5 }, (_, index) => (
              <TableRow
                key={index}
                className="hover:bg-transparent border-none data-[state=selected]:bg-transparent"
              >
                <TableCell className="w-fit flex items-center gap-2 flex-shrink-0">
                  <Skeleton className="w-12 h-12 rounded-md bg-gray-300 animate-pulse" />
                  <Skeleton className="w-16 h-5 rounded-sm bg-gray-300 animate-pulse" />
                </TableCell>
                <TableCell className="w-fit">
                  <Skeleton className="w-24 h-5 rounded-sm bg-gray-300 animate-pulse" />
                </TableCell>
                <TableCell className="w-fit">
                  <Skeleton className="w-12 h-5 rounded-sm bg-gray-300 animate-pulse" />
                </TableCell>
                <TableCell className="w-fit">
                  <Skeleton className="w-24 h-5 rounded-sm bg-gray-300 animate-pulse" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-16 h-7 rounded-sm bg-gray-300 animate-pulse" />
                </TableCell>
              </TableRow>
            ))
          ) : error ? (
            <TableRow className="hover:bg-transparent border-none data-[state=selected]:bg-transparent">
              <TableCell colSpan={5} className="text-center">
                Error loading assets
              </TableCell>
            </TableRow>
          ) : (
            data?.data?.length &&
            data.data.map((asset: AssetType, index: number) => (
              <TableRow
                className="hover:bg-transparent border-none data-[state=selected]:bg-transparent"
                key={index}
              >
                <TableCell className=" w-fit  flex items-center gap-2 flex-shrink-0">
                  <Image
                    src={asset.image}
                    alt="Bitcoin"
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <p className="font-medium text-zinc-50 text-lg uppercase">
                    {asset.symbol}/<span className=" text-[#666666]">USD</span>
                  </p>
                </TableCell>
                <TableCell className=" w-fit  font-medium text-zinc-50 text-lg">
                  ${""} {asset.price}
                </TableCell>
                <TableCell
                  className={cn(
                    " w-fit  font-medium text-[#6DFFDC] text-lg",
                    asset.percentage_24H.toString().charAt(0) === "-"
                      ? "text-[#FF5454]"
                      : "text-[#6DFFDC]"
                  )}
                >
                  {asset.percentage_24H.toFixed(2)}%{" "}
                </TableCell>
                <TableCell
                  className={cn(
                    " w-fit  font-medium text-[#6DFFDC] text-lg",
                    asset.price_24H.toString().charAt(0) === "-"
                      ? "text-[#FF5454]"
                      : "text-[#6DFFDC]"
                  )}
                >
                  {asset.price_24H.toFixed(5)}
                </TableCell>
                <TableCell>
                  <Button
                    className=" w-fit  font-medium text-[#00554B] bg-[#6DFF8B] border-none rounded-none text-lg"
                    variant="outline"
                    size="sm"
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
