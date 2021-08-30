import React from "react";
import { useSelector } from "react-redux";

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
                    } src="https://images.unsplash.com/photo-1602514528996-27155b6b7bb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                    {
                        screenSize === "large" ? <div className={classes.SideBarBorder}/> : 
                        screenSize === "medium" ? <div className={classes.SideBarBorder}/> : 
                        null
                    }
                </div>
    )
}

export default AboutSideBar;