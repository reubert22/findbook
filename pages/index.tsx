import React from "react";
import { Search } from "../components/Search/Search";
import styles from "./Initial.module.scss";
import { Home } from "../components/Home/Home";
import { Reading } from "../components/Sections/Reading/Reading";

const Initial = () => (
  <div className={styles["container"]}>
    <main className={styles["main"]}>
      <Search />

      <Home />
      <Reading />
    </main>
  </div>
);

export default Initial;
