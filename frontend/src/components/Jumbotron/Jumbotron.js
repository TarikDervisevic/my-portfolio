import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./Jumbotron.module.css"

const Jumbotron = (props) => {
    const dispatch = useDispatch();

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
                <Link to="/about">
                    <button 
                        onClick={() => {
                            dispatch({
                                type: "setActiveToolbarBtn",
                                payload: { 
                                    activeToolbarBtn: "about"
                                }
                            })
                        }}
                        className={classes.ReadMore}>
                        Read More
                    </button>
                </Link>
            </div>
    )
}

export default Jumbotron;