import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoBagRemoveOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, MenuIcon, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <SiNike className=" size-16" />
        <div className="hidden md:flex gap-4 ">
          <Link href={"/product"} className="text-[18px] font-normal">
            New & Featured
          </Link>
          <Link href={"#"} className="text-[18px] font-normal">
            Men
          </Link>
          <Link href={"#about"} className="text-[18px] font-normal">
            Women
          </Link>
          <Link href={"#"} className="text-[18px] font-normal">
            Kids
          </Link>
          <Link href={"#"} className="text-[18px] font-normal">
            Sale
          </Link>
          <Link href={"#"} className="text-[18px] font-normal">
            SNKRS
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="relative">
            <Input
              placeholder="Search Products"
              className="bg-[#f5f5f5] rounded"
            />
            <Search className="absolute right-2 top-2" />
          </div>
          <div className="  flex gap-4">
            <Button variant={"outline"} size={"icon"}>
              <Heart />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              <IoBagRemoveOutline />
            </Button>
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant={"outline"} size={"icon"} className="rounded-sm">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <SiNike className="size-16" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6">
              <Link href={"#"} className="text-[18px] font-normal">
                New & Featured
              </Link>
              <Link href={"#"} className="text-[18px] font-normal">
                Men
              </Link>
              <Link href={"#"} className="text-[18px] font-normal">
                Women
              </Link>
              <Link href={"#"} className="text-[18px] font-normal">
                Kids
              </Link>
              <Link href={"#"} className="text-[18px] font-normal">
                Sale
              </Link>
              <Link href={"#"} className="text-[18px] font-normal">
                SNKRS
              </Link>
            </div>
            <div className="mt-4">
              <div className="relative">
                <Input
                  placeholder="Search Products"
                  className="bg-[#f5f5f5] rounded"
                />
                <Search className="absolute right-2 top-2" />
              </div>
              <div className="mt-4  flex gap-3">
                <Button variant={"outline"} size={"icon"}>
                  <Heart />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                  <IoBagRemoveOutline />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
