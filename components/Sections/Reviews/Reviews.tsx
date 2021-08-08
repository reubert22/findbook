import React, { useState, useEffect, useCallback } from "react";
import { Title } from "../Title/Title";
import styles from "./Reviews.module.scss";
import { LayoutContainer } from "../../LayoutContainer/LayoutContainer";
import Image from "next/image";
import { getBooks } from "../../../api/books/service";

export const Reviews = () => {
  const [reviewVolume, setReviewVolume] = useState();

  const getReview = useCallback(async () => {
    try {
      const {
        data: { items },
      } = await getBooks("dont make me think", "Steve Krug");
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
      </LayoutContainer>
    </div>
  );
};