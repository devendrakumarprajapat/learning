import React, { Fragment, useState } from "react";
import styles from "./style.module.css";
import CartIcon from "../../icons/cartIcon";
import CartSidebar from "../cartSidebar";

const HeaderCart = () => {
  const [cartBar, setCartBar] = useState(false);

  const handleCartBarOpen = () => {
    setCartBar(true);
  };

  const handleCartBarClose = () => {
    setCartBar(false);
  };

  return (
    <Fragment>
      <button className={styles.btn} onClick={handleCartBarOpen}>
        <div className={styles.cart_icon}>
          <span>2</span>
          <CartIcon />
        </div>
        <div className={styles.cart_details}>
          <div className={styles.cd_title}>Shopping cart</div>
          <div className={styles.cd_amt}>$57.00</div>
        </div>
      </button>
      {cartBar ? (
        <CartSidebar CartBar={cartBar} onClose={handleCartBarClose} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default HeaderCart;
