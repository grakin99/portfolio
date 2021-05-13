import React, { Suspense } from "react";
const AboutMe = React.lazy(() => import("./aboutMe"));
const ContactMe = React.lazy(() => import("./contactMe"));
export default function Main() {
  return (
    <main>
      <Suspense fallback={<div className="fallback">... Loading</div>}>
        <AboutMe />
        <ContactMe />
      </Suspense>
    </main>
  );
}
