import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: 1,
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  { _id: 2, title: "How can an airconditioning machine exist?" },
  { _id: 3, title: "Interrogated every time crossing UK Border as citizen" },
  { _id: 4, title: "Low digit addition generator" },
  {
    _id: 5,
    title: "What is an example of 3 numbers that do not make up a vector?",
  },
];
const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "react", totalQuestions: 5 },
  { _id: 3, name: "next", totalQuestions: 5 },
  { _id: 4, name: "vue", totalQuestions: 2 },
  { _id: 5, name: "redux", totalQuestions: 10 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky  right-0  top-0 flex  h-screen w-[350px]  flex-col justify-between  overflow-y-auto border-l  p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* Top Questions */}
      <div>
        <h3 className="h3-bold">Hot Network</h3>
        <div className="mt-6 flex w-full flex-col gap-8 ">
          {hotQuestions.map((question) => (
            <Link
              className="flex cursor-pointer items-start justify-between gap-7"
              href="/"
              key={question._id}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="questions"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Tags */}
      <div className="mt-16">
        <h3 className="h3-bold">Popular Tags</h3>
        <div className="mt-7 flex flex-1 flex-col gap-6">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
