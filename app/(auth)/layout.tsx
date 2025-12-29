import Navbar from "@/components/navigation/navbar";
import React, { ReactNode } from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
const Authlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="light-border background-light800_dark200 shadow-light-100_dark200 min-w-full px-4 py-10 shadow-md sm:min-w-520px sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="sapce-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            alt="devFlow logo"
            height={50}
            width={50}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default Authlayout;
