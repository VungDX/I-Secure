// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { flatRoutes } from "./routes/routes"
import ProtectedRoute from "./routes/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute
              isPrivate={false}
              redirectTo="/dashboard/company"
            />
          }
        >
          {flatRoutes.filter((item) => !item.isPrivate).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route
          element={
            <ProtectedRoute
              isPrivate={true}
              redirectTo="/login"
            />
          }
        >
          <Route element={<MainLayout />}>
            {flatRoutes.filter((item) => item.isPrivate).map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
