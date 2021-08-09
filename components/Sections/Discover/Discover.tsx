import React, { useCallback, useEffect, useState } from "react";
import styles from "./Discover.module.scss";
import Image from "next/image";
import { Title } from "../Title/Title";
import { getBooks } from "../../../api/books/service";
import Link from "next/link";
import { NoImage } from "../../NoImage/NoImage";

type BooksType = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: { thumbnail: string };
  };
};

export const Discover = () => {
  const [first, setFirstBook] = useState<BooksType>();
  const [second, setSecondBook] = useState<BooksType>();

  const getBook = useCallback(async (title: string, author: string) => {
    try {
      const {
        data: { items },
      } = await getBooks({ title, author });
      if (items.length > 0) {
        title === "Hooked" ? setFirstBook(items[0]) : setSecondBook(items[0]);
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
        <Card item={first as BooksType} reads={120}></Card>
        <Card item={second as BooksType} reads={90}></Card>
      </div>
      <div className={styles["oval"]}>
        <Image
          src={"/imgs/svg/oval-discover.svg"}
          height={127}
          width={127}
          alt=""
        />
      </div>
    </div>
  );
};

const Card = ({ item, reads }: { item: BooksType; reads: number }) => {
  return item ? (
    <Link href={`/About?id=${item.id}`}>
      <div className={styles["card-container"]}>
        <div className={styles["title-author-read-container"]}>
          <div className={styles["title-author-container"]}>
            <span className={styles["title"]}>{item.volumeInfo.title}</span>
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
            <span className={styles["read-number"]}>{reads}+ </span>
            <span className={styles["title"]}> Read now</span>
          </div>
        </div>
        <div className={styles["thumb-container"]}>
          {item.volumeInfo.imageLinks ? (
            <div className={styles["img"]}>
              <Image
                className="avatar"
                src={item.volumeInfo.imageLinks.thumbnail}
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
          ) : (
            <NoImage height={109} width={73} />
          )}
        </div>
        <div className={styles["img-rounded"]}>
          <Image src={"/imgs/svg/rounded.svg"} height={18} width={18} alt="" />
        </div>
        <div className={styles["img-triangle"]}>
          <Image src={"/imgs/svg/triangle.svg"} height={28} width={32} alt="" />
        </div>
        <div className={styles["img-rectangle"]}>
          <Image
            src={"/imgs/svg/rectangle.svg"}
            height={15}
            width={46}
            alt=""
          />
        </div>
      </div>
    </Link>
  ) : null;
};
