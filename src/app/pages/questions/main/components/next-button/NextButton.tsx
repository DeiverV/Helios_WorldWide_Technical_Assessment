import { useMemo } from "react";
import { getNextButtonStyles } from "./utils/getStyles";
import { useQuizzStore } from "@store/quizz.store";

interface Props {
  label?: string;
  onClick: VoidFunction;
  disabled?: boolean;
}

export const NextButton = ({
  onClick,
  disabled = false,
  label = "Next",
}: Props) => {
  const isLightMode = useQuizzStore((state) => state.isLightMode);
  const styles = useMemo(
    () => getNextButtonStyles(isLightMode, disabled),
    [isLightMode, disabled]
  );

  return (
    <button
      className={styles}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};
