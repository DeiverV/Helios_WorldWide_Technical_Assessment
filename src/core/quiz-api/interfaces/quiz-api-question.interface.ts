export type IQuizQuestionResponse = IQuizQuestion[];

export interface IQuizQuestion {
  id: number;
  question: string;
  description: string;
  answers: IAnswers;
  multiple_correct_answers: string;
  correct_answers: ICorrectAnswers;
  explanation: string;
  tip: null;
  tags: ITag[];
  category: string;
  difficulty: string;
}

interface ITag {
  name: string;
}

interface IAnswers {
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  answer_f: string | null;
}

interface ICorrectAnswers {
  answer_a_correct: string | null;
  answer_b_correct: string | null;
  answer_c_correct: string | null;
  answer_d_correct: string | null;
  answer_e_correct: string | null;
  answer_f_correct: string | null;
}
