"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[266px] max-sm:hidden background-light900_dark200 min-h-screen px-6">
      <ul className="flex flex-col gap-6 mt-16">
        {sidebarLinks.map((link) => (
          <li
            key={link.route}
            className={`${
              pathname === link.route ? "primary-gradient text-light-900" : ""
            } p-4 rounded-[8px] hover:bg-dark-300 transition duration-150`}
          >
            <Link href={link.route} className="flex items-center gap-4">
              <Image
                src={link.imgURL}
                alt={link.label}
                height={20}
                width={20}
                className={`${pathname === link.route ? "" : "invert-colors"}`}
              />
              <p className="base-semibold">{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
