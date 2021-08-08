import React, { useCallback, useState, useEffect } from "react";
import styles from "./Reading.module.scss";
import { Title } from "../Title/Title";
import Image from "next/image";
import { getBooks } from "../../../api/books/repository";

export const Reading = () => {
  const [reading, setReading] = useState<{
    volumeInfo: {
      title: "";
      authors: [];
      imageLinks: {
        thumbnail: "";
      };
    };
  }>();

  const getReading = useCallback(async () => {
    try {
      const {
        data: { items },
      } = await getBooks("Originals", "Adam Grant");
      if (items.length > 0) {
        setReading(items[0]);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    getReading();
  }, []);

  return (
    <div className={styles["container"]}>
      <Title title="Currently Reading" linkTitle="All" link="/#" />

      <div className={styles["reading-container"]}>
        <div className={styles["img"]}>
          <Image
            src={
              reading?.volumeInfo.imageLinks
                ? reading?.volumeInfo.imageLinks.thumbnail
                : "/imgs/no-image.png"
            }
            height={136}
            width={91}
            alt="Home"
          />
        </div>

        <div className={styles["reading"]}>
          <div className={styles["title-subtitles"]}>
            <div className={styles["title-author-container"]}>
              <span className={styles["title"]}>
                {reading?.volumeInfo.title}
              </span>
              <span className={styles["author"]}>
                by{" "}
                {reading?.volumeInfo.authors
                  ? reading?.volumeInfo.authors.toString()
                  : ""}
              </span>
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
