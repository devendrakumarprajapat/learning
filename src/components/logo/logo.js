import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../asstes/images/Logo.png";
import styles from "./style.module.css";

const Logo = ({ imgUrl = logoImg }) => {
  return (
    <div className={styles.logo}>
      <Link to={`/`}>
        <img src={imgUrl} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
