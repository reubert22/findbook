import { useEffect, useCallback } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainContext } from "../hooks/useMainContext";
import { useBooks } from "../hooks/useBooks";
import { getBooks } from "../api/books/service";

function MyApp({ Component, pageProps }: AppProps) {
  const books = useBooks();

  // TODO: apply loading
  const handleGetBooks = useCallback(async () => {
    try {
      const response = await getBooks();
      books.setBooks(response.data);
    } catch (e) {}
  }, []);

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <MainContext.Provider value={{ books }}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}
export default MyApp;
