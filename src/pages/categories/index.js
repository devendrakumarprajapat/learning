import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "../../components/sectionHeading";
import Button from "../../components/button";
import PopularCategories from "../../components/popularCategories";
import PopularProduct from "../../components/popularProduct";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


const Categories = () => {
    let prms = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [productLimit, setProductLimit] = useState(5);


    const getPopularProduct = useCallback(async (limit) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${prms.catname}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if (json.length > 0) {
                setProducts(json);
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }, [prms.catname]);

    useEffect(() => {
        getPopularProduct(productLimit);
    }, [getPopularProduct, productLimit]);

    return (
        <Section pt={50} pb={50}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={styles.heading}>
                            <SectionHeading heading={"Popular Products"} />
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

                </Row>

            </Container>
        </Section>
    )
}

export default Categories;