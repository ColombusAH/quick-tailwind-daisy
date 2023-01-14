import { createContext, useContextProvider, useStore } from "@builder.io/qwik";

export const themeContext = createContext<{ theme: string }>("theme");
