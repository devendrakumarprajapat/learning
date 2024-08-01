import React from "react";
import Input from "../input";
import styles from "./style.module.css";

const AllCategories = () => {
  return (
    <div className={styles.categories}>
      <h4>All Categories</h4>
      <div className={`${styles.radio_box}`}>
        <Input
          input_type="radio"
          input_id={"one"}
          input_name={"shree"}                                                        
          input_size={50}
        />
        <label htmlFor="one">
          Fresh Fruit (25)<span>(134)</span>
        </label>
      </div>
      <div className={`${styles.radio_box}`}>
        <Input input_type="radio" input_id={"two"} input_name={"shree"} />
        <label htmlFor="two">
          Vegetables<span>(150)</span>
        </label>
      </div>
      <div className={`${styles.radio_box}`}>
        <Input input_type="radio" input_id={"three"} input_name={"shree"} />
        <label htmlFor="three">
          Cooking<span>(54)</span>
        </label>
      </div>
      <div className={`${styles.radio_box}`}>
        <Input input_type="radio" input_id={"for"} input_name={"shree"} />
        <label htmlFor="for">
          Snacks<span>(47)</span>
        </label>
      </div>
      <div className={`${styles.radio_box}`}>
        <Input input_type="radio" input_id={"five"} input_name={"shree"} />
        <label htmlFor="five">
          Beverages<span>(43)</span>
        </label>
      </div>
      <div className={`${styles.radio_box}`}>
        <Input input_type="radio" input_id={"six"} input_name={"shree"} />
        <label htmlFor="six">
          Beauty & Health<span>(38)</span>
        </label>
      </div>
      <div className={`${styles.radio_box}`}>
        <Input input_type="radio" input_id={"seven"} input_name={"shree"} />
        <label htmlFor="seven">
          Bread & Bakery<span>(15)</span>
        </label>
      </div>
    </div>
  );
};

export default AllCategories;
