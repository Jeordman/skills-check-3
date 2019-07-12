import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Wizard from "./Components/wizard/Wizard";
import Step2 from './Components/wizard/Step2'
import Step3 from './Components/wizard/Step3'

export default (
  <Switch>
    <Route exact path = '/step3' component={Step3} />
    <Route exact path='/step2' component={Step2} />
    <Route exact path="/Wizard" component={Wizard} />
    <Route exact path="/" component={Dashboard} />
  </Switch>
);
