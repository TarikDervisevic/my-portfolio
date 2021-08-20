import React from "react";

import classes from "./Jumbotron.module.css"

const Jumbotron = (props) => {

    return (
            <div className={classes.Jumbotron}>
                <div>I'm Tarik,</div>
                <div>
                    <span className={classes.ReactTitle}>React </span> 
                    and 
                    <span className={classes.NodeTitle}> Node </span> 
                    developer
                </div>
                <div className={classes.SubText}>
                    I'm a new full-stack developer and I design, build and deploy online apps.
                </div>
                <button className={classes.ReadMore}>Read More</button>
            </div>
    )
}

export default Jumbotron;