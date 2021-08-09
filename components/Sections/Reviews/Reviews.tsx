import React, { useState, useEffect, useCallback } from "react";
import { Title } from "../Title/Title";
import styles from "./Reviews.module.scss";
import { LayoutContainer } from "../../LayoutContainer/LayoutContainer";
import Image from "next/image";
import { getBooks } from "../../../api/books/service";
import Link from "next/link";

export const Reviews = () => {
  const [reviewVolume, setReviewVolume] = useState<{
    id: "";
  }>();

  const getReview = useCallback(async () => {
    try {
      const {
        data: { items },
      } = await getBooks({ title: "dont make me think", author: "Steve Krug" });
      if (items.length > 0) {
        setReviewVolume(items[0]);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className={styles["container"]}>
      <Title title="Reviews of The Days" linkTitle="All Video" link="/#" />
      <LayoutContainer>
        <Link href={`/About?id=${reviewVolume?.id}`}>
          <div className={styles["review-card-container"]}>
            <div className={styles["img"]}>
              <Image
                className="review"
                src="/imgs/review.png"
                layout="fill"
                objectFit="cover"
                alt="Review"
              />
              <style jsx global>{`
                .review {
                  border-radius: 5px;
                }
              `}</style>
            </div>
          </div>
        </Link>
      </LayoutContainer>
    </div>
  );
};
