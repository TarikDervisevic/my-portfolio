import React from "react";
import { useSelector } from "react-redux";

import classes from "./Project.module.css"

const Project = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    const openNewTab = (url) => {
        window.open(url,'_blank');
    }

    return (
                <div className={
                    `${classes.Project} ${screenSize === "large" ? classes.ProjectLarge :
                    screenSize === "medium" ? classes.ProjectMedium : 
                    screenSize === "small" ? classes.ProjectSmall : 
                    screenSize === "extraSmall" ? classes.ProjectExtraSmall : 
                    null}`
                }>
                    <div className={
                        `${classes.ProjectImgContainer} ${screenSize === "large" ? classes.ProjectImgContainerLarge :
                        screenSize === "medium" ? classes.ProjectImgContainerMedium : 
                        screenSize === "small" ? classes.ProjectImgContainerSmall : 
                        screenSize === "extraSmall" ? classes.ProjectImgContainerExtraSmall : 
                        null}`
                    }>
                        <img className={classes.ProjectImg} src={props.imgURL} onClick={() => openNewTab(props.link)}/>
                    </div>
                    <div className={
                        `${classes.ProjectDesc} ${screenSize === "large" ? classes.ProjectDescLarge :
                        screenSize === "medium" ? classes.ProjectDescMedium : 
                        screenSize === "small" ? classes.ProjectDescSmall : 
                        screenSize === "extraSmall" ? classes.ProjectDescExtraSmall : 
                        null}`
                    }>
                        <div className={
                            `${classes.ProjectTitle} ${screenSize === "large" ? classes.ProjectTitleLarge :
                            screenSize === "medium" ? classes.ProjectTitleMedium : 
                            screenSize === "small" ? classes.ProjectTitleSmall : 
                            screenSize === "extraSmall" ? classes.ProjectTitleExtraSmall : 
                            null}`
                        }>{props.name}</div>
                        {props.desc.map((descLine, i) => <div className={classes.ProjectDescText} key={i}>{descLine}</div>)}
                        {/*<div className={classes.ProjectDescText}>{props.desc}</div>*/}
                        
                        { props.link ?
                            <button 
                                className={
                                    `${classes.VisitSiteButton} ${screenSize === "large" ? classes.VisitSiteButtonLarge :
                                    screenSize === "medium" ? classes.VisitSiteButtonMedium : 
                                    screenSize === "small" ? classes.VisitSiteButtonSmall : 
                                    screenSize === "extraSmall" ? classes.VisitSiteButtonExtraSmall : 
                                    null}`
                                }
                                onClick={() => openNewTab(props.link)}>
                                    Visit Site
                            </button> 
                            : 
                            <React.Fragment>
                                <button 
                                    className={
                                        `${classes.VisitSiteButton} ${screenSize === "large" ? classes.VisitSiteButtonLarge :
                                        screenSize === "medium" ? classes.VisitSiteButtonMedium : 
                                        screenSize === "small" ? classes.VisitSiteButtonSmall : 
                                        screenSize === "extraSmall" ? classes.VisitSiteButtonExtraSmall : 
                                        null}`
                                    }
                                    onClick={() => openNewTab(props.link1)}>
                                        <span>Visit {props.name1}</span>
                                </button>
                                <button 
                                    className={
                                        `${classes.VisitSiteButton} ${classes.VisitSiteButtonAltChoice} ${screenSize === "large" ? classes.VisitSiteButtonLarge :
                                        screenSize === "medium" ? classes.VisitSiteButtonMedium : 
                                        screenSize === "small" ? classes.VisitSiteButtonSmall : 
                                        screenSize === "extraSmall" ? classes.VisitSiteButtonExtraSmall : 
                                        null}`
                                    }
                                    onClick={() => openNewTab(props.link2)}>
                                        Visit {props.name2}
                                </button>
                            </React.Fragment>
                        }
                            

                    </div>
                </div>
    )
}

export default Project;