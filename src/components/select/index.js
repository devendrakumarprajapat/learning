import React from "react";
import styles from "./style.module.css";

const Select = ({
  option1,
  option2,
  option3,
  option4,
  option5,
  select_defaultValue,
  select_custom,
}) => {
  return (
    <div className={`${styles.selector}`}>
      <select defaultValue={select_defaultValue} className={`${select_custom}`}>
        {option1 && <option value={option1}>{option1}</option>}
        {option2 && <option value={option2}>{option2}</option>}
        {option3 && <option value={option3}>{option3}</option>}
        {option4 && <option value={option4}>{option4}</option>}
        {option5 && <option value={option5}>{option5}</option>}
      </select>
    </div>
  );
};

export default Select;
