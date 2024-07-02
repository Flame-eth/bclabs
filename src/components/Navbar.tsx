"use client";
import { FC, useState } from "react";
import { navbarHeaders } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar: FC = () => {
  const [showSmSidebar, setShowSmSidebar] = useState(false);
  const [showMdSidebar, setShowMdSidebar] = useState(false);

  const handleShowNavbar = () => {
    if (window.innerWidth <= 638) {
      setShowMdSidebar(false);
      setShowSmSidebar(true);
      return;
    } else {
      setShowSmSidebar(false);
      setShowMdSidebar(true);
      return;
    }
  };

  return (
    <div className=" w-full py-5 ">
      <Sheet>
        <nav className="max-w-[90%] w-full mx-auto items-center flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex lg:hidden">
              <SheetTrigger>
                <Menu
                  size={24}
                  color="#fff"
                  className="cursor-pointer"
                  onClick={handleShowNavbar}
                />
              </SheetTrigger>
            </div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={200}
              height={120}
              className=" object-cover"
            />
          </div>
          <div className=" flex-1 hidden lg:flex items-center justify-between gap-5 max-w-fit ">
            {navbarHeaders.map((header, index) => (
              <Link
                href={header.link}
                className={cn(
                  "font- font-[450] text-[14px] text-white tracking-wide whitespace-nowrap   leading-2 "
                )}
                key={index}
              >
                {header.name}
              </Link>
            ))}
          </div>
          <div className="flex ">
            <div className="hidden sm:flex items-center gap-5">
              <Button className=" bg-transparent hover:bg-transparent border-accent_purple w-[80px] border-2 rounded-none rounded-tl-[8px] rounded-br-[8px] uppercase text-white font-medium text-sm ">
                Login
              </Button>
              <Button
              className=" bg-accent_purple hover:bg-accent_purple w-[80px] border-none rounded-none rounded-tl-[8px] rounded-br-[8px] uppercase text-white font-medium text-sm "
              >Register</Button>
            </div>
          </div>
        </nav>
        <SheetOverlay className="fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500">
          <SheetContent
            side={showSmSidebar ? "left" : "top"}
            className={` lg:hidden flex flex-col gap-5 ${
              (showSmSidebar || showMdSidebar) && "bg-overlay/50"
            }`}
          >
            <SheetHeader className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center ">
                  <SheetClose>
                    <X className="h-6 w-6 text-white" />
                  </SheetClose>
                  <Image src="/logo.svg" alt="logo" width={100} height={50} />
                </div>
                {showMdSidebar && (
                  <div className="flex items-center gap-5">
                    <Button>Login</Button>
                    <Button>Register</Button>
                  </div>
                )}
              </div>
              <div className="  bg-gradient-href-r from-home_border_gradient_color_1 href-home_border_gradient_color_2 tr w-full h-[1px]"></div>
            </SheetHeader>
            <div
              className={`flex flex-col gap-5 mt-10 ${
                showMdSidebar && " w-full text-center justify-center"
              }`}
            >
              {navbarHeaders.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className={`font-Jakarta max-w-fit text-white text-base font-[400] sm:text-xl sm:font-normal sm:leading-7 ${
                    showMdSidebar && " w-full text-center max-w-full"
                  } `}
                >
                  <SheetClose>{item.name}</SheetClose>
                </Link>
              ))}
            </div>
            {showSmSidebar && (
              <div className="flex items-center gap-4">
                <Button>Login</Button>
                <Button>Register</Button>
              </div>
            )}
          </SheetContent>
        </SheetOverlay>
      </Sheet>
    </div>
  );
};

export default Navbar;
