import React from "react";
import { useSelector } from "react-redux";

import classes from "./AboutMe.module.css"
import AboutSideBar from "../../components/AboutMeComps/AboutSideBar/AboutSideBar";
import Article from "../../components/AboutMeComps/Article/Article";

const AboutMe = (props) => {
    const screenSize = useSelector(state => state.screenSize)

    return (
                <div className={classes.AboutMe}>
                    <div className={
                        `${classes.AboutMeTitle} ${screenSize === "large" ? classes.AboutMeTitleLarge :
                        screenSize === "medium" ? classes.AboutMeTitleMedium : 
                        screenSize === "small" ? classes.AboutMeTitleSmall : 
                        screenSize === "extraSmall" ? classes.AboutMeTitleExtraSmall : 
                        null}`
                    }>ABOUT ME</div>
                    <div className={
                        `${classes.AboutMeContent} ${screenSize === "large" ? classes.AboutMeContentLarge :
                        screenSize === "medium" ? classes.AboutMeContentMedium : 
                        screenSize === "small" ? classes.AboutMeContentSmall : 
                        screenSize === "extraSmall" ? classes.AboutMeContentExtraSmall : 
                        null}`
                    }>
                        <AboutSideBar/>
                        <Article/>
                    </div>
                </div>
    )
}

export default AboutMe;