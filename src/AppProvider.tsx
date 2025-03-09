import React, { useState } from "react";
import AppContext from "./contexts/AppContext";

interface MyComponentProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;