import React from "react";
import styles from "./LayoutContainer.module.scss";

type LayoutContainerProps = {
  children: React.ReactNode;
};

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
}) => <div className={styles["container"]}>{children}</div>;
