import React from "react";
import "./Navbar.css";
import Search from "../Search/Search.js";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="search-area col-4 justify-content-center">
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
