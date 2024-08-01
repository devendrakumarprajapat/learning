import React from "react";
import styles from "./style.module.css";

const Section = ({ bgColor = "white", pt, pb, py, bgImg, children, op }) => {
  return (
    <div
      className={`${styles.section} ${styles[bgColor]} ${styles["pb-" + pb]} ${
        styles["pt-" + pt]
      } ${styles["py-" + py]} ${bgImg ? styles.bgImage : ""} `}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {children}
    </div>
  );
};

export default Section;
