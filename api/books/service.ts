import * as repository from "./repository";
import { useBooks } from "../../hooks/useBooks";

export const getBooks = async (query?: string) => {
  return await repository.getBooks(query ?? "js");
};
