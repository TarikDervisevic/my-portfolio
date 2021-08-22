import React from "react";

import classes from "./HomePage.module.css"
import Toolbar from "../../components/Toolbar/Toolbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const HomePage = (props) => {
    return (
                <div className={classes.HomePage}>
                    <Toolbar btnColor={"white"}/>
                    <Jumbotron/>
                </div>
    )
}

export default HomePage;