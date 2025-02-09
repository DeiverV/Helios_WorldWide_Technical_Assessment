import { useMemo } from "react";
import { useQuizzStore } from "@store/quizz.store";
import { getQuestionOptionStyles } from "./utils/getStyles";

interface Props {
  label: string;
  answer: string;
  handler: VoidFunction;
  isActive: boolean;
}

export const QuestionOption = ({ answer, label, handler, isActive }: Props) => {
  const isLightMode = useQuizzStore((state) => state.isLightMode);
  const { buttonStyles, tagStyles } = useMemo(
    () => getQuestionOptionStyles(isLightMode, isActive),
    [isLightMode, isActive]
  );

  return (
    <button onClick={handler} className={buttonStyles}>
      <figure className={tagStyles}>
        <h5 className="leading-none text-xl">{label}</h5>
      </figure>
      {answer}
    </button>
  );
};
