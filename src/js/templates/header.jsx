import React from "react";
import Logo from "../svg/logo";
import DownArrow from "../svg/down-arrow";

export default () => {
  return (
    <header id="page">
      <div>
        <div>
          <a href="#page">
            <Logo />
          </a>
        </div>
        <nav>
          <ul className="nav-menu">
            <li>
              <a className="nav-item" href="#about">
                About me
              </a>
            </li>
            <li>
              <a className="nav-item" href="#work">
                work
              </a>
            </li>
            <li>
              <a className="nav-item" shref="#social">
                Socials
              </a>
            </li>
          </ul>
        </nav>
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
