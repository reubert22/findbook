import React, { useState } from "react";
import { Search } from "../components/Search/Search";
import styles from "./Initial.module.scss";
import { Home } from "../components/Home/Home";
import { getBooks } from "../api/books/service";
import { useMainContext } from "../hooks/useMainContext";
import { List } from "../components/List/List";

const Initial = () => {
  const [filter, setFilter] = useState("");
  const { books } = useMainContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      setFilter(e.target.value);
      setTimeout(async () => {
        if (e.target.value.length > 0) {
          const response = await getBooks(e.target.value);
          books.setBooks(response.data);
        }
      }, 1000);
    } catch (e) {}
  };

  return (
    <div className={styles["container"]}>
      <main className={styles["main"]}>
        <Search value={filter} onChange={handleChange} />
        {!!filter ? (
          <div className={styles["search-list-container"]}>
            <List />
          </div>
        ) : (
          <Home />
        )}
      </main>
    </div>
  );
};

export default Initial;
