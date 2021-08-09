import { useEffect, useCallback } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { getBooks } from "../api/books/service";
import { MainContext } from "../hooks/useMainContext";
import { Splash } from "../components/Splash/Splash";
import { useBooks } from "../hooks/useBooks";
import { useLoading } from "../hooks/useLoading";

import "../index.scss";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const books = useBooks();
  const loading = useLoading();
  const { setLoading, state } = loading;

  const handleGetBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBooks();
      books.setBooks(response.data);
    } catch (e) {}
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <>
      <Head>
        <title>Find Book</title>
        <meta name="description" content="Find books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {state.loading && router.pathname === "/" ? (
        <Splash />
      ) : (
        <MainContext.Provider value={{ books, loading }}>
          <Component {...pageProps} />
        </MainContext.Provider>
      )}
      {!state.loading && router.pathname === "/" && <MenuBar />}
    </>
  );
}
export default MyApp;
