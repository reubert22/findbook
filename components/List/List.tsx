import React from "react";
import styles from "./List.module.scss";
import { Title } from "../Sections/Title/Title";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import Image from "next/image";
import { useMainContext } from "../../hooks/useMainContext";
import Link from "next/link";

type ListProps = {
  titleProps?: {
    title: string;
    linkTitle: string;
    link: string;
  };
};

export const List: React.FC<ListProps> = ({ titleProps }) => {
  const {
    books: {
      state: { items },
    },
  } = useMainContext();

  return (
    <div className={styles["container"]}>
      {titleProps && <Title {...titleProps} />}
      <LayoutContainer>
        <div className={styles["books-list-container"]}>
          {items.map(({ volumeInfo, id }) => {
            return (
              <Link href={`/About?id=${id}`}>
                <div key={`book-${id}`} className={styles["books-container"]}>
                  <Image
                    className="book-list-thumb"
                    src={
                      volumeInfo.imageLinks
                        ? volumeInfo.imageLinks.thumbnail
                        : "/imgs/no-image.png"
                    }
                    height={volumeInfo.imageLinks ? 153 : 100}
                    width={105}
                    alt={volumeInfo.title}
                  />

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
            );
          })}
        </div>
      </LayoutContainer>
    </div>
  );
};
