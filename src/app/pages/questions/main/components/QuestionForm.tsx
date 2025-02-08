import { useState } from "react";
import { useQuizzStore } from "@store/quizz.store";
import { IQuizQuestion } from "@core/quiz-api/interfaces/quiz-api-question.interface";
import { QuestionOption } from "./QuestionOption";
import { NextButton } from "./NextButton";

interface Props {
  questionOptions?: IQuizQuestion["answers"];
  questionId?: IQuizQuestion["id"];
}

const options = ["A", "B", "C", "D"];

export const QuestionForm = ({ questionId, questionOptions }: Props) => {
  const saveAnswer = useQuizzStore((state) => state.saveAnswer);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number | null>(
    null
  );

  const answerHandler = (index: number) => {
    setCurrentAnswerIndex(index);
  };

  return (
    <>
      <div className="grid gap-2 py-10 place-items-center w-[90%]">
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

      <NextButton
        disabled={currentAnswerIndex === null || !questionId}
        onClick={() => {
          saveAnswer({
            questionId: questionId ?? 0,
            answer: currentAnswerIndex ?? 0,
          });

          setCurrentAnswerIndex(null);
        }}
      />
    </>
  );
};
