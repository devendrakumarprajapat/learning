import React from "react";
import styles from "./style.module.css";
import fruitImg from "../../asstes/images/food-img1.png";
import { Link } from "react-router-dom";

const PopularCategories = ({ item }) => {
  return (
    <>
      <div className={styles.ProductCategory}>
        <Link to={`/categories/${item}`} className={styles.pc_link}>
          <div className={`${styles.product_info}`}>
            <img src={fruitImg} alt="product image" />
          </div>
          <div className={`${styles.product_name}`}>{item}</div>
        </Link>
      </div>
    </>
  );
};

export default PopularCategories;
