import { useQuizzStore } from "@/app/store/quizz.store";
import { useGetQuestions } from "./hooks/useGetQuestions";
import { QuestionForm } from "./components/QuestionForm";

export const QuestionsPage = () => {
  const questionsQuery = useGetQuestions();

  const answers = useQuizzStore((state) => state.answers);
  const evenQuestion = answers.length % 2 === 0;

  const currentQuestion = questionsQuery.data?.data?.[answers.length];
  const textColor = evenQuestion
    ? "text-quizz_primary"
    : "text-quizz_neutral_1";

  return (
    <div className="grid place-items-center text-center">
      <h1 className={`text-6xl md:text-8xl mb-2 ${textColor}`}>Question {0}/10</h1>
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
