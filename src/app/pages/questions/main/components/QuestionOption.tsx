import { useQuizzStore } from "@/app/store/quizz.store";

interface Props {
  label: string;
  answer: string;
}

export const QuestionOption = ({ answer, label }: Props) => {
  const answers = useQuizzStore((state) => state.answers);
  const evenQuestion = answers.length % 2 === 0;

  const buttonColorPrimary = evenQuestion ? "quizz_primary" : "quizz_neutral_1";
  const buttonColorSecondary = evenQuestion
    ? "quizz_neutral_1"
    : "quizz_primary";

  return (
    <button
      className={`text-left group p-4 border border-${buttonColorPrimary} flex items-center gap-2 w-full text-${buttonColorPrimary} cursor-pointer hover:bg-${buttonColorPrimary} hover:text-${buttonColorSecondary}  duration-200`}
    >
      <figure
        className={`w-8 h-8 aspect-square grid place-items-center bg-${buttonColorPrimary} rounded-full text-${buttonColorSecondary} border border-${buttonColorSecondary}`}
      >
        {label}
      </figure>
      {answer}
    </button>
  );
};
