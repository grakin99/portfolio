import React from "react";
import Logo from "../svg/logo";
import DownArrow from "../svg/down-arrow";
export default function Header() {
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
              <a href="#about">
                <h1>About me</h1>
              </a>
            </li>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              <a href="#social">Socials</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="call">
        <h2>Hey there, I am Graham kineshanko. I make things for the web.</h2>
        <a href="#work">
          <DownArrow />
        </a>
      </div>
    </header>
  );
}
