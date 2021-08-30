import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Jumbotron.module.css"

const Jumbotron = (props) => {
    const dispatch = useDispatch();
    const screenSize = useSelector(state => state.screenSize);

    return (
            <div className={
                    screenSize === "large" ? `${classes.Jumbotron} ${classes.JumbotronLarge}` :
                    screenSize === "medium" ? `${classes.Jumbotron} ${classes.JumbotronMedium}` :
                    screenSize === "small" ? `${classes.Jumbotron} ${classes.JumbotronSmall}` :
                    screenSize === "extraSmall" ? `${classes.Jumbotron} ${classes.JumbotronExtraSmall}` :
                    classes.Jumbotron
                }>
                <div>I'm Tarik,</div>
                <div>
                    <span className={classes.ReactTitle}>React </span> 
                    and 
                    <span className={classes.NodeTitle}> Node </span> 
                    developer
                </div>
                <div className={
                    `${classes.SubText} ${screenSize === "large" ? classes.SubTextLarge :
                    screenSize === "medium" ? classes.SubTextMedium : 
                    screenSize === "small" ? classes.SubTextSmall : 
                    screenSize === "extraSmall" ? classes.SubTextExtraSmall : 
                    null}`
                }>
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
                        className={
                            `${classes.ReadMore} ${screenSize === "large" ? classes.ReadMoreLarge :
                            screenSize === "medium" ? classes.ReadMoreMedium :
                            screenSize === "small" ? classes.ReadMoreSmall :
                            screenSize === "extraSmall" ? classes.ReadMoreExtraSmall :
                            null}`
                        }>
                        Read More
                    </button>
                </Link>
            </div>
    )
}

export default Jumbotron;