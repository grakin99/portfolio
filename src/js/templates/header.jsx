import React from "react";
import Logo from "../svg/logo";
export default function Header() {
    return (
        <header>
            <div>
                <Logo />
            </div>
            <ul>
                <li>Home</li>
                <li>Works</li>
                <li>About Me</li>
                <li>Contact Me</li>
            </ul>
        </header>
    );
}
