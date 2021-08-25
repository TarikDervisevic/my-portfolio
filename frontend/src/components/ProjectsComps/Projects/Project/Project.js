import React from "react";

import classes from "./Project.module.css"

const Project = (props) => {
    return (
                <div className={classes.Project}>
                    <div className={classes.ProjectImgContainer}>
                        <img className={classes.ProjectImg} src="https://images.unsplash.com/photo-1602514528996-27155b6b7bb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                    </div>
                    <div className={classes.ProjectDesc}>
                        <div className={classes.ProjectTitle}>Project Name</div>
                        <div className={classes.ProjectDescText}>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur</div>
                        <button className={classes.VisitSiteButton}>Visit Site</button>
                    </div>
                </div>
    )
}

export default Project;