import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home"


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;