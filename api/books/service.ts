import * as repository from "./repository";

export const getBooks = async (title?: string, author?: string) => {
  return await repository.getBooks(title ?? "node", author ?? "");
};

export const getBookById = async (id: string) => {
  return await repository.getBookById(id);
};
