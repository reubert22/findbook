import React from "react";
import styles from "./Title.module.scss";
import Link from "next/link";
import { LayoutContainer } from "../../LayoutContainer/LayoutContainer";

type TitleProps = {
  title: string;
  linkTitle: string;
  link: string;
};

export const Title: React.FC<TitleProps> = ({ title, linkTitle, link }) => (
  <LayoutContainer>
    <div className={styles["container"]}>
      <span className={styles["title"]}>{title}</span>
      <Link href={link}>
        <span className={styles["more"]}>{linkTitle}</span>
      </Link>
    </div>
  </LayoutContainer>
);
