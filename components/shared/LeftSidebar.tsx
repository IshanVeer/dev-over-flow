"use client";
import { sidebarLinks } from "@/constants/constants";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky  left-0  top-0 flex  h-screen flex-col  justify-between overflow-y-auto  border-r p-6  pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] ">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4 transition duration-150 hover:rounded-lg hover:bg-primary-100 dark:hover:bg-dark-400`}
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
          );
        })}
      </div>
      <SignedIn>
        <div>
          <SignOutButton>
            <Button className="base-medium text-dark300_light900 flex w-full items-center justify-start  gap-4 text-lg transition duration-150 hover:rounded-lg hover:bg-primary-100 dark:hover:bg-dark-400">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={23}
                height={23}
              />
              <span>Logout</span>
            </Button>
          </SignOutButton>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-lg shadow-none transition duration-150 ">
              <span className="primary-text-gradient">Login</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 text-lg shadow-none transition duration-150">
              Sign Up
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
