import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Wizard from "./Components/wizard/Wizard";

export default (
  <Switch>
    <Route path="/Wizard" component={Wizard} />
    <Route path="/" component={Dashboard} />
  </Switch>
);
