import React, { useCallback, useEffect, useState } from "react";
import styles from "./Discover.module.scss";
import Image from "next/image";
import { Title } from "../Title/Title";
import { getBooks } from "../../../api/books/service";

type BooksType = {
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: { thumbnail: string };
  };
};

//TODO:
export const Discover = () => {
  const [books, setBooks] = useState<BooksType[]>([]);
  console.log("Discover -> books", books);

  const getBook = useCallback(async (title: string, author: string) => {
    try {
      const {
        data: { items },
      } = await getBooks(title, author);
      if (items.length > 0) {
        console.log(">>>>>>>>", [...books, items[0]]);
        setBooks([...books, items[0]]);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    getBook("Hooked", "Nir Eyal");
    getBook("The One Thing", "Garry Keller");
  }, []);

  return (
    <div className={styles["container"]}>
      <Title title="Discover new book" linkTitle="More" link="/#" />

      <div className={styles["slider-container"]}>
        {books.map((item) => (
          <div className={styles["card-container"]}>
            <div className={styles["title-author-read-container"]}>
              <div className={styles["title-author-container"]}>
                <span className={styles["title"]}>
                  {item.volumeInfo.title}ㅤㅤ
                </span>
                <span className={styles["author"]}>
                  {item.volumeInfo?.authors.toString()}
                </span>
              </div>
              <div className={styles["read-container"]}>
                <div className={styles["img"]}>
                  <Image
                    src="/imgs/svg/graph.svg"
                    height={17}
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
                  src={
                    item.volumeInfo.imageLinks
                      ? item.volumeInfo.imageLinks.thumbnail
                      : "/imgs/no-image.png"
                  }
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
        ))}
      </div>
    </div>
  );
};
