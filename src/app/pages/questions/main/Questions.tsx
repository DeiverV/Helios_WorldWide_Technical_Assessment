import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuizzStore } from "@store/quizz.store";
import { useGetQuestions } from "./hooks/useGetQuestions";
import { QuestionForm } from "./components/QuestionForm";
import { useShallow } from "zustand/shallow";
import { Spinner } from "@/app/components/Spinner";

export const QuestionsPage = () => {
  const navigate = useNavigate();
  const { data, isFetching, isSuccess } = useGetQuestions();
  const { answers, isLightMode } = useQuizzStore(useShallow((state) => state));

  const currentQuestion = data?.[answers.length];
  const textColor = isLightMode ? "text-quizz_primary" : "text-quizz_neutral_1";

  useEffect(() => {
    if (isSuccess && answers.length === data?.length) {
      navigate("/results");
    }
  }, [isSuccess, answers.length, data?.length, navigate]);

  return (
    <div className="grid w-full place-items-center text-center">
      {isFetching ? (
        <div className="grid gap-4 opacity-50">
          <Spinner />
          <p className={textColor}>Fetching Questions</p>
        </div>
      ) : (
        <>
          <h1 className={`text-6xl md:text-8xl mb-2 ${textColor}`}>
            Question {answers.length + 1}/10
          </h1>
          <p className={`text-2xl md:text-3xl ${textColor}`}>
            {currentQuestion?.question}
          </p>

          <QuestionForm
            questionId={currentQuestion?.id}
            questionOptions={currentQuestion?.answers}
          />
        </>
      )}
    </div>
  );
};
