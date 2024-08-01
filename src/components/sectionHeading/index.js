import React from "react";
import styles from "./style.module.css";

const SectionHeading = ({ heading, text_align = "left" }) => {
  return <h3 className={`${styles.heading} ${styles[text_align]}`}>{heading}</h3>;
};

export default SectionHeading;
