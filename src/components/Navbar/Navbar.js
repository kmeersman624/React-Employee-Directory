import React from "react";
import "./Navbar.css";
import Search from "../Search/Search.js";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Name"
          aria-label="Search"
        />
        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
        <Search />
      </form>
    </nav>
  );
}

export default Navbar;
