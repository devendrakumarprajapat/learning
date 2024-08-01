import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Button = ({
  title,
  type,
  size,
  link,
  lbtn_size = "l_medium",
  align = "center",
  btn = false,
  showArrow = false,
  bgColor,
}) => {
  return (
    <div className={`${styles.Button} `}>
      {btn ? (
        <button className={`${styles[type]} ${styles[size]}  `}>{title}</button>
      ) : (
        <Link
          to={link}
          className={` ${styles.link} ${styles[lbtn_size]} ${styles[bgColor]} ${styles[align]}`}
        >
          {title}
          {showArrow && <span className={styles.arrow}></span>}
        </Link>
      )}
    </div>
  );
};

export default Button;
