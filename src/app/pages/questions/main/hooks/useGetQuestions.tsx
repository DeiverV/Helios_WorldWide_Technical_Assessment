import { quizApiImpl } from "@core/quiz-api/implementation/quiz-api-impl";
import { useQuery } from "@tanstack/react-query";

export const useGetQuestions = () => {
  return useQuery({
    queryKey: ["getQuestions"],
    queryFn: () => quizApiImpl.getQuestions(),
    refetchOnWindowFocus: false,
  });
};
