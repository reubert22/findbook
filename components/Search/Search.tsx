import React from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";

export const Search = () => {
  return (
    <LayoutContainer>
      <div className={styles["container"]}>
        <div className={styles["img"]}>
          <Image src="/imgs/svg/search.svg" height={16} width={16} alt="Home" />
        </div>
        <input id="search" type="text" placeholder="Search book" />
      </div>
    </LayoutContainer>
  );
};
