import { RouterProvider } from "@/app/providers/router.provider";
import { TanstackQueryProvider } from "@/app/providers/tanstack-query.provider";

function App() {
  return (
    <TanstackQueryProvider>
      <RouterProvider />
    </TanstackQueryProvider>
  );
}

export default App;
