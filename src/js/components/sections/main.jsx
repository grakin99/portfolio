import React, { Suspense } from "react";
const AboutMe = React.lazy(() => import("./aboutMe"));
const ContactMe = React.lazy(() => import("./contactMe"));
const Work = React.lazy(() => import("./Work"));
export default function Main() {
  return (
    <main>
      <Suspense fallback={<div className="fallback">... Loading</div>}>
        <AboutMe />
        <ContactMe />
        <Work />
      </Suspense>
    </main>
  );
}
