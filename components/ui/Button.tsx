import Link from "next/link";
import React from "react";

interface ButtonProps {
  isLink?: boolean;
  label: string;
  route?: string;
}

const Button = ({ isLink, label, route }: ButtonProps) => {
  const buttonClasses =
    "paragraph-semibold primary-gradient text-light-900 px-4 py-3 rounded-[8px] hover:primary-gradient-dark transition duration-150";

  return (
    <>
      {isLink && route ? (
        <Link className={buttonClasses} href={route}>
          {label}
        </Link>
      ) : (
        <button></button>
      )}
    </>
  );
};

export default Button;
