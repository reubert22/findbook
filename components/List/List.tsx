import React from "react";
import styles from "./List.module.scss";
import { Title } from "../Sections/Title/Title";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import Image from "next/image";
import { useMainContext } from "../../hooks/useMainContext";
import Link from "next/link";
import { NoImage } from "../NoImage/NoImage";

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
      </LayoutContainer>
    </div>
  );
};
