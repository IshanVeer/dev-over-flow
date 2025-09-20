import LeftSidebar from "@/components/shared/LeftSidebar";
import MobileNav from "@/components/shared/navbar/MobileNav";
import Navbar from "@/components/shared/navbar/Navbar";
import RightSidebar from "@/components/shared/RightSidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <MobileNav />
      <section className="flex justify-between">
        <LeftSidebar />
        <div>{children}</div>
        <RightSidebar />
      </section>
    </main>
  );
};

export default MainLayout;
