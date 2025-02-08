import { useGetQuestions } from "@pages/questions/main/hooks/useGetQuestions";
import { useQuizzStore } from "@store/quizz.store";
import { useShallow } from "zustand/shallow";

export const useResults = () => {
  const { data, refetch } = useGetQuestions();
  const { answers, resetAnswers } = useQuizzStore(useShallow((state) => state));

  const correctOptions = data?.map((question) => ({
    questionId: question.id,
    answer: Object.values(question.correct_answers).findIndex(
      (isCorrect) => isCorrect === "true"
    ),
  }));

  const correctAnswers = answers.filter((answer) => {
    const question = correctOptions?.find(
      (item) => item.questionId === answer.questionId
    );

    return question?.answer === answer.answer;
  });

  const restartGame = () => {
    resetAnswers();
    refetch();
  };

  return { correctAnswers, restartGame };
};
