import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  answers: {
    questionId: number;
    answer: number;
  }[];
  isDarkMode: boolean;
};

type Actions = {
  saveAnswer: (answers: State["answers"][number]) => void;
  resetAnswers: VoidFunction;
};

type Store = State & Actions;

const quizzStore: StateCreator<Store> = (set, get) => ({
  answers: [],
  isDarkMode: false,

  saveAnswer: (answers) => {
    const newAnswers = [...get().answers, answers];
    set({ answers: newAnswers, isDarkMode: newAnswers.length % 2 !== 0 });
  },
  resetAnswers: () => set({ answers: [], isDarkMode: false }),
});

export const useQuizzStore = create<Store>()(
  persist(quizzStore, { name: "quizz-storage" })
);
