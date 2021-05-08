import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const Header = React.lazy(() => import("./components/sections/header"));
const Main = React.lazy(() => import("./components/sections/main"));
const Footer = React.lazy(() => import("./components/sections/footer"));

const appRender = {
  AppComponents: () => {
    return (
      <React.StrictMode>
        <Suspense fallback={<div>... Loading</div>}>
          <Header />
          <Main />
          <Footer />
        </Suspense>
      </React.StrictMode>
    );
  },
  Render: () => {
    ReactDOM.render(appRender.AppComponents(), document.querySelector("#root"));
  },
};
appRender.Render();
