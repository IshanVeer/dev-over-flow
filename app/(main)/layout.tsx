import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/Navbar";
import RightSidebar from "@/components/shared/RightSidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="flex justify-between">
        <LeftSidebar />
        <div>{children}</div>
        <RightSidebar />
      </section>
    </main>
  );
};

export default MainLayout;
