import { createContext } from "@builder.io/qwik";

export const themeContext = createContext<{ theme: string; themes: string[] }>(
  "theme"
);
