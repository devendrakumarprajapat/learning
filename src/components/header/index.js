import React, { Fragment } from "react";
import Topbar from "./topbar";
import SearchBar from "./searchbar";
import Navbar from "./navbar";

const Header = () => {
  return (
    <Fragment>
      <Topbar />
      <SearchBar />
      <Navbar />
    </Fragment>
  );
};

export default Header;
