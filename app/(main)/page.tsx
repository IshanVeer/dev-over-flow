import CustomButton from "@/components/ui/CustomButton";

import connectToDatabase from "@/lib/mongoose";

export default function Home() {
  connectToDatabase();
  return (
    <div>
      {/* title */}
      <div className="flex items-center justify-between">
        <h2 className="h1-bold text-dark100_light900">All Questions</h2>
        <CustomButton isLink label="Ask Question" route="/" />
      </div>

      {/* local search */}
      <div>
        Local search
        <div>tags</div>
      </div>
    </div>
  );
}
