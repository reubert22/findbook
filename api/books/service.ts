import * as repository from "./repository";

export const getBooks = async ({
  title = "cigarro de palha",
  author = "",
  offset = "0",
}: {
  title?: string;
  author?: string;
  offset?: string;
}) => {
  return await repository.getBooks(title, author, offset);
};

export const getBookById = async (id: string) => {
  return await repository.getBookById(id);
};
