"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

const SocialAuthForms = () => {
  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1  px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      throw new Error("Not implemented");
    } catch (error) {
      console.log(error);

      toast.error("Sign In failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign in",
      });
    }
  };
  return (
    <div className="flex items-center justify-between gap-4 mt-10">
      <Button
        className={buttonClasses}
        onClick={() => {
          handleSignIn("github");
        }}
      >
        <Image
          src="/assets/icons/github.svg"
          alt="github-icon"
          height={20}
          width={20}
          className="invert-colors"
        />
        <span>Login with GitHub</span>
      </Button>
      <Button
        className={buttonClasses}
        onClick={() => {
          handleSignIn("google");
        }}
      >
        <Image
          src="/assets/icons/google.svg"
          alt="github-icon"
          height={20}
          width={20}
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForms;
