import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricsProps {
  imgURL: string;
  alt: string;
  value?: string | number;
  label?: string;
  isAuthor?: boolean;
  href?: string;
  customStyles?: string;
}

const UserMetrics = ({
  imgURL,
  alt,
  value,
  label,
  isAuthor,
  href,
  customStyles,
}: MetricsProps) => {
  const userMetricContent = (
    <>
      <Image
        className="invert-colors rounded-full"
        src={imgURL}
        alt={alt}
        width={14}
        height={14}
      />
      <p className={`line-clamp-1 ${customStyles}`}>{value}</p>
      <p
        className={`small-medium line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
      >
        {label}
      </p>
    </>
  );
  if (href) {
    return (
      <Link
        className="text-dark200_light800 body-regular  flex items-center gap-1"
        href={href}
      >
        {userMetricContent}
      </Link>
    );
  }
  return (
    <div className="text-dark200_light800 body-regular  flex items-center gap-1">
      {userMetricContent}
    </div>
  );
};

export default UserMetrics;
