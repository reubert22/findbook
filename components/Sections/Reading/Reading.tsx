import React, { useCallback, useState, useEffect } from "react";
import styles from "./Reading.module.scss";
import { Title } from "../Title/Title";
import Image from "next/image";
import { getBooks } from "../../../api/books/service";
import Link from "next/link";
import { NoImage } from "../../NoImage/NoImage";

export const Reading = () => {
  const [reading, setReading] = useState<{
    id: "";
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
      } = await getBooks({ title: "Originals", author: "Adam Grant" });
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
          {reading?.volumeInfo.imageLinks ? (
            <Image
              src={reading?.volumeInfo.imageLinks.thumbnail}
              height={136}
              width={91}
              alt="Home"
            />
          ) : (
            <NoImage height={136} width={91} />
          )}
        </div>

        <Link href={`/About?id=${reading?.id}`}>
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
          </div>
        </Link>
      </div>
    </div>
  );
};
