import { createContext } from "react";

interface AppContextType {
  theme?: string;
  setTheme: (theme: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);
export default AppContext;