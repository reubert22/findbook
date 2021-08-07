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

function MyApp({ Component, pageProps }: AppProps) {
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
        <link
          rel="preload"
          href="/fonts/FontsFree-Net-SFProDisplay-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Find Book</title>
        <meta name="description" content="Find books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {state.loading ? (
        <Splash />
      ) : (
        <MainContext.Provider value={{ books, loading }}>
          <Component {...pageProps} />
        </MainContext.Provider>
      )}
      {!state.loading && <MenuBar />}
    </>
  );
}
export default MyApp;
