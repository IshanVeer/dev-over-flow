"use client";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";
import Theme from "./Theme";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const { mode } = useTheme();
  const pathname = usePathname();
  return (
    <div className="min-sm:hidden py-4 px-5 flex items-center justify-between background-light900_dark200">
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
          <SheetContent side="left" className="py-4 px-5">
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
            <ul className="flex flex-col gap-6 mt-16">
              {sidebarLinks.map((link) => (
                <li
                  key={link.route}
                  className={`${
                    pathname === link.route
                      ? "primary-gradient text-light-900"
                      : ""
                  } p-4 rounded-[8px]`}
                >
                  <Link href={link.route} className="flex items-center gap-4">
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      height={20}
                      width={20}
                      className={`${
                        pathname === link.route ? "" : "invert-colors"
                      }`}
                    />
                    <p className="base-semibold">{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
