import { useQuizzStore } from "@/app/store/quizz.store";
import { useGetQuestions } from "./hooks/useGetQuestions";
import { QuestionForm } from "./components/QuestionForm";
import { useShallow } from "zustand/shallow";

export const QuestionsPage = () => {
  const questionsQuery = useGetQuestions();
  const { answers, isDarkMode } = useQuizzStore(useShallow((state) => state));

  const currentQuestion = questionsQuery.data?.[answers.length];
  const textColor = isDarkMode ? "text-quizz_primary" : "text-quizz_neutral_1";

  return (
    <div className="grid place-items-center text-center">
      <h1 className={`text-6xl md:text-8xl mb-2 ${textColor}`}>
        Question {answers.length}/10
      </h1>
      <p className={`text-2xl md:text-3xl ${textColor}`}>
        {currentQuestion?.question}
      </p>

      <QuestionForm
        questionId={currentQuestion?.id}
        questionOptions={currentQuestion?.answers}
      />
    </div>
  );
};
