import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        leftsidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pt-36 max-md:pb-14 sm:px-14">
          <div>{children}</div>
        </section>
        rightSideBar
      </div>
      toaster
    </main>
  );
};

export default Layout;