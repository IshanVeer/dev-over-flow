import Image from "next/image";
import Link from "next/link";
import React from "react";

const hotQuestions = [
  {
    id: "1",
    label:
      "Would it be appropriate to point out an error in another paper during a referee report?",
    route: "/",
  },
  {
    id: "2",
    label: "How can an airconditioning machine exist?",
    route: "/",
  },
  {
    id: "3",
    label: "Interrogated every time crossing UK Border as citizen",
    route: "/",
  },
  {
    id: "4",
    label: "Low digit addition generator",
    route: "/",
  },
  {
    id: "5",
    label: "What is an example of 3 numbers that do not make up a vector?",
    route: "/",
  },
];

const RightSidebar = () => {
  return (
    <div className="w-[330px] max-sm:hidden background-light900_dark200 px-6 min-h-screen p-6">
      {/* hot network */}
      <div className="mt-8">
        <h2 className="h3-bold text-dark100_light900 mb-9">Hot Network</h2>
        <ul className="flex flex-col gap-8 ">
          {hotQuestions.map((question) => (
            <li key={question.id}>
              <Link
                className="flex items-start justify-between"
                href={question.route}
              >
                <p>{question.label}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="link"
                  height={20}
                  width={20}
                  className="invert-colors"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Popular Tags */}
      <div className="mt-10">
        <h2 className="h3-bold text-dark100_light900 mb-9">Popular Tags</h2>
      </div>
    </div>
  );
};

export default RightSidebar;
