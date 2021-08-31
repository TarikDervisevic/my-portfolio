import React from "react";
import { useSelector } from "react-redux";

import classes from "./ProjectPage.module.css"
import Projects from "../../components/ProjectsComps/Projects/Projects";

const ProjectPage = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    return (
                <div className={classes.ProjectPage}>
                    <div className={
                        `${classes.ProjectsTitle} ${screenSize === "large" ? classes.ProjectsTitleLarge :
                        screenSize === "medium" ? classes.ProjectsTitleMedium : 
                        screenSize === "small" ? classes.ProjectsTitleSmall : 
                        screenSize === "extraSmall" ? classes.ProjectsTitleExtraSmall : 
                        null}`
                    }>
                        MY PROJECTS
                    </div>
                    <Projects/>
                </div>
    )
}

export default ProjectPage;