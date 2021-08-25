import React from "react";

import classes from "./Projects.module.css"
import Project from "./Project/Project";

const Projects = (props) => {
    const projectList = [
        {name: "PixelStore"},
        {name: "SquareClicker"}
    ]

    return (
                <div className={classes.Projects}>
                    {projectList.map(project => <Project name={project.name}/>)}
                </div>
    )
}

export default Projects;