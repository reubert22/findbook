import apiClient from "../api-client";

const defaultParam = {
  key: process.env.API_KEY,
};

export const getBooks = (title: string, author?: string) =>
  apiClient.get("", {
    params: {
      ...defaultParam,
      q: `${title}+inauthor:${author}`,
      maxResults: "30",
    },
  });

export const getBookById = (id: string) => apiClient.get(id);
