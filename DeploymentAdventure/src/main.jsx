import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import TestPage from "./pages/testPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <TestPage />,
    path: "/testpage",
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
