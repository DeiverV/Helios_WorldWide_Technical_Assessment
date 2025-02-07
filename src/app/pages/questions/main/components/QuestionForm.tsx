import { useQuizzStore } from "@/app/store/quizz.store";
import { IQuizQuestion } from "@/core/quiz-api/interfaces/quiz-api-question.interface";
import { QuestionOption } from "./QuestionOption";

interface Props {
  questionOptions?: IQuizQuestion["answers"];
  questionId?: IQuizQuestion["id"];
}

const options = ["A", "B", "C", "D"];

export const QuestionForm = ({ questionId, questionOptions }: Props) => {
  const answers = useQuizzStore((state) => state.answers);
  const setAnswers = useQuizzStore((state) => state.setAnswers);

  const evenQuestion = true;
  const buttonColorPrimary = evenQuestion ? "quizz_primary" : "quizz_neutral_1";

  return (
    <>
      <div className="grid gap-2 py-10 place-items-center">
        {Object.values(questionOptions ?? {})
          .filter(Boolean)
          .map((answer, index) => (
            <QuestionOption
              key={index}
              answer={answer}
              label={options[index]}
            />
          ))}
      </div>

      <button
        className={`text-center px-4 py-2 w-fit bg-${buttonColorPrimary} cursor-pointer `}
        onClick={() =>
          questionId && setAnswers([...answers, { questionId, answer: "" }])
        }
      >
        Next
      </button>
    </>
  );
};
