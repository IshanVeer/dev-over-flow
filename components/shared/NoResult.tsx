import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  btnText: string;
}

const NoResult = ({ title, description, btnText }: Props) => {
  return (
    <div className="my-12 flex flex-col items-center">
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result"
        width={350}
        height={350}
        className="m-auto hidden object-contain dark:block"
      />
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result"
        width={350}
        height={350}
        className="m-auto block object-contain dark:hidden"
      />
      <h2 className="h2-bold text-dark400_light800 mt-6">{title}</h2>
      <p className="text-dark400_light800 body-regular mt-4 w-96 text-center">
        {description}
      </p>
      <Link href="/ask-question" className="cursor-pointer">
        <Button className="primary-gradient hover:primary-hover-gradient mt-6 min-h-[46px] w-full px-4 py-3 text-light-850 transition duration-150">
          {btnText}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
