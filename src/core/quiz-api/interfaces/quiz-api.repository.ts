import { IQuizQuestion } from "./quiz-api-question.interface";

export interface IQuizApiRepository {
  getQuestions(): Promise<IQuizQuestion[]>;
}
