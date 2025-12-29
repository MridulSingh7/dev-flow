"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const handleSignIn = async (provider: "google" | "github") => {
  try {
    await signIn(provider, {
      callbackUrl: ROUTES.HOME,
    });
  } catch (error) {
    toast.error("Sign-in failed", {
      description: error instanceof Error ? error.message : "Failed to sign-in",
    });
  }
};

const SocialAuthForm = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="github login"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Github</span>
      </Button>

      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="google login"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
