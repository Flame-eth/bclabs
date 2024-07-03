import { swapData } from '@/constants';
import { Bolt, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Swap = () => {
  return (
    <div className="container w-full max-w-[90%] rounded-lg border border-[#464646] bg-black/80 bg-opacity-60 p-10 shadow-2xl backdrop-blur-lg backdrop-filter no-scrollbar lg:max-w-[80%]">
      <div className="flex w-full flex-col gap-[50px]">
        <div className="flex items-center justify-between">
          <h1 className="w-fit whitespace-nowrap text-xl font-medium uppercase text-zinc-50">
            Swap tokens
          </h1>
          <Bolt size={20} className="text-white" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative w-full">
            <div className="flex flex-col gap-3 md:flex-row md:gap-1">
              {swapData.map((data, index) => (
                <div
                  className="flex h-[120px] flex-1 justify-between rounded-md bg-[#1E1E1E] px-5 py-5 md:px-10"
                  key={index}
                >
                  <div className="flex flex-col items-start justify-between">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="m-0 w-full border-none bg-transparent p-0 text-[22px] font-semibold text-[#FAFAFA] placeholder:text-[#FAFAFA] focus:outline-none md:text-[40px]"
                    />
                    <p className="text-sm font-medium text-[#666666]">
                      ${data.placeholder}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-between">
                    <div className="flex h-[50px] w-fit min-w-[120px] items-center gap-1 bg-black p-3 text-xl font-medium uppercase text-[#868686]">
                      <Image
                        src={data.icon}
                        width={32}
                        height={32}
                        alt="icon"
                        className="object-contain text-white"
                      />
                      {data.name}
                      <ChevronRight size={20} className="text-white" />
                    </div>
                    <p className="whitespace-nowrap text-sm font-medium text-[#FAFAFA]">
                      Balance:{' '}
                      <span className="text-accent_blue">{data.balance}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Image
              src="/swap.svg"
              width={50}
              height={50}
              alt="swap"
              className="absolute inset-0 bottom-0 left-0 right-0 top-0 m-auto"
            />
          </div>

          <Button className="mx-auto w-[250px] rounded-none rounded-br-[8px] rounded-tl-[8px] border-none bg-accent_purple text-sm font-medium uppercase text-white hover:bg-accent_purple">
            Swap tokens
          </Button>
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-normal text-[#fafafa]">
                1 BTC = 32.4039 ETH
              </p>
              <span className="text-center text-sm font-normal text-accent_blue">
                Free exchange
              </span>
            </div>
            <div className="text-sm font-normal text-[#666666]">
              Updates in 4s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
