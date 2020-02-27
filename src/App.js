import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home"
import Login from "./containers/Login"
import Sign from "./containers/Sign"


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Sign">
        <Sign />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;