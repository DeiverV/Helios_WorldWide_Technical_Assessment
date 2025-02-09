import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { QuestionForm } from "../QuestionForm";
import { useQuizzStore } from "@store/quizz.store";
import { IQuizQuestion } from "@core/quiz-api/interfaces/quiz-api-question.interface";

vi.mock("@store/quizz.store", () => ({
  useQuizzStore: vi.fn(),
}));

const mockQuestionOptions: IQuizQuestion["answers"] = {
  answer_a: "Answer A",
  answer_b: "Answer B",
  answer_c: "Answer C",
  answer_d: "Answer D",
  answer_e: null,
  answer_f: null,
};

describe("QuestionForm", () => {
  it("Should render the question options", () => {
    render(
      <QuestionForm questionId={1} questionOptions={mockQuestionOptions} />
    );

    expect(screen.getByText("Answer A")).toBeInTheDocument();
    expect(screen.getByText("Answer B")).toBeInTheDocument();
    expect(screen.getByText("Answer C")).toBeInTheDocument();
    expect(screen.getByText("Answer D")).toBeInTheDocument();
  });

  it("Should set the selected option as active", () => {
    vi.mocked(useQuizzStore).mockImplementation((selector) =>
      selector({
        isLightMode: true,
        answers: [],
        resetAnswers: () => {},
        saveAnswer: () => {},
      })
    );

    render(
      <QuestionForm questionId={1} questionOptions={mockQuestionOptions} />
    );

    const optionA = screen.getByText("Answer A");
    fireEvent.click(optionA);

    expect(optionA).toHaveClass("bg-quizz_primary");
  });

  it("Should disable the 'Next' button when no option is selected", () => {
    render(
      <QuestionForm questionId={1} questionOptions={mockQuestionOptions} />
    );

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("Should enable the 'Next' button when an option is selected", () => {
    render(
      <QuestionForm questionId={1} questionOptions={mockQuestionOptions} />
    );

    const optionA = screen.getByText("Answer A");
    fireEvent.click(optionA);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeEnabled();
  });

  it("Should call saveAnswer when 'Next' is clicked", () => {
    const saveAnswerMock = vi.fn();
    vi.mocked(useQuizzStore).mockImplementation((selector) =>
      selector({
        isLightMode: true,
        answers: [],
        resetAnswers: () => {},
        saveAnswer: saveAnswerMock,
      })
    );

    render(
      <QuestionForm questionId={1} questionOptions={mockQuestionOptions} />
    );

    const optionA = screen.getByText("Answer A");
    fireEvent.click(optionA);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(saveAnswerMock).toHaveBeenCalledWith({
      questionId: 1,
      answer: 0,
    });
  });

  it("Should reset the selected option when 'Next' is clicked", () => {
    const saveAnswerMock = vi.fn();
    vi.mocked(useQuizzStore).mockImplementation((selector) =>
      selector({
        isLightMode: true,
        answers: [],
        resetAnswers: () => {},
        saveAnswer: saveAnswerMock,
      })
    );

    render(
      <QuestionForm questionId={1} questionOptions={mockQuestionOptions} />
    );

    const optionA = screen.getByText("Answer A");
    fireEvent.click(optionA);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(screen.getByText("Answer A")).not.toHaveClass("bg-quizz_primary");
  });
});
