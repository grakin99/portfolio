import React from "react";

export default function Email() {
  return (
    <a href="mailto:grahamkineshanko@gmail.com" target="#">
      <p className="hidden">Email Me</p>
      <svg viewBox="0 0 512 512">
        <rect
          x="48"
          y="96"
          width="416"
          height="320"
          rx="40"
          ry="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          d="m112 160 144 112 144-112"
        />
      </svg>
    </a>
  );
}
