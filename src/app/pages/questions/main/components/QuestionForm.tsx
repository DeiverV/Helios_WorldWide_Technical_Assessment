import { useQuizzStore } from "@/app/store/quizz.store";
import { IQuizQuestion } from "@/core/quiz-api/interfaces/quiz-api-question.interface";
import { QuestionOption } from "./QuestionOption";
import { useShallow } from "zustand/shallow";
import { useState } from "react";

interface Props {
  questionOptions?: IQuizQuestion["answers"];
  questionId?: IQuizQuestion["id"];
}

const options = ["A", "B", "C", "D"];

export const QuestionForm = ({ questionId, questionOptions }: Props) => {
  const { saveAnswer, isDarkMode } = useQuizzStore(
    useShallow((state) => state)
  );

  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number | null>(
    null
  );

  const answerHandler = (index: number) => {
    setCurrentAnswerIndex(index);
  };

  const buttonColorPrimary = isDarkMode
    ? "bg-quizz_primary text-quizz_neutral_1"
    : "bg-quizz_secondary text-quizz_tertiary";

  return (
    <>
      <div className="grid gap-2 py-10 place-items-center w-[80%]">
        {Object.values(questionOptions ?? {})
          .filter(Boolean)
          .map((answer, index) => (
            <QuestionOption
              key={index}
              handler={answerHandler.bind({}, index)}
              isActive={currentAnswerIndex === index}
              answer={answer}
              label={options[index]}
            />
          ))}
      </div>

      <button
        className={`text-center px-4 py-2 text-xl w-fit ${buttonColorPrimary} cursor-pointer hover:scale-105 duration-100`}
        disabled={currentAnswerIndex === null || !questionId}
        onClick={() => {
          saveAnswer({
            questionId: questionId ?? 0,
            answer: currentAnswerIndex ?? 0,
          });
          
          setCurrentAnswerIndex(null);
        }}
      >
        Next
      </button>
    </>
  );
};
