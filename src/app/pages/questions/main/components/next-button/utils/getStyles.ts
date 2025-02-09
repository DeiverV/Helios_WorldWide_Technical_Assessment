import clsx from "clsx";

export const getNextButtonStyles = (
  isLightMode: boolean,
  disabled: boolean
) => {
  const baseStyles = "text-center px-4 py-2 text-xl w-fit duration-100";

  const lightStyles = {
    disabled: "bg-[#D4E0E9] text-quizz_secondary cursor-not-allowed",
    enabled:
      "bg-quizz_primary text-quizz_neutral_1 cursor-pointer hover:scale-105",
  };

  const darkStyles = {
    disabled:
      "bg-[#959EA61A] text-quizz_secondary cursor-not-allowed opacity-50",
    enabled:
      "bg-quizz_secondary text-quizz_tertiary cursor-pointer hover:scale-105",
  };

  const styles = isLightMode ? lightStyles : darkStyles;
  return clsx(baseStyles, disabled ? styles.disabled : styles.enabled);
};
