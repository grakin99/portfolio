import React from "react";
import Logo from "../svg/logo";
export default function Header() {
  return (
    <header>
      <div>
        <Logo />
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
    </header>
  );
}
