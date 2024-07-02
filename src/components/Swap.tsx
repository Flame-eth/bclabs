import { swapData } from "@/constants";
import { Bitcoin, Bolt, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Swap = () => {
  return (
    <div className="border p-10 border-[#464646] rounded-lg w-full  container max-w-[90%] lg:max-w-[80%] bg-black/80 shadow-2xl no-scrollbar backdrop-filter backdrop-blur-lg bg-opacity-60">
      <div className="flex w-full flex-col gap-[50px]">
        <div className="flex items-center justify-between">
          <h1 className=" uppercase font-medium text-xl whitespace-nowrap  w-fit  text-zinc-50 ">
            Swap tokens
          </h1>
          <Bolt size={20} className=" text-white" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative w-full">
            <div className="flex gap-3 md:gap-1 flex-col md:flex-row">
              {swapData.map((data, index) => (
                <div
                  className="flex-1 bg-[#1E1E1E] h-[120px] rounded-md py-5 px-5 md:px-10 flex justify-between"
                  key={index}
                >
                  <div className="flex flex-col justify-between items-start">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="bg-transparent text-[#FAFAFA] placeholder:text-[#FAFAFA] w-full border-none  focus:outline-none font-semibold text-[22px] md:text-[40px] p-0 m-0"
                    />
                    <p className=" text-[#666666] font-medium text-sm">
                      ${data.placeholder}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-start">
                    <div className=" bg-black flex items-center gap-1 text-[#868686] text-xl uppercase p-3 w-fit min-w-[120px] font-medium h-[50px]">
                      <Image
                        src={data.icon}
                        width={32}
                        height={32}
                        alt="icon"
                        className=" text-white object-contain"
                      />
                      {data.name}
                      <ChevronRight size={20} className=" text-white" />
                    </div>
                    <p className=" text-[#FAFAFA] whitespace-nowrap font-medium text-sm">
                      Balance:{" "}
                      <span className=" text-accent_blue">{data.balance}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
              <Image src="/swap.svg" width={50} height={50} alt="swap" className=" absolute inset-0 top-0 bottom-0 left-0 right-0 m-auto" />
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
