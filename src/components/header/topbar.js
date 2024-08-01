import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css";
import LocationIcon from "../../icons/locationIcon";

const Topbar = () => {
  return (
    <div className={styles.header_topbar}>
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <div className={styles.topbar_address}>
              <span className={styles.location_icon}>
                <LocationIcon />
              </span>
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.ht_ls}>
              <Link to={"#"}>Sign In</Link>
              <span>/</span>
              <Link to={"#"}>Sign Up</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
