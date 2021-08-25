import React from "react";

import classes from "./ProjectPage.module.css"
import Projects from "../../components/ProjectsComps/Projects/Projects";

const ProjectPage = (props) => {
    return (
                <div className={classes.ProjectPage}>
                    <div className={classes.ProjectsTitle}>
                        MY PROJECTS
                    </div>
                    <Projects/>
                </div>
    )
}

export default ProjectPage;