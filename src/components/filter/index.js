import React from "react";
import { Button, Col } from "react-bootstrap";
import styles from "./style.module.css";
import Select from "../select";
import FilterIcon from "../../icons/filterIcon";

const Filter = () => {
  return (
    <div className={`d-flex  align-items-center ${styles.filterContainer}`}>
      <Col lg={3}>
        <button className={styles.filterButton} variant="success">
          <span>Filter</span>
          <FilterIcon />
        </button>
      </Col>
      <Col lg={6}>
        <div className="d-flex justify-content-start align-items-center">
          <span className={styles.sortLabel}>Sort by:</span>
          <Select
            option1={"Latest"}
            option2={"Oldest"}
            option3={"Price: Low to High"}
            option4={"Price: High to Low"}
          />
        </div>
      </Col>
      <Col lg={3}>
        <span
          className={`d-flex justify-content-end align-items-center ${styles.resultsCount}`}
        >
          <span>52</span> Results Found
        </span>
      </Col>
    </div>
  );
};

export default Filter;
