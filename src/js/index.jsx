import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./templates/header";
import Main from "./templates/main";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

if (import.meta.hot) {
  import.meta.hot.accept();
}
