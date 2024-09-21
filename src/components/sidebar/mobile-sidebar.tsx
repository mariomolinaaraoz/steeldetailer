"use client";

import Image from "next/image";
import Link from "next/link";
import MenuButton from "../buttons/menuButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar/sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet >
      <SheetTrigger className="grid sm:hidden lg:hidden xl:hidden w-full h-16 flex justify-between items-center">
        <div className="pl-4 hidden justify-items-start border-b border-b-foreground/10 text-foreground sm:grid lg:hidden xl:hidden">
          <h1 className="text-xs">Mario Molina</h1>
          <h2 className="text-md">Steel Detailer</h2>
        </div>
        <MenuButton />
      </SheetTrigger>
      <SheetContent className="w-30 py-4 px-0" side="right">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className="flex items-center border-b border-b-foreground/10 py-2 pl-2 mb-14"
            >
              <div className="relative w-8 h-8 mr-2">
                <Image fill alt="Logo" src="/logo.png" />
              </div>
              <h1 className="text-xs">Steel detailer</h1>
            </Link>
          </SheetTitle>
          <SheetDescription>
            <Sidebar />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;