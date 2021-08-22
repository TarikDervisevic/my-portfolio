import React from "react"
import { Switch, Route } from "react-router-dom"
import classes from "./App.module.css";

import Toolbar from "./components/Toolbar/Toolbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <React.Fragment>
      <main className={classes.Content}>
        <Switch>
          <Route path="/about">
            <Toolbar btnColor="black"/>
            <AboutMe/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
