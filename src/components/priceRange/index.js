import React from "react";
import styles from "./style.module.css";
import Input from "../input";

const PriceRange = () => {
  return (
    <div>
      <div className={styles.checkbox}>
        <Input input_type="checkbox" input_name={"checkbox"} input_id="one" />
        <label htmlFor="one" className={styles.label}>
          price:
          <span>50 - 200</span>
        </label>
      </div>
      <div className={styles.checkbox}>
        <Input input_type="checkbox" input_name={"checkbox"} input_id={"two"} />
        <label htmlFor="two" className={styles.label}>
          price: <span>200 - 500</span>
        </label>
      </div>
      <div className={styles.checkbox}>
        <Input
          input_type="checkbox"
          input_name={"checkbox"}
          input_id={"three"}
        />
        <label htmlFor="three" className={styles.label}>
          price: <span>500 - 1000</span>
        </label>
      </div>
      <div className={styles.checkbox}>
        <Input input_type="checkbox" input_name={"checkbox"} input_id={"for"} />
        <label htmlFor="for" className={styles.label}>
          price: <span>1000 - 2000</span>
        </label>
      </div>
    </div>
  );
};

export default PriceRange;
