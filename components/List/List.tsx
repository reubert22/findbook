import React, { useState, useEffect } from "react";
import styles from "./List.module.scss";
import { Title } from "../Sections/Title/Title";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import Image from "next/image";
import { useMainContext } from "../../hooks/useMainContext";
import Link from "next/link";
import { NoImage } from "../NoImage/NoImage";
import { getBooks } from "../../api/books/service";

type ListProps = {
  search?: string;
  titleProps?: {
    title: string;
    linkTitle: string;
    link: string;
  };
};

export const List: React.FC<ListProps> = ({ titleProps, search = "" }) => {
  const [page, setPage] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const {
    books: {
      state: { items, totalItems },
      setBooks,
    },
  } = useMainContext();

  const handlePaginate = async (pageNow: number) => {
    let offset = 0;
    if (pageNow === 1) offset = 10;
    if (pageNow > 1) offset = pageNow * 10;

    try {
      if (items.length !== totalItems) {
        setActualPage(actualPage + 1);
        const response = await getBooks(
          search
            ? { title: search, offset: offset.toString() }
            : { offset: offset.toString() }
        );
        setBooks({
          items: [...items, ...response.data.items],
          totalItems: response.data.totalItems,
        });
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (totalItems) {
      const pageNumber = totalItems / 10;
      setPage(Math.ceil(pageNumber));
    }
  }, [totalItems]);

  return (
    <div className={styles["container"]}>
      {titleProps && <Title {...titleProps} />}
      <LayoutContainer>
        <div className={styles["books-list-container"]}>
          {items.map(({ volumeInfo, id }) => (
            <Link key={`book-${id}`} href={`/About?id=${id}`}>
              <div className={styles["books-container"]}>
                {volumeInfo.imageLinks ? (
                  <Image
                    className="book-list-thumb"
                    src={volumeInfo.imageLinks.thumbnail}
                    height={153}
                    width={105}
                    alt={volumeInfo.title}
                  />
                ) : (
                  <NoImage height={153} width={105} />
                )}

                <style jsx global>{`
                  .book-list-thumb {
                    border-radius: 5px;
                  }
                `}</style>
                <span className={styles["title"]}>{volumeInfo.title}</span>
                <span className={styles["author"]}>
                  {volumeInfo.authors ? `by ${volumeInfo.authors[0]}` : ""}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles["load-more-container"]}>
          {page !== actualPage && (
            <div
              onClick={() => handlePaginate(actualPage)}
              className={styles["load-more"]}
            >
              <span className={styles["title"]}>Load More</span>
            </div>
          )}
        </div>
      </LayoutContainer>
    </div>
  );
};
