import { StrictMode } from "react";

// React Router
import { RouterProvider } from "react-router";

// System Routes
import { router } from "./routes";

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
