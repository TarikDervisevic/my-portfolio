import React from "react";

import classes from "./AboutMe.module.css"

const AboutMe = (props) => {
    return (
                <div className={classes.AboutMe}>
                    <h1 className={classes.AboutMeTitle}>About Me</h1>
                    <div className={classes.AboutMeContent}>
                        <SideBar/>
                        <AboutMeArticle/>
                    </div>
                </div>
    )
}

export default AboutMe;