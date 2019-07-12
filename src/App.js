import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Header from './Components/header/Header'
import routes from "./routes";

function App() {
  return (
    <HashRouter>
        <Header />
       {routes}
     
    </HashRouter>
  );
}

export default App;
