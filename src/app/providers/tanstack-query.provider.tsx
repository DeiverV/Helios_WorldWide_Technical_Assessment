import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({});

export const TanstackQueryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
