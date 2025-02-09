import { fireEvent, render, screen } from "@testing-library/react";
import { QuestionOption } from "../QuestionOption";
import { vi } from "vitest";
import { useQuizzStore } from "@/app/store/quizz.store";

vi.mock("@store/quizz.store", () => ({
  useQuizzStore: vi.fn(),
}));

describe("QuestionOption", () => {
  it("Should render label and answer correctly", () => {
    render(
      <QuestionOption
        answer="Answer"
        label="Label"
        handler={() => {}}
        isActive={false}
      />
    );

    const label = screen.getByText("Label");
    const answer = screen.getByText("Answer");

    expect(label).toBeDefined();
    expect(answer).toBeDefined();
  });

  it("Should call handler when button is clicked", () => {
    const handler = vi.fn();
    render(
      <QuestionOption
        answer="Answer"
        label="Label"
        handler={handler}
        isActive={false}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handler).toHaveBeenCalledTimes(1);
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

    render(
      <QuestionOption
        answer="Answer"
        label="Label"
        handler={() => {}}
        isActive={false}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-quizz_primary");
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

    render(
      <QuestionOption
        answer="Answer"
        label="Label"
        handler={() => {}}
        isActive={false}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-quizz_secondary");
  });
});
