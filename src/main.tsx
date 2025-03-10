import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider";
import Routes from "./routes";
import "./locales/i18n";
import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
  </React.StrictMode>
);
