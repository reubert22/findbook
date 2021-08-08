import React from "react";
import styles from "./List.module.scss";
import { Title } from "../Sections/Title/Title";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import Image from "next/image";
import { useMainContext } from "../../hooks/useMainContext";

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
            console.log("Home -> item", volumeInfo);
            return (
              <div key={`book-${id}`} className={styles["books-container"]}>
                <Image
                  className="book-list-thumb"
                  src={volumeInfo.imageLinks.thumbnail}
                  height={153}
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
                  by {volumeInfo.authors[0]}
                </span>
              </div>
            );
          })}
        </div>
      </LayoutContainer>
    </div>
  );
};
