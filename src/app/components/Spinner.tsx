export const Spinner = () => {
  return (
    <div className="flex gap-2 justify-center items-center bg-transparent ">
      <div className="h-8 w-8 bg-quizz_primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-quizz_primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-quizz_primary rounded-full animate-bounce"></div>
    </div>
  );
};
