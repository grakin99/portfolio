import React from "react";
import ReactDOM from "react-dom";
import Header from "./templates/header";

function App() {
    return <Header />;
}

ReactDOM.render(<App />, document.querySelector("#root"));

if (import.meta.hot) {
    import.meta.hot.accept();
}
