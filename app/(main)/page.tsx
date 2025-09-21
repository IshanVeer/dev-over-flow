import connectToDatabase from "@/lib/mongoose";

export default function Home() {
  connectToDatabase();
  return <div className="font-grotesk w-full">hello world</div>;
}
