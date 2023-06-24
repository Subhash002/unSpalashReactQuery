import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const getInitialDarkMode = () => {
    const preferTheme = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    return preferTheme;
  };

  const [searchTerm, setSearchTerm] = useState("Meghalaya");
  const [dark, setDark] = useState(getInitialDarkMode());
  const toggleTheme = () => {
    const newMode = !dark;
    setDark(newMode);
  };
  useEffect(() => {
    document.querySelector("body").classList.toggle("dark-theme", dark);
  }, [dark]);
  return (
    <AppContext.Provider
      value={{ toggleTheme, dark, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
