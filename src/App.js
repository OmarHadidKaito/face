import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./Pages/welcome/Welcome";
import Service from "./Pages/AI/AI";
import Result from "./Pages/result/Result";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Welcome} exact />
      <Route path="/services" component={Service} exact />
      <Route path="/result" component={Result} exact />
    </Switch>
  );
}

export default App;
