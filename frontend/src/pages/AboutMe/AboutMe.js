import React from "react";

import classes from "./AboutMe.module.css"
import AboutSideBar from "../../components/AboutMeComps/AboutSideBar/AboutSideBar";
import Article from "../../components/AboutMeComps/Article/Article";

const AboutMe = (props) => {
    return (
                <div className={classes.AboutMe}>
                    <div className={classes.AboutMeContent}>
                        <AboutSideBar/>
                        <Article/>
                    </div>
                </div>
    )
}

export default AboutMe;