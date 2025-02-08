import { ForgeLogo } from "@/app/components/ForgeLogo";
import { LinesBackground } from "@/app/components/LinesBackground";
import { useQuizzStore } from "@/app/store/quizz.store";
import { Outlet } from "react-router";

export const QuestionsLayout = () => {
  const isLightMode = useQuizzStore((state) => state.isLightMode);
  const bgColor = isLightMode ? "quizz_secondary" : "quizz_tertiary";

  return (
    <section className={`w-screen min-h-screen bg-${bgColor}`}>
      <LinesBackground
        className="absolute top-0 left-0 h-screen w-screen "
        color="#959EA6"
      />

      <ForgeLogo
        figureColor="#959EA6"
        linesColor="#959EA6"
        className="absolute top-5 right-5 z-20 "
      />

      <div className="z-10 grid place-items-center py-24 w-[95vw] md:w-[80vw] lg:w-[50vw] mx-auto relative">
        <Outlet />
      </div>
    </section>
  );
};
