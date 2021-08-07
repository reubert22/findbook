import React from "react";
import { useMainContext } from "../../hooks/useMainContext";
import styles from "./Home.module.scss";
import { Discover } from "../Sections/Discover/Discover";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";

export const Home = () => {
  const c = useMainContext();
  console.log("Home -> c", c);
  return (
    <div className={styles["container"]}>
      <LayoutContainer>
        <div className={styles["greetings"]}>
          <span className={styles["hi"]}>Hi, </span>
          <span className={styles["name"]}>Mehmed Al Fatih 👋</span>
        </div>
      </LayoutContainer>

      <Discover />
    </div>
  );
};
