import React, { useState } from "react";
import styles from "./style.module.css";
import EyeIcon from "../../icons/eyeIcon";
import HeartIcon from "../../icons/heartIcon.js";
import CartIcon from "../../icons/smallCartIcon.js";
import { Link } from "react-router-dom";

const PopularProduct = ({ name, price, customWidth, customgap, img }) => {
  return (
    <div className={`${styles.main} ${customgap}  `}>
      <div className={styles.popular_wrapper}>
        <div className={`${styles.product_main} ${customWidth}`}>
          <Link to="#" className={styles.product_img}>
            <img src={img} alt="" className={styles.product_img} />
          </Link>
          <div className={`${styles.product_wrapper}`}>
            <div className={`${styles.product_details} text-start`}>
              <Link className={`${styles.product_name}  `}>{name}</Link>
              <h4 className={`${styles.product_price}`}>${price}</h4>
            </div>
            <Link to="#" className={`${styles.add_cart}`}>
              <CartIcon />
            </Link>
          </div>
        </div>
        <div>
          <div className={`${styles.product_feature}`}>
            <button className={`${styles.heart} ${styles.feature}`}>
              <HeartIcon />
            </button>
            <Link to="#" className={`${styles.eye} ${styles.feature}`}>
              <EyeIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
