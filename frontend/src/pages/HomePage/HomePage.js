import React from "react";

import classes from "./HomePage.module.css"
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const HomePage = (props) => {
    return (
                <div className={classes.HomePage}>
                    <Jumbotron/>
                </div>
    )
}

export default HomePage;