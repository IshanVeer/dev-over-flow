import LocalSearch from "@/components/shared/search/LocalSearch";
import RenderFilters from "@/components/shared/RenderFilters";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 1500000,
    views: 500552,
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "3", name: "css" },
      { _id: "4", name: "html" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "jane-smith.jpg",
    },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date("2021-09-02T10:30:00.000Z"),
  },
];
export default function Home() {
  return (
    <>
      {/* Heading and ask a question button */}
      <div className="flex items-center justify-between">
        <h1 className="h1-bold text-dark400_light900">All Questions</h1>
        <Link href="/ask-question" className="cursor-pointer">
          <Button className="primary-gradient hover:primary-hover-gradient min-h-[46px] w-full px-4 py-3 text-light-850 transition duration-150">
            Ask a Question
          </Button>
        </Link>
      </div>
      {/* Search and filter */}
      <div className="mt-8 flex items-center gap-8 max-sm:flex-col">
        <LocalSearch placeholder="Search for Questions Here..." />
        <div className="max-sm:w-full md:hidden">
          <RenderFilters filters={HomePageFilters} />
        </div>
      </div>
      {/* Home filter buttons */}
      <div className="mt-8 max-md:hidden">
        <HomeFilters />
      </div>
      {/* questions */}
      <div className="mt-8">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            btnText="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
