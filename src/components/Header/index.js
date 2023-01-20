import React from "react";
import "./style.css";
import { getStore } from "../../utils";
import { Link } from "react-router-dom";
const currentUser = getStore("currentUser");
export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>

        <li>
          <Link to="/">Cart</Link>
        </li>

        <li>
          <Link to="/">Welcome to {currentUser.email.split("@")[0]}</Link>
        </li>
      </ul>
    </nav>
  );
};
