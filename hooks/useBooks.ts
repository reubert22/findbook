import { useReducer, useCallback } from "react";
import { bookActionTypes } from "../constants";
import { booksReducer, BooksInitialState } from "../reducers/books";

export const useBooks = () => {
  const [state, dispatch] = useReducer(booksReducer, BooksInitialState);

  const setBooks = useCallback(
    (item) =>
      dispatch({
        type: bookActionTypes.SET_BOOKS,
        item,
      }),
    []
  );

  return {
    state,
    setBooks,
  };
};
