import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./loginPage/page";
import RegisterPage from "./registerPage/page";
import HomePage from "./homePage/page";
import TopUpPage from "./topUpPage/page";
import TransactionPage from "./transactionPage/page";

const rootApp = document.getElementById("root");

const route = createBrowserRouter([
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Registrasi",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Topup",
    element: <TopUpPage />,
  },
  {
    path: "/Transaction",
    element: <TransactionPage />,
  },
]);

createRoot(rootApp!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
