import { Link, useNavigate } from "react-router";
import { Arrow } from "@/app/components/Arrow";
import { ForgeLogo } from "@/app/components/ForgeLogo";
import { questionsRoutes } from "@pages/questions/routes/questions.routes";
import { useEffect } from "react";
import { useQuizzStore } from "@/app/store/quizz.store";
import { useGetQuestions } from "../../questions/main/hooks/useGetQuestions";

export const WelcomePage = () => {
  const { data, isSuccess } = useGetQuestions();
  const answers = useQuizzStore((state) => state.answers);
  const navigate = useNavigate();

  useEffect(() => {
    if (answers.length > 0) {
      navigate("/questions");
    }
  }, [isSuccess, answers.length, data?.length, navigate]);

  return (
    <div className="flex flex-col gap-10 items-end">
      <div className="flex flex-col items-end">
        <h1 className="text-9xl lg:text-[280px] text-quizz_neutral_1 leading-[200px]">
          QUIZZLER
        </h1>
        <figure className="flex gap-4">
          <p>BY:</p>
          <ForgeLogo
            figureColor="transparent"
            linesColor="var(--neutral_1)"
            textColor="var(--neutral_1)"
          />
        </figure>
      </div>

      <Link
        to={questionsRoutes.path ?? ""}
        className="flex gap-2 items-center justify-center hover:scale-105 duration-200"
        viewTransition
      >
        <p className="text-2xl">Let's start the quiz</p>
        <Arrow className="size-8 fill-quizz_neutral_1" />
      </Link>
    </div>
  );
};
