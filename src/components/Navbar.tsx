'use client';
import { FC, useState } from 'react';
import { navbarHeaders } from '@/constants';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from './ui/sheet';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="w-full py-5">
      <Sheet>
        <nav className="max-w-[90% container mx-auto flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
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
              className="object-cover"
            />
          </div>
          <div className="hidden max-w-fit flex-1 items-center justify-between gap-5 lg:flex">
            {navbarHeaders.map((header, index) => (
              <Link
                href={header.link}
                className={cn(
                  'font- leading-2 whitespace-nowrap text-[14px] font-[500] tracking-wide text-white'
                )}
                key={index}
              >
                {header.name}
              </Link>
            ))}
          </div>
          <div className="flex">
            <div className="hidden items-center gap-5 sm:flex">
              <Button className="w-[80px] rounded-none rounded-br-[8px] rounded-tl-[8px] border-2 border-accent_purple bg-transparent text-sm font-medium uppercase text-white hover:bg-transparent">
                Login
              </Button>
              <Button className="w-[80px] rounded-none rounded-br-[8px] rounded-tl-[8px] border-none bg-accent_purple text-sm font-medium uppercase text-white hover:bg-accent_purple">
                Register
              </Button>
            </div>
          </div>
        </nav>
        <SheetOverlay className="fixed z-50 gap-4 bg-accent_purple p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out">
          <SheetContent
            side={showSmSidebar ? 'left' : 'top'}
            className={`flex flex-col gap-5 lg:hidden ${
              (showSmSidebar || showMdSidebar) && 'bg-overlay/50'
            }`}
          >
            <SheetHeader className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SheetClose>
                    <X className="h-6 w-6 text-white" />
                  </SheetClose>
                  <Image src="/logo.svg" alt="logo" width={200} height={120} />
                </div>
                {showMdSidebar && (
                  <div className="flex items-center gap-5">
                    <Button className="w-[80px] rounded-none rounded-br-[8px] rounded-tl-[8px] border-2 border-accent_purple bg-transparent text-sm font-medium uppercase text-white hover:bg-transparent">
                      Login
                    </Button>
                    <Button className="w-[80px] rounded-none rounded-br-[8px] rounded-tl-[8px] border-none bg-accent_purple text-sm font-medium uppercase text-white hover:bg-accent_purple">
                      Register
                    </Button>
                  </div>
                )}
              </div>
              <div className="bg-gradient-href-r from-home_border_gradient_color_1 href-home_border_gradient_color_2 tr h-[1px] w-full"></div>
            </SheetHeader>
            <div
              className={`mt-10 flex flex-col gap-5 ${
                showMdSidebar && 'w-full justify-center text-center'
              }`}
            >
              {navbarHeaders.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className={`max-w-fit text-base font-[400] text-white sm:text-xl sm:font-normal sm:leading-7 ${
                    showMdSidebar && 'w-full max-w-full text-center'
                  } `}
                >
                  <SheetClose>{item.name}</SheetClose>
                </Link>
              ))}
            </div>
            {showSmSidebar && (
              <div className="flex items-center gap-4">
                <Button className="w-[80px] rounded-none rounded-br-[8px] rounded-tl-[8px] border-2 border-accent_purple bg-transparent text-sm font-medium uppercase text-white hover:bg-transparent">
                  Login
                </Button>
                <Button className="w-[80px] rounded-none rounded-br-[8px] rounded-tl-[8px] border-none bg-accent_purple text-sm font-medium uppercase text-white hover:bg-accent_purple">
                  Register
                </Button>
              </div>
            )}
          </SheetContent>
        </SheetOverlay>
      </Sheet>
    </div>
  );
};

export default Navbar;
