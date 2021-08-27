import React from "react";

import classes from "./Project.module.css"

const Project = (props) => {
    const openNewTab = (url) => {
        window.open(url,'_blank');
    }

    return (
                <div className={classes.Project}>
                    <div className={classes.ProjectImgContainer}>
                        <img className={classes.ProjectImg} src={props.imgURL}/>
                    </div>
                    <div className={classes.ProjectDesc}>
                        <div className={classes.ProjectTitle}>{props.name}</div>
                        <div className={classes.ProjectDescText}>{props.desc}</div>
                            <button 
                                className={classes.VisitSiteButton}
                                onClick={() => openNewTab(props.link)}>
                                    Visit Site
                                </button>
                    </div>
                </div>
    )
}

export default Project;