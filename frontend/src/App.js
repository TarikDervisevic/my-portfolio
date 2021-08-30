import React from "react"
import { Switch, Route } from "react-router-dom"
import classes from "./App.module.css";

import ScreenSizeProvider from "./components/ScreenSizeProvider/ScreenSizeProvider";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Toolbar from "./components/Toolbar/Toolbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutMe from "./pages/AboutMe/AboutMe";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <React.Fragment>
      <ScreenSizeProvider/>
      <SideDrawer/>
      <main className={classes.Content}>
        <Switch>
          <Route path="/about">
            <Toolbar btnColor="black"/>
            <AboutMe/>
          </Route>
          <Route path="/projects">
            <Toolbar btnColor="black"/>
            <ProjectPage/>
          </Route>
          <Route path="/contact">
            <Toolbar btnColor="black"/>
            <ContactPage/>
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
