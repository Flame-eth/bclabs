"use client"
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

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Assets() {
  const { data, error, isLoading } = useSWR("/api/assets", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading assets</div>;
  if (data) console.log(data);

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
          {data?.data?.length && data.data.map((asset: AssetType, index) => (
            <TableRow
              className="hover:bg-transparent border-none data-[state=selected]:bg-transparent"
              key={index}
            >
              <TableCell className=" w-fit  flex items-center gap-2 flex-shrink-0">
                <Image
                  src={asset.image}
                  alt="Bitcoin"
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
                <p className="font-medium text-zinc-50 text-lg uppercase">
                  {asset.symbol}/<span className=" text-[#666666]">USD</span>
                </p>
              </TableCell>
              <TableCell className=" w-fit  font-medium text-zinc-50 text-lg">
                $57,234.56
              </TableCell>
              <TableCell className=" w-fit  font-medium text-green-500 text-lg">
                +2.5%
              </TableCell>
              <TableCell className=" w-fit  font-medium text-green-500 text-lg">
                +$1,234.56
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
          ))}
          {/* <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image src="/placeholder.svg" alt="Ethereum" width={32} height={32} className="rounded-full" />
                <span className="font-medium">Ethereum</span>
              </div>
            </TableCell>
            <TableCell>$1,850.23</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-red-500 text-red-50">
                -1.2%
              </Badge>
            </TableCell>
            <TableCell>-$22.45</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                Trade
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image src="/placeholder.svg" alt="Litecoin" width={32} height={32} className="rounded-full" />
                <span className="font-medium">Litecoin</span>
              </div>
            </TableCell>
            <TableCell>$215.67</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-green-500 text-green-50">
                +0.8%
              </Badge>
            </TableCell>
            <TableCell>+$1.72</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                Trade
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image src="/placeholder.svg" alt="Ripple" width={32} height={32} className="rounded-full" />
                <span className="font-medium">Ripple</span>
              </div>
            </TableCell>
            <TableCell>$0.56</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-red-500 text-red-50">
                -3.4%
              </Badge>
            </TableCell>
            <TableCell>-$0.02</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                Trade
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image src="/placeholder.svg" alt="Dogecoin" width={32} height={32} className="rounded-full" />
                <span className="font-medium">Dogecoin</span>
              </div>
            </TableCell>
            <TableCell>$0.07</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-green-500 text-green-50">
                +5.1%
              </Badge>
            </TableCell>
            <TableCell>+$0.00</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                Trade
              </Button>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
}
