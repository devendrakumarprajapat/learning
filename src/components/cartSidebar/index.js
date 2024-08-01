import React, { Fragment } from "react";
import styles from "./style.module.css";
import Button from "../button";
import img1 from "../../asstes/images/product-img1.png";
import img2 from "../../asstes/images/product-img2.png";
import { Link } from "react-router-dom";

const ShoppingCardData = [
  {
    imgUrl: img1,
    title1: "Fresh Indian Orange",
    title2: "1 Kg * ",
    title3: "12.00",
  },
  {
    imgUrl: img2,
    title1: "Green Apple",
    title2: "1 Kg * ",
    title3: "14.00",
  },
  {
    imgUrl: img1,
    title1: "Fresh Indian Orange",
    title2: "1 Kg * ",
    title3: "12.00",
  },
  {
    imgUrl: img2,
    title1: "Green Apple",
    title2: "1 Kg * ",
    title3: "14.00",
  },
  {
    imgUrl: img1,
    title1: "Fresh Indian Orange",
    title2: "1 Kg * ",
    title3: "12.00",
  },
  {
    imgUrl: img2,
    title1: "Green Apple",
    title2: "1 Kg * ",
    title3: "14.00",
  },
  {
    imgUrl: img1,
    title1: "Fresh Indian Orange",
    title2: "1 Kg * ",
    title3: "12.00",
  },
  {
    imgUrl: img2,
    title1: "Green Apple",
    title2: "1 Kg * ",
    title3: "14.00",
  },
];

const CartSidebar = ({ CartBar, onClose }) => {
  return (
    <Fragment>
      <div className={`${styles.cartSidebar} ${CartBar ? styles.open : ""}`}>
        <div className={styles.cs_head}>
          <div className={styles.csh_inner}>
            <div className={styles.csh_title}>Shopping Card (2)</div>
            <button onClick={onClose} className={styles.csh_button}>
              x
            </button>
          </div>
        </div>
        <div className={styles.cs_body}>
          <div className={styles.csb_inner}>
            <div className={styles.cs_product}>
              {ShoppingCardData.map((value, index) => (
                <Link key={index} className={`${styles.products_box} `}>
                  <img src={value.imgUrl} alt="" />
                  <div className={`${styles.product_info} flex-grow-1`}>
                    <h5 className={styles.detail_1}>{value.title1}</h5>
                    <h5 className={styles.detail_2}>
                      <span>{value.title2}</span>
                      {value.title3}
                    </h5>
                  </div>
                  <div className={`${styles.close_icon}`}>
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.cs_foot}>
          <div className={styles.csf_inner}>
            <div className={styles.csf_pc}>
              <span>2 Product</span>
              <strong>$26.00</strong>
            </div>
            <div className={styles.csf_btns}>
              <Button
                title={"CheckOut"}
                lbtn_size={"lbtn_big"}
                bgColor={"green"}
              />
              <Button
                title={"Go To Cart"}
                lbtn_size={"lbtn_big"}
                bgColor={"light_gray"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.cs_overlay} ${CartBar ? styles.open : ""}`}
      ></div>
    </Fragment>
  );
};

export default CartSidebar;
