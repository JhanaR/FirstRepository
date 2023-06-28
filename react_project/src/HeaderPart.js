import React from "react";
import { NavLink } from "react-router-dom";

function HeaderPart() {
  return (
    <nav>
      <h1 style={{ backgroundColor: "Blue" }}>Hello Style!</h1>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/users">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}
export default HeaderPart;
