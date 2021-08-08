import * as repository from "./repository";

export const getBooks = async (title?: string, author?: string) => {
  return await repository.getBooks(title ?? "node", author ?? "");
};
