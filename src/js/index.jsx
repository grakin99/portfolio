import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/sections/header";
import Main from "./components/sections/main";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
// if (import.meta.hot) {
//   import.meta.hot.accept();
// }
