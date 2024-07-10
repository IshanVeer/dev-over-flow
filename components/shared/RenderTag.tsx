import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link href={name} className="flex items-center justify-between">
      <Badge className="background-light800_dark400 subtle-medium  text-light400_light500 rounded-md px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-regular text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
