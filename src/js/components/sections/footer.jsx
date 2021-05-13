import React from "react";

export default function Footer() {
  const today = new Date();

  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <footer>
      <code>Graham Kineshanko | {date}</code>
      <a href="mailto:grahamkineshanko@gmail.com" target="#">
        <code> grahamkineshanko@gmail.com</code>
      </a>
      <code>Built with React</code>
    </footer>
  );
}
