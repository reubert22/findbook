import React from "react";
import styles from "./Reading.module.scss";
import { Title } from "../Title/Title";
import Image from "next/image";

export const Reading = () => {
  return (
    <div className={styles["container"]}>
      <Title title="Currently Reading" linkTitle="All" link="/#" />

      <div className={styles["reading-container"]}>
        <div className={styles["img"]}>
          <Image
            src="http://books.google.com/books/content?id=5unrAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            height={136}
            width={91}
            alt="Home"
          />
        </div>
        <div className={styles["reading"]}></div>
      </div>
    </div>
  );
};
