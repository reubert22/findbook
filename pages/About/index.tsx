import React, { useEffect, useCallback, useState } from "react";
import styles from "./About.module.scss";

import { useRouter } from "next/router";
import { getBookById } from "../../api/books/service";
import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer";
import Image from "next/image";
import { NoImage } from "../../components/NoImage/NoImage";

type BooksType = {
  volumeInfo: {
    subtitle: string;
    description: string;
    title: string;
    authors: string[];
    imageLinks: { medium: string };
  };
};

export default function About() {
  const [book, setBook] = useState<BooksType>();
  const {
    query: { id },
    back,
  } = useRouter();

  const getBook = useCallback(async (id) => {
    try {
      const response = await getBookById(id);
      setBook(response.data);
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (id) {
      getBook(id);
    }
  }, [id]);

  return (
    <div className={styles["container"]}>
      <main className={styles["main"]}>
        <div className={styles["header-bg"]}>
          <div className={styles["oval-blue"]}>
            <Image
              src={"/imgs/svg/ovalfullblue.svg"}
              height={63}
              width={63}
              alt=""
            />
          </div>
          <div className={styles["oval-pink"]}>
            <Image
              src={"/imgs/svg/ovalfullpink.svg"}
              height={15}
              width={15}
              alt=""
            />
          </div>
          <div className={styles["oval-rounded"]}>
            <Image
              src={"/imgs/svg/rounded.svg"}
              height={24}
              width={24}
              alt=""
            />
          </div>
          <div className={styles["oval-bottom"]}>
            <Image src={"/imgs/svg/oval.svg"} height={48} width={48} alt="" />
          </div>
        </div>

        <LayoutContainer>
          <div className={styles["back-container"]}>
            <div onClick={back} className={styles["img"]}>
              <Image
                src={"/imgs/svg/back.svg"}
                height={14}
                width={14}
                alt="Back"
              />
            </div>
          </div>
          <div className={styles["picture-container"]}>
            {book?.volumeInfo.imageLinks ? (
              <Image
                className="book-list-thumb"
                src={book?.volumeInfo.imageLinks.medium}
                height={book?.volumeInfo.imageLinks ? 234 : 100}
                width={151}
                alt={book?.volumeInfo.title}
              />
            ) : (
              <NoImage height={234} width={151} />
            )}

            <style jsx global>{`
              .book-list-thumb {
                border-radius: 5px;
              }
            `}</style>
          </div>
          <div className={styles["title-sub-container"]}>
            <span className={styles["title"]}>{book?.volumeInfo.title}</span>
            <span className={styles["subtitle"]}>
              {book?.volumeInfo.subtitle
                ? ` : ${book?.volumeInfo.subtitle}`
                : ""}
            </span>
          </div>
          <div className={styles["author-container"]}>
            <span className={styles["author"]}>
              {book?.volumeInfo.authors.toString()}
            </span>
          </div>
          <span className={styles["description"]}>
            {book?.volumeInfo.description.replace(/(<([^>]+)>)/gi, "")}
          </span>
        </LayoutContainer>
        <div className={styles["menu-container"]}>
          <div className={styles["menu"]}>
            <div className={styles["section"]}>
              <div title="Home" className={styles["img"]}>
                <Image
                  src="/imgs/svg/book-open.svg"
                  height={16}
                  width={16}
                  alt="Read"
                />
              </div>
              <span className={styles["title"]}>Read</span>
            </div>
            <div className={styles["divisor-right"]} />
            <div className={styles["section"]}>
              <div title="Home" className={styles["img"]}>
                <Image
                  src="/imgs/svg/headphones.svg"
                  height={16}
                  width={16}
                  alt="Listen"
                />
              </div>
              <span className={styles["title"]}>Listen</span>
            </div>
            <div className={styles["divisor-right"]} />
            <div className={styles["section"]}>
              <div title="Home" className={styles["img"]}>
                <Image
                  src="/imgs/svg/share.svg"
                  height={16}
                  width={16}
                  alt="Share"
                />
              </div>
              <span className={styles["title"]}>Share</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
