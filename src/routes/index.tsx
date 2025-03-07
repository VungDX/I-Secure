import { BrowserRouter, Route, Routes as RRDRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import { flatRoutes } from "./routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <RRDRoutes>
        <Route
          element={
            <ProtectedRoute isPrivate={false} redirectTo="/dashboard/company" />
          }
        >
          {flatRoutes
            .filter((item) => !item.isPrivate)
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Route>
        <Route
          element={<ProtectedRoute isPrivate={true} redirectTo="/login" />}
        >
          <Route element={<MainLayout />}>
            {flatRoutes
              .filter((item) => item.isPrivate)
              .map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
          </Route>
        </Route>
      </RRDRoutes>
    </BrowserRouter>
  );
};

export default Routes;
