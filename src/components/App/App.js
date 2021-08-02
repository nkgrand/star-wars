import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./style.module.css";
import Navbar from "../Navbar";
import People from "../People";
import Planets from "../Planets";
import Starships from "../Starships";

export default function App() {
  return (
    <Router>
      <div className={style.parent}>
      <div className={style.wrapper}>
        <Navbar />
        <Switch>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
          <Route path="/">
            <People />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}
