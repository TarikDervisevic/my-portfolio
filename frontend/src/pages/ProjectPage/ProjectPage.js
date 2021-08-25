import React from "react";

import classes from "./ProjectPage.module.css"
import ProjectsTitle from "../../components/ProjectsComps/ProjectsTitle/ProjectsTitle";
import Projects from "../../components/ProjectsComps/Projects/Projects";

const ProjectPage = (props) => {
    return (
                <div className={classes.ProjectPage}>
                    <ProjectsTitle/>
                    <Projects/>
                </div>
    )
}

export default ProjectPage;