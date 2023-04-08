import React, { createContext, useMemo, useState } from "react";
import { useReducer } from "react";


export const ThemeContext = createContext();

const initialTheme = {
  theme: "light",
};

export function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
