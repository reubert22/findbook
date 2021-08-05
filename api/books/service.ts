import * as repository from "./repository";

export const getBooks = async () => {
  try {
    const response = await repository.getBooks("js");
    console.log("getBooks -> response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
