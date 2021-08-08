import React from "react";
import styles from "./Home.module.scss";
import { Discover } from "../Sections/Discover/Discover";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import { Reviews } from "../Sections/Reviews/Reviews";
import { Reading } from "../Sections/Reading/Reading";
import { List } from "../List/List";

export const Home = () => {
  return (
    <div className={styles["container"]}>
      <LayoutContainer>
        <div className={styles["greetings"]}>
          <span className={styles["hi"]}>Hi, </span>
          <span className={styles["name"]}>Mehmed Al Fatih 👋</span>
        </div>
      </LayoutContainer>

      <Discover />
      <Reading />
      <Reviews />
      <List
        titleProps={{
          title: "You may be interested",
          linkTitle: "All",
          link: "/#",
        }}
      />
    </div>
  );
};
