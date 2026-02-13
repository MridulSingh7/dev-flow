import React from "react";
import { redirect } from "next/navigation";
import QuestionForm from "@/components/forms/QuestionForm";
import { auth } from "@/auth";

const session = await auth();

const AskQuestion = async () => {
  if (!session) return redirect("/sign-in");

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};
export default AskQuestion;
