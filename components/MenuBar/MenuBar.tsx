import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./MenuBar.module.scss";

export const MenuBar = () => {
  return (
    <div className={styles["container"]}>
      <Link href="/">
        <div className={styles["section"]}>
          <div title="Home" className={styles["img"]}>
            <Image src="/imgs/svg/home.svg" height={17} width={16} alt="Home" />
          </div>
          <span>Home</span>
        </div>
      </Link>
      <Link href="/#">
        <div title="Libraries" className={styles["section"]}>
          <div className={styles["img"]}>
            <Image
              src="/imgs/svg/book.svg"
              height={17}
              width={16}
              alt="Libraries"
            />
          </div>
          <span>Libraries</span>
        </div>
      </Link>
      <Link href="/#">
        <div title="Profile" className={styles["section"]}>
          <div className={styles["img"]}>
            <Image
              src="/imgs/svg/user.svg"
              height={17}
              width={16}
              alt="Profile"
            />
          </div>
          <span>Profile</span>
        </div>
      </Link>
    </div>
  );
};
