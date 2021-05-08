import React, { Suspense } from "react";
const Github = React.lazy(() => import("../svg/github"));
const MailOutline = React.lazy(() => import("../svg/mail-outline"));
export default function Socials() {
  return (
    <ul className="socialLinks">
      <li>
        <Suspense fallback={<div>... Loading</div>}>
          {" "}
          <Github />
        </Suspense>
      </li>
      <li>
        <Suspense fallback={<div>... Loading</div>}>
          {" "}
          <MailOutline />
        </Suspense>
      </li>
    </ul>
  );
}
