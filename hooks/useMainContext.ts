import { useContext, createContext } from "react";
import { MainContextType } from "../types/context";

export const MainContext = createContext<MainContextType>({
  books: {
    state: {
      items: [],
      totalItems: 0,
    },
  },
  loading: {
    state: {
      loading: false,
    },
  },
});

export function useMainContext() {
  return useContext(MainContext);
}
