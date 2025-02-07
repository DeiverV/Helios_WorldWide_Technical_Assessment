import { IQuizQuestionResponse } from "./quiz-api-question.interface";

export interface IQuizApiRepository {
  getQuestions(): Promise<IQuizQuestionResponse>;
}
