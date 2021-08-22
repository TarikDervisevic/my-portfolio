import React from "react";

import classes from "./AboutSideBar.module.css"

const AboutSideBar = (props) => {
    return (
                <div className={classes.AboutSideBar}>
                    <img className={classes.Portrait} src="https://images.unsplash.com/photo-1602514528996-27155b6b7bb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                    <div className={classes.SideBarBorder}/>
                </div>
    )
}

export default AboutSideBar;