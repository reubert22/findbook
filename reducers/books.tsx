import { bookActionTypes } from "../constants";
import { State, Action } from "../types/books";

export const BooksInitialState: State = {
  items: [],
  totalItems: 0,
};

export const booksReducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case bookActionTypes.SET_BOOKS:
      return {
        ...prevState,
        items: action.item.items,
        totalItems: action.item.totalItems,
      };
    default:
      return BooksInitialState;
  }
};
