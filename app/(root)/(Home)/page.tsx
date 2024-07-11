import LocalSearch from "@/components/shared/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Heading and ask a question button */}
      <div className="flex items-center justify-between">
        <h1 className="h1-bold text-dark400_light900">All Questions</h1>
        <Link href="/" className="cursor-pointer">
          <Button className="primary-gradient hover:primary-hover-gradient min-h-[46px] w-full px-4 py-3 text-light-850 transition duration-150">
            Ask a Question
          </Button>
        </Link>
      </div>
      {/* Search and filter */}
      <div className="mt-8">
        <LocalSearch placeholder="Search for Questions Here..." />
      </div>
      {/* questions */}
      <div></div>
    </>
  );
}
