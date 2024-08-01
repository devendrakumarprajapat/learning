import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "../../components/sectionHeading";
import Button from "../../components/button";
import PopularCategories from "../../components/popularCategories";
import PopularProduct from "../../components/popularProduct";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProductTotal, setAllProductTotal] = useState(0);
  const [productLimit, setProductLimit] = useState(5);

  const getProductCategory = useCallback(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const getAllProduct = useCallback(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProductTotal(json.length));
  }, []);


  const getPopularProduct = useCallback(async (limit) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);



  useEffect(() => {
    getProductCategory();
  }, [getProductCategory]);

  useEffect(() => {
    getAllProduct();
  }, [getAllProduct]);


  useEffect(() => {
    getPopularProduct(productLimit);
  }, [getPopularProduct, productLimit]);

  return (
    <>
      <Section pt={50}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.heading}>
                <SectionHeading heading={"Popular Categories"} />
                <Button showArrow="true" title={"View All"} align="center" />
              </div>
            </Col>
          </Row>
          <Row>
            {categories.map((item, index) => (
              <Col lg={2} key={index}>
                <PopularCategories item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section pt={50} pb={50}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.heading}>
                <SectionHeading heading={"Popular Products"} />
                <Button showArrow="true" title={"View All"} align="center" />
              </div>
            </Col>
          </Row>
          <Row>
            {products.map((item, index) => (
              <PopularProduct
                key={index}
                item={item}
                text={item.title}
                price={item.price}
                img={item.image}
              />
            ))}
            {(productLimit !== allProductTotal) && (productLimit < allProductTotal) ?
              <button
                onClick={() => {
                  setProductLimit(productLimit + 5);
                }}
              >
                Load more
              </button> : ''}
          </Row>

        </Container>
      </Section>
    </>
  );
};

export default Home;
