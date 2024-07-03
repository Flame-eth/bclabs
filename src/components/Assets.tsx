'use client';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import useSWR from 'swr';
import { AssetType } from '@/types';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Assets() {
  const { data, error, isLoading } = useSWR('/api/assets', fetcher);

  if (error) return <div>Error loading assets</div>;

  return (
    <div className="container w-full max-w-[90%] rounded-lg border border-[#464646] bg-black/80 bg-opacity-60 p-2 py-5 shadow-2xl backdrop-blur-lg backdrop-filter no-scrollbar md:p-10 lg:max-w-[80%]">
      <Table className="hide-scrollbar::-webkit-scrollbar hide-scrollbar">
        <TableHeader>
          <TableRow className="hover:bg-transparent data-[state=selected]:bg-transparent">
            <TableHead className="w-fit min-w-[220px] whitespace-nowrap text-xl font-medium uppercase text-zinc-50">
              Asset
            </TableHead>
            <TableHead className="w-fit whitespace-nowrap text-xl font-medium uppercase text-zinc-50">
              Last Trade
            </TableHead>
            <TableHead className="w-fit whitespace-nowrap text-xl font-medium uppercase text-zinc-50">
              24H %
            </TableHead>
            <TableHead className="w-fit whitespace-nowrap text-xl font-medium uppercase text-zinc-50">
              24H Change
            </TableHead>
            <TableHead className="flex w-fit items-center whitespace-nowrap text-xl font-medium uppercase text-accent_blue">
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
                className="border-none hover:bg-transparent data-[state=selected]:bg-transparent"
              >
                <TableCell className="flex w-fit flex-shrink-0 items-center gap-2">
                  <Skeleton className="h-12 w-12 animate-pulse rounded-md bg-gray-300" />
                  <Skeleton className="h-5 w-16 animate-pulse rounded-sm bg-gray-300" />
                </TableCell>
                <TableCell className="w-fit">
                  <Skeleton className="h-5 w-24 animate-pulse rounded-sm bg-gray-300" />
                </TableCell>
                <TableCell className="w-fit">
                  <Skeleton className="h-5 w-12 animate-pulse rounded-sm bg-gray-300" />
                </TableCell>
                <TableCell className="w-fit">
                  <Skeleton className="h-5 w-24 animate-pulse rounded-sm bg-gray-300" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-7 w-16 animate-pulse rounded-sm bg-gray-300" />
                </TableCell>
              </TableRow>
            ))
          ) : error ? (
            <TableRow className="border-none hover:bg-transparent data-[state=selected]:bg-transparent">
              <TableCell colSpan={5} className="text-center">
                Error loading assets
              </TableCell>
            </TableRow>
          ) : (
            data?.data?.length &&
            data.data.map((asset: AssetType, index: number) => (
              <TableRow
                className="border-none hover:bg-transparent data-[state=selected]:bg-transparent"
                key={index}
              >
                <TableCell className="flex w-fit flex-shrink-0 items-center gap-2">
                  <Image
                    src={asset.image}
                    alt="Bitcoin"
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <p className="text-lg font-medium uppercase text-zinc-50">
                    {asset.symbol}/<span className="text-[#666666]">USD</span>
                  </p>
                </TableCell>
                <TableCell className="w-fit text-lg font-medium text-zinc-50">
                  ${''} {asset.price}
                </TableCell>
                <TableCell
                  className={cn(
                    'w-fit text-lg font-medium text-[#6DFFDC]',
                    asset.percentage_24H.toString().charAt(0) === '-'
                      ? 'text-[#FF5454]'
                      : 'text-[#6DFFDC]'
                  )}
                >
                  {asset.percentage_24H.toFixed(2)}%{' '}
                </TableCell>
                <TableCell
                  className={cn(
                    'w-fit text-lg font-medium text-[#6DFFDC]',
                    asset.price_24H.toString().charAt(0) === '-'
                      ? 'text-[#FF5454]'
                      : 'text-[#6DFFDC]'
                  )}
                >
                  {asset.price_24H.toFixed(5)}
                </TableCell>
                <TableCell>
                  <Button
                    className="w-fit rounded-none border-none bg-[#6DFF8B] text-lg font-medium text-[#00554B]"
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
