import { LinesBackground } from "@/app/components/LinesBackground";
import { useQuizzStore } from "@/app/store/quizz.store";
import { Outlet } from "react-router";

export const QuestionsLayout = () => {
  const isLightMode = useQuizzStore((state) => state.isLightMode);
  const bgColor = isLightMode ? "quizz_secondary" : "quizz_tertiary";

  return (
    <section className={`w-screen min-h-screen bg-${bgColor}`}>
      <p className="absolute top-5 left-5 text-[10px]">By: Deiber Verano</p>

      <LinesBackground
        className="absolute top-0 left-0 h-screen w-screen "
        color="#959EA6"
      />

      <div className="z-10 grid place-items-center py-24 w-[95vw] md:w-[65vw] xl:w-[35vw] mx-auto relative">
        <Outlet />
      </div>
    </section>
  );
};
