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
      <DropdownMenuTrigger className="outline-0 focus:outline-0 cursor-pointer">
        {mode === "dark" ? (
          <Image
            src="/assets/icons/moon.svg"
            alt="dark"
            height={24}
            width={24}
            className="active-theme"
          />
        ) : (
          <Image
            src="/assets/icons/sun.svg"
            alt="dark"
            height={24}
            width={24}
            className="active-theme"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 py-2">
        {themes.map((theme) => (
          <DropdownMenuItem
            className="flex items-center gap-3"
            key={theme.value}
            onClick={() => {
              setMode(theme.value);
              if (localStorage.theme !== "system") {
                localStorage.theme = theme.value;
              } else {
                localStorage.removeItem("theme");
              }
            }}
          >
            <Image
              className={mode === theme.value ? "active-theme" : ""}
              src={theme.icon}
              alt={theme.label}
              height={20}
              width={20}
            />
            <p
              className={`${
                mode === theme.value
                  ? "text-primary-500"
                  : "text-dark100_light900"
              } body-semibold  `}
            >
              {theme.label}
            </p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
