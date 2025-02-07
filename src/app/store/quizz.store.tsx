import { create } from "zustand";

type State = {
  answers: {
    questionId: number;
    answer: string;
  }[];
};

type Actions = {
  setAnswers: (answers: State["answers"]) => void;
};

type Store = State & Actions;

export const useQuizzStore = create<Store>((set) => ({
  answers: [],
  setAnswers: (answers) => set({ answers }),
}));
