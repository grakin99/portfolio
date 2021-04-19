import React from "react";
import ReactDOM from "react-dom";
import Intro from "./components/pages/intro";
import Main from "./components/pages/main";
import Nav from "./components/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
if (import.meta.hot) {
  import.meta.hot.accept();
}

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Intro />
          </Route>
          <Route path="/main">
            <Nav />
            <Main />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
