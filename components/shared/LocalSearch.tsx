import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

interface Props {
  placeholder: string;
}

const LocalSearch = ({ placeholder }: Props) => {
  return (
    <div className="background-light800_darkgradient light-border-2 flex w-full gap-4 rounded-lg border px-4 py-2 dark:border-none">
      <Image
        src="/assets/icons/search.svg"
        alt="local-search"
        width={20}
        height={20}
      />
      <Input
        type="text"
        value=""
        placeholder={placeholder}
        className="no-focus paragraph-regular placeholder:paragraph-regular placeholder border-none bg-transparent px-0 shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
