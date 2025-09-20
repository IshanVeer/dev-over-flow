"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {mode === "dark" ? (
          <Image
            src="/assets/icons/moon.svg"
            alt="dark"
            height={20}
            width={20}
            className="active-theme"
          />
        ) : (
          <Image
            src="/assets/icons/sun.svg"
            alt="dark"
            height={20}
            width={20}
            className="active-theme"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {themes.map((theme) => (
          <DropdownMenuItem
            className="flex items-center gap-2"
            key={theme.value}
          >
            <Image src={theme.icon} alt={theme.label} height={20} width={20} />
            {theme.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
