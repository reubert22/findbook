import React from "react";
import styles from "./Discover.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Title } from "../Title/Title";

//TODO:x
export const Discover = () => (
  <div className={styles["container"]}>
    <Title title="Discover new book" linkTitle="More" link="/#" />

    {/* TODO:  */}
    {/* <article className={styles["scroller"]}>
      <div className={`${styles["card"]} ${styles["one"]}`}></div>
      <div className={styles["card"]}></div>
      <div className={styles["card"]}></div>
      <div className={styles["card"]}></div>
      <div className={styles["card"]}></div>
      <div className={`${styles["card"]} ${styles["six"]}`}></div>
      <div className={styles["spacer"]}></div>
    </article> */}

    <div className={styles["slider-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["title-author-read-container"]}>
          <div className={styles["title-author-container"]}>
            <span className={styles["title"]}>Hooked</span>
            <span className={styles["author"]}>Nir Eyal</span>
          </div>
          <div className={styles["read-container"]}>
            <div className={styles["img"]}>
              <Image
                src="/imgs/svg/graph.svg"
                height={16}
                width={16}
                alt="Home"
              />
            </div>
            <span className={styles["read-number"]}>120+ </span>
            <span className={styles["title"]}> Read now</span>
          </div>
        </div>
        <div className={styles["thumb-container"]}>
          <div className={styles["img"]}>
            <Image
              className="avatar"
              src="http://books.google.com/books/content?id=5unrAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              height={109}
              width={73}
              alt="Home"
            />
            <style jsx global>{`
              .avatar {
                border-radius: 5px;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  </div>
);
