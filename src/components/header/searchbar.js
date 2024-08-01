import React, { Fragment } from "react";
import styles from "./style.module.css";
import Logo from "../logo/logo";
import { Col, Container, Row } from "react-bootstrap";
import SearchInput from "../searchInput";
import HeaderCart from "../headerCart";

const SearchBar = () => {
  return (
    <div className={styles.header_searchbar}>
      <Container>
        <Row className={"align-items-center"}>
          <Col lg={3}>
            <Logo />
          </Col>
          <Col lg={6}>
            <SearchInput />
          </Col>
          <Col lg={3}>
            <div className="d-flex justify-content-end">
              <HeaderCart />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
