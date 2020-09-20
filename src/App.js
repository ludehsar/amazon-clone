import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <div className="app">
            <Header />
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
