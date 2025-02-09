// NextButton.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { NextButton } from "../NextButton";
import { useQuizzStore } from "@store/quizz.store";

vi.mock("@store/quizz.store", () => ({
  useQuizzStore: vi.fn(),
}));

describe("NextButton", () => {
  it("Should render the correct label", () => {
    render(<NextButton onClick={() => {}} label="Label Next" />);
    const button = screen.getByText("Label Next");

    expect(button).toBeDefined();
  });

  it("Should be enabled when disabled prop is false", () => {
    render(<NextButton onClick={() => {}} />);
    const button = screen.getByRole("button");

    expect(button).toBeEnabled();
  });

  it("Should be disabled when disabled prop is true", () => {
    render(<NextButton onClick={() => {}} disabled={true} />);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("Should call onClick when button is clicked", () => {
    const onClickMock = vi.fn();
    render(<NextButton onClick={onClickMock} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("Should apply styles correctly when is light mode", () => {
    vi.mocked(useQuizzStore).mockImplementation((selector) =>
      selector({
        isLightMode: true,
        answers: [],
        resetAnswers: () => {},
        saveAnswer: () => {},
      })
    );

    render(<NextButton onClick={() => {}} />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-quizz_neutral_1");
  });

  it("Should apply styles correctly when is dark mode", () => {
    vi.mocked(useQuizzStore).mockImplementation((selector) =>
      selector({
        isLightMode: false,
        answers: [],
        resetAnswers: () => {},
        saveAnswer: () => {},
      })
    );

    render(<NextButton onClick={() => {}} />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-quizz_tertiary");
  });
});
