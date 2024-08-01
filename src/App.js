import "./App.css";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Categories from "./pages/categories";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkOut";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import CartSidebar from "./components/cartSidebar";
import PriceRange from "./components/priceRange";
// For Test
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="checkOut" element={<CheckOut />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
