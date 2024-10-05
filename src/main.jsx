import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { AuthProvider } from "./components/auth/AuthCtx";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Navigation from "./components/global/Navigation";
import App from "./App";
import QuizApp from "./routes/Quiz.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./routes/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <App />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Navigation />
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/quiz",
    element: (
      <ProtectedRoute>
        <QuizApp />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
