import { axiosInstanceBasic } from "@core/axios/axios-main-instance";
import { IQuizApiRepository } from "@core/quiz-api/interfaces/quiz-api.repository";

export const quizApiImpl: IQuizApiRepository = {
  async getQuestions() {
    return await axiosInstanceBasic.get("/questions", {
      params: {
        limit: 10,
      },
    });
  },
};
