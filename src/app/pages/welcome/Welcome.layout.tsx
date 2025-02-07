import { LinesBackground } from "@/app/components/LinesBackground";
import { Outlet } from "react-router";

export const WelcomeLayout = () => {
  return (
    <section className="w-screen h-screen grid place-items-center bg-quizz_primary">
      <LinesBackground className="absolute top-0 left-0 h-screen w-screen opacity-60" />
      <div className="z-10">
        <Outlet />
      </div>
    </section>
  );
};
