import { Link } from "react-router";
import { useResults } from "./hook/useResults";

export const ResultsPage = () => {
  const { correctAnswers, restartGame } = useResults();

  return (
    <div className="flex flex-col px-10 gap-10 md:gap-5 lg:px-0 md:flex-row w-screen justify-around items-center">
      <div className="flex flex-col justify-end text-right">
        <h1 className="text-9xl md:leading-[100px] md:text-[150px] lg:text-[220px] xl:text-[280px] lg:leading-[200px]">
          BRAVO!
        </h1>
        <h2 className="text-6xl lg:text-8xl xl:text-9xl">YOU HAVE SCORED</h2>
        <Link
          to={"/welcome"}
          onClick={restartGame}
          className="underline self-end hover:scale-105 duration-200"
          viewTransition
        >
          Wanna Play Again?
        </Link>
      </div>
      <div className="w-screen md:h-screen md:w-[40vw] bg-quizz_neutral_1 grid place-items-center">
        <h1 className="text-[150px] lg:text-[250px] xl:text-[280px] text-quizz_primary">
          {correctAnswers.length}/10
        </h1>
      </div>
    </div>
  );
};
