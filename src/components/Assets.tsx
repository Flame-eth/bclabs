import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Assets() {
  return (
    <div className="border p-10 border-[#464646] rounded-lg  container bg-black/80 shadow-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" uppercase font-semibold text-xl text-zinc-50 ">
              Asset
            </TableHead>
            <TableHead className=" uppercase font-semibold text-xl text-zinc-50 ">
              Last Trade
            </TableHead>
            <TableHead className=" uppercase font-semibold text-xl text-zinc-50 ">
              24H %
            </TableHead>
            <TableHead className=" uppercase font-semibold text-xl text-zinc-50 ">
              24H Change
            </TableHead>
            <TableHead className=" uppercase font-semibold text-xl text-accent_blue flex items-center ">
              Trade
              <ChevronRight size={20} className="ml-2" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="/btc.svg"
                    alt="Bitcoin"
                    width={64}
                    height={64}
                    className="rounded-md object-fill"
                  />
                  <p className="font-medium text-zinc-50 text-lg">
                    BTC/<span className=" text-[#666666]">
                        USD
                    </span>
                  </p>
                </div>
              </TableCell>
              <TableCell className="font-medium text-zinc-50 text-lg">$57,234.56</TableCell>
              <TableCell className="font-medium text-zinc-50 text-lg"  >
                  +2.5%
              </TableCell>
              <TableCell>+$1,234.56</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
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
