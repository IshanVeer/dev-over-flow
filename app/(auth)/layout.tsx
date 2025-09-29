"use client";
import React from "react";

import SocialAuthForms from "@/components/forms/SocialAuthForms";
import { usePathname } from "next/navigation";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className="w-full px-4 py-10 flex items-center justify-center min-h-screen bg-[url(/assets/images/auth-light.png)] dark:bg-[url(/assets/images/auth-dark.png)] bg-cover bg-no-repeat">
      <section className="min-w-[520px] background-light800_dark200 px-8 py-10">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            {pathname === "/sign-in" ? (
              <h2 className="h2-bold text-dark100_light900">Sign In</h2>
            ) : (
              <h2 className="h2-bold text-dark100_light900">
                Create your account
              </h2>
            )}

            <p className="paragraph-regular text-dark500_light400">
              to continue to DevFlow
            </p>
          </div>
          <Image
            src="/assets/images/site-logo.svg"
            alt="auth-logo"
            height={50}
            width={50}
          />
        </div>
        {children}

        <SocialAuthForms />
      </section>
    </main>
  );
};

export default AuthLayout;
