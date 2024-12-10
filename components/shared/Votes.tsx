import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props {
  showSaveButton?: boolean;
}

const Votes = ({ showSaveButton }: Props) => {
  return (
    <div className="flex gap-1.5">
      {/* upvote */}
      <div className="flex items-center">
        <Button className="p-2">
          <Image
            src="/assets/icons/upvote.svg"
            width={18}
            height={18}
            alt="upvote"
          />
        </Button>
        <div className="subtle-medium background-light700_dark300 text-dark100_light900 rounded-sm px-1.5 py-1 ">
          {0}
        </div>
      </div>
      {/* downvote */}
      <div className="flex items-center">
        <Button className="p-2">
          <Image
            src="/assets/icons/downvote.svg"
            width={18}
            height={18}
            alt="downvote"
          />
        </Button>
        <div className="subtle-medium background-light700_dark300 text-dark100_light900 rounded-sm px-1.5 py-1 ">
          {0}
        </div>
      </div>
      {/* Save */}
      {showSaveButton && (
        <Button className="p-2">
          <Image
            src="/assets/icons/star-red.svg"
            width={20}
            height={20}
            alt="save"
          />
        </Button>
      )}
    </div>
  );
};

export default Votes;
