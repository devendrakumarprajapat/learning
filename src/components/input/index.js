import React from "react";
import styles from "./style.module.css";

const Input = ({
  input_type = "text",
  input_id,
  input_name,
  input_placeholder,
  input_custom,
}) => {
  return (
    <>
      <input
        type={input_type}
        placeholder={input_placeholder}
        id={input_id}
        name={input_name}
        className={`${input_custom}`}
      />
    </>
  );
};

export default Input;
