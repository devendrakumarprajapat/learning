import React, { useState } from "react";
import styles from "./style.module.css";
import MenuItem from "../menuItem";
import { Col, Container, Row } from "react-bootstrap";
import CallIcon from "../../icons/callIcon";

const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    children: [
      {
        id: 11,
        title: "Home 1",
        path: "/home1",
      },
      {
        id: 12,
        title: "Home 2",
        path: "/home2",
      },
      {
        id: 13,
        title: "Home 3",
        path: "/home3",
      },
    ],
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
    children: [
      {
        id: 21,
        title: "Shop 1",
        path: "/shop1",
      },
      {
        id: 22,
        title: "Shop 2",
        path: "/shop2",
      },
      {
        id: 23,
        title: "Shop 3",
        path: "/shop3",
      },
    ],
  },
  {
    id: 3,
    title: "Categories",
    path: "/categories",
    children: [
      {
        id: 31,
        title: "Categories 1",
        path: "/categories1",
      },
      {
        id: 32,
        title: "Categories 2",
        path: "/categories2",
      },
      {
        id: 33,
        title: "Categories 3",
        path: "/categories3",
      },
    ],
  },
  {
    id: 4,
    title: "Cart",
    path: "/cart",
  },
  {
    id: 5,
    title: "CheckOut",
    path: "/checkOut",
  },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMenuItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={styles.header_navbar}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="d-flex align-items-center justify-content-between py-3">
              <div className={styles.menubar}>
                {MenuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onMenuItemClick={() => handleMenuItemClick(index)}
                  />
                ))}
              </div>
              <div className={styles.nav_callbox}>
                <span>
                  <CallIcon />
                </span>
                <span>(219) 555-0114</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
