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

        <div className={styles["reading"]}>
          <div className={styles["title-subtitles"]}>
            <div className={styles["title-author-container"]}>
              <span className={styles["title"]}>Originals</span>
              <span className={styles["author"]}>by Adam Grant</span>
            </div>
            <div className={styles["chapters-container"]}>
              <div className={styles["img"]}>
                <Image
                  src="/imgs/svg/marker.svg"
                  height={16}
                  width={16}
                  alt="Marker"
                />
              </div>
              <span className={styles["chapter"]}>
                Chapter <span className={styles["now"]}>2</span> From 9
              </span>
            </div>
          </div>

          <div className={styles["oval-wave"]}>
            <Image
              src="/imgs/svg/oval.svg"
              height={69}
              width={69}
              alt="Oval wave"
            />
          </div>
          <div className={styles["rounded"]}>
            <Image
              src="/imgs/svg/rounded.svg"
              height={69}
              width={69}
              alt="Rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
