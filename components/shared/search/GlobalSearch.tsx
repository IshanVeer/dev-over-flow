import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient light-border-2 relative flex min-h-[56px] grow items-center gap-1 rounded-xl border px-4 dark:border-none">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={20}
          height={20}
          className=""
        />
        <Input
          type="text"
          placeholder="Search Globally"
          className="paragraph-regular no-focus placeholder:paragraph-regular placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
