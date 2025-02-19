"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants/index";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        if (link.route === "/profile") {
          return (
            <SignedIn key={link.route}>
              <SheetClose asChild key={link.route}>
                <Link
                  href={`${link.route}/${userId}`}
                  className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
                >
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={23}
                    height={23}
                    className={`${isActive ? "" : "invert-colors"}`}
                  />
                  <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                    {link.label}
                  </p>
                </Link>
              </SheetClose>
            </SignedIn>
          );
        }

        return (
          <SheetClose asChild key={link.route}>
            <Link
              href={link.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={23}
                height={23}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {link.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="hamburder icon"
          width={20}
          height={20}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="logo"
            width={23}
            height={23}
          />
          <p className="paragraph-semibold font-spaceGrotesk text-dark-100 dark:text-light-900 ">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <NavContent />
        <SignedOut>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Login</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
