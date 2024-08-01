import React from "react";
import SearchIcon from "../../icons/searchIcon";
import styles from "./style.module.css";

const SearchInput = () => {
  return (
    <div className={styles.search_input}>
      <label htmlFor={`search`}>
        <SearchIcon />
      </label>
      <input type="text" placeholder="Search" id="search" />
      <button className={`${styles.submit_btn}`} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
