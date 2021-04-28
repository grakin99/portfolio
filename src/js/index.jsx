import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/sections/header";
import Main from "./components/sections/main";
import Footer from "./components/sections/footer";
function App() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
      <Footer />
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
