"use client";
import Image from "next/image";
import React from "react";
import GlobalSearch from "../GlobalSearch";
import Theme from "./Theme";
import { useTheme } from "@/context/ThemeProvider";

const Navbar = () => {
  const { mode } = useTheme();
  return (
    <div className="max-sm:hidden flex items-center justify-between py-6 pr-14 pl-6 background-light900_dark200">
      {/* logo */}
      <div>
        {mode === "dark" ? (
          <Image
            src="/assets/images/logo-dark.svg"
            alt="logo-light"
            height={185}
            width={185}
            className="text-primary-500"
          />
        ) : (
          <Image
            src="/assets/images/logo-light.svg"
            alt="logo-light"
            height={185}
            width={185}
          />
        )}
      </div>
      {/* global search */}
      <GlobalSearch />

      {/* theme and avatar */}
      <div>
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;
