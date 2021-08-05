import { BookContextType } from "./books";
import { LoadingContextType } from "./loading";

export type MainContextType = {
  books: BookContextType;
  loading: LoadingContextType;
};
