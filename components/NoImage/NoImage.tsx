import React from "react";
import styles from "./NoImage.module.scss";

type NoImageProps = {
  width: number;
  height: number;
};

export const NoImage: React.FC<NoImageProps> = ({ width, height }) => (
  <div className={styles["container"]} style={{ width, height }}>
    <span>FindBook</span>
  </div>
);
