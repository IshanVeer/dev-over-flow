import React from "react";

import SocialAuthForms from "@/components/forms/SocialAuthForms";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full px-4 py-10 flex items-center justify-center min-h-screen bg-[url(/assets/images/auth-light.png)] dark:bg-[url(/assets/images/auth-dark.png)] bg-cover bg-no-repeat">
      <section className="min-w-[520px] background-light800_dark200 px-8 py-10">
        {children}

        <SocialAuthForms />
      </section>
    </main>
  );
};

export default AuthLayout;
