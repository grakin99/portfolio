import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
