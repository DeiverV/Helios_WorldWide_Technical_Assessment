import clsx from "clsx";
import { useMemo } from "react";
import { useQuizzStore } from "@store/quizz.store";

interface Props {
  label: string;
  answer: string;
  handler: VoidFunction;
  isActive: boolean;
}

const getStyles = (isLightMode: boolean, isActive: boolean) => {
  const buttonBaseStyles =
    "text-left group p-4 border flex items-center gap-2 w-full cursor-pointer duration-200 break-all";
  const buttonStyles = {
    light: {
      active: "bg-quizz_primary text-quizz_secondary",
      normal:
        "border-quizz_primary text-quizz_primary hover:bg-quizz_primary hover:text-quizz_secondary",
    },
    dark: {
      active: "bg-quizz_secondary text-quizz_tertiary",
      normal:
        "border-quizz_secondary text-quizz_secondary hover:bg-quizz_secondary hover:text-quizz_tertiary",
    },
  };

  const baseTagStyles =
    "w-8 h-8 aspect-square grid place-items-center rounded-full border";
  const tagStyles = {
    light: "bg-quizz_primary text-quizz_neutral_1 border-quizz_neutral_1",
    dark: "bg-quizz_secondary text-quizz_tertiary border-quizz_tertiary ",
  };

  const themeStyles = {
    tag: isLightMode ? tagStyles.light : tagStyles.dark,
    button: isLightMode ? buttonStyles.light : buttonStyles.dark,
  };

  return {
    buttonStyles: clsx(
      buttonBaseStyles,
      isActive ? themeStyles.button.active : themeStyles.button.normal
    ),
    tagStyles: clsx(baseTagStyles, themeStyles.tag),
  };
};

export const QuestionOption = ({ answer, label, handler, isActive }: Props) => {
  const isLightMode = useQuizzStore((state) => state.isLightMode);
  const { buttonStyles, tagStyles } = useMemo(
    () => getStyles(isLightMode, isActive),
    [isLightMode, isActive]
  );

  return (
    <button onClick={handler} className={buttonStyles}>
      <figure className={tagStyles}>{label}</figure>
      {answer}
    </button>
  );
};
