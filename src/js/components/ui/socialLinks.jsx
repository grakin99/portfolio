import React from "react";
import Github from "../svg/github";
import MailOutline from "../svg/mail-outline";
export default function Socials() {
  return (
    <ul className="socialLinks">
      <li>
        <Github />
      </li>
      <li>
        <MailOutline />
      </li>
    </ul>
  );
}
