import React from "react";
import Section from "../../components/section";
import BreadCrumbs from "../../components/breadCrumb";
import breadcrumb_img from "../../asstes/images/breadcrumb-img.jpg";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../../components/filter";
import AllCategories from "../../components/allCategories";

const Shop = () => {
  return (
    <>
      <Section>
        <BreadCrumbs bgImg={breadcrumb_img} />
      </Section>

      <Section py={25}>
        <Container>
          <Row>
            <Col lg={12}>
              <Filter />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pb={30}>
        <Container>
          <Row>
            <Col lg={3}>
              <AllCategories />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Shop;
