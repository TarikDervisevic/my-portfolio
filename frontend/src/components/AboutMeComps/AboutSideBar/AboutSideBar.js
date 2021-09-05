import React from "react";
import { useSelector } from "react-redux";

import Portrait from "../../../assets/images/Portrait.png"
import classes from "./AboutSideBar.module.css"

const AboutSideBar = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    return (
                <div className={
                    `${classes.AboutSideBar} ${screenSize === "large" ? classes.AboutSideBarLarge :
                        screenSize === "medium" ? classes.AboutSideBarMedium : 
                        screenSize === "small" ? classes.AboutSideBarSmall : 
                        screenSize === "extraSmall" ? classes.AboutSideBarExtraSmall : 
                        null}`
                }>
                    <img className={
                        `${classes.Portrait} ${screenSize === "large" ? classes.PortraitLarge :
                        screenSize === "medium" ? classes.PortraitMedium : 
                        screenSize === "small" ? classes.PortraitSmall : 
                        screenSize === "extraSmall" ? classes.PortraitExtraSmall : 
                        null}`
                    } src={Portrait}/>
                    {
                        screenSize === "large" ? <div className={classes.SideBarBorder}/> : 
                        screenSize === "medium" ? <div className={classes.SideBarBorder}/> : 
                        null
                    }
                </div>
    )
}

export default AboutSideBar;