import { useQuizzStore } from "@/app/store/quizz.store";

interface Props {
  label: string;
  answer: string;
  handler: VoidFunction;
  isActive: boolean;
}

export const QuestionOption = ({ answer, label, handler, isActive }: Props) => {
  const isDarkMode = useQuizzStore((state) => state.isDarkMode);

  const buttonStyles = {
    dark: {
      active: "bg-quizz_primary text-quizz_secondary",
      normal:
        "border-quizz_neutral_1 text-quizz_neutral_1 hover:bg-quizz_secondary hover:text-quizz_tertiary",
    },
    light: {
      active: "bg-quizz_secondary text-quizz_tertiary",
      normal:
        "border-quizz_primary text-quizz_primary hover:bg-quizz_primary hover:text-quizz_secondary",
    },
  };

  const tagPrimaryStyles =
    "bg-quizz_primary text-quizz_neutral_1 border-quizz_neutral_1 ";

  const tagSecondaryStyles =
    "bg-quizz_secondary text-quizz_tertiary border-quizz_tertiary ";

  const styles = {
    tag: isDarkMode ? tagPrimaryStyles : tagSecondaryStyles,
    button: isDarkMode ? buttonStyles.dark : buttonStyles.light,
  };

  return (
    <button
      onClick={handler}
      className={`text-left group p-4 border flex items-center gap-2 w-full cursor-pointer duration-200 ${
        styles.button
      } ${isActive && styles.button.active}  break-all`}
    >
      <figure
        className={`w-8 h-8 aspect-square grid place-items-center rounded-full border ${styles.tag}`}
      >
        {label}
      </figure>
      {answer}
    </button>
  );
};
