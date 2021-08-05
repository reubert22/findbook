import apiClient from "../api-client";

const defaultParam = {
  key: process.env.API_KEY,
};

export const getBooks = (query: string) =>
  apiClient.get("", {
    params: {
      ...defaultParam,
      q: query,
    },
  });
