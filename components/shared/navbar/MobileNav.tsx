"use client";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";
import Theme from "../Theme";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  const { mode } = useTheme();
  return (
    <div className="min-sm:hidden py-4 px-5 flex items-center justify-between background-light900_dark300">
      {mode === "dark" ? (
        <Image
          src="/assets/images/logo-dark.svg"
          alt="logo-light"
          height={120}
          width={120}
          className="text-primary-500"
        />
      ) : (
        <Image
          src="/assets/images/logo-light.svg"
          alt="logo-light"
          height={120}
          width={120}
        />
      )}
      <div className="flex items-center gap-4">
        <Theme />
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="hamburger-icon"
              height={24}
              width={24}
              className="invert-colors"
            />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
