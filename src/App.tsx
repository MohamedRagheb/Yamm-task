import { StrictMode } from "react";

// React Router
import { RouterProvider } from "react-router";

// System Routes
import { router } from "./routes";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
