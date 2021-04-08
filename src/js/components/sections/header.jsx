import React from "react";
import Logo from "../svg/logo";
import DownArrow from "../svg/down-arrow";

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
        <a href="#work">
          <DownArrow />
        </a>
      </div>
    </header>
  );
};
