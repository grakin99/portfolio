import React from "react";
import Logo from "../svg/logo";
import DownArrow from "../svg/down-arrow";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header id="header">
      <div>
        <div>
          <a href="#header">
            <Logo />
          </a>
        </div>
      </div>
      <div className="call">
        <h1>Hey there, I am Graham kineshanko. I make things for the web.</h1>
        <Link to="/main">
          <DownArrow />
        </Link>
      </div>
    </header>
  );
};
