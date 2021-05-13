import React, { Suspense } from "react";
const Logo = React.lazy(() => import("../svg/logo"));
export default () => {
  return (
    <header id="header">
      <div>
        <h1>Hey there, my name is Graham Kineshanko</h1>
        <p>
          I make websites! Big or small, custom wordpress or pure custom code.
        </p>
      </div>
      <Suspense fallback={<div className="fallback">... Loading</div>}>
        <Logo />
      </Suspense>
    </header>
  );
};
