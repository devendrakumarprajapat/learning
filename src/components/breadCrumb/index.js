import React from "react";
import styles from "./style.module.css";
import HomeIcon from "../../icons/homeIcon";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const items = [
  {
    title: <HomeIcon />,
    to: "/",
  },
  {
    title: "Category",
    to: "#",
  },
  {
    title: "Vegetables",
  },
];

const BreadCrumbs = ({ bgImg }) => {
  return (
    <div
      className={` ${bgImg ? styles.bgImage : ""}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.BreadCrumbs}>
              {items.map((value, index) => {
                return value.to ? (
                  <Link key={index} to={value.to} className={`${styles.link} `}>
                    {value.title}
                  </Link>
                ) : (
                  <div key={index} className={styles.noLink}>
                    {value.title}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadCrumbs;
