import React from "react";

import classes from "./Projects.module.css"
import Project from "./Project/Project";

const Projects = (props) => {
    const projectList = [
        { 
            name: "PixelStore", 
            desc: "A responsive online store made with the MERN stack (loads slowly due to free hosting)", 
            link: "https://pixelstore-loads-slowly.herokuapp.com/", 
            imgURL: "https://i.imgur.com/TW7A8T2.png"
        },
        { 
            name: "Armor Sim", 
            desc: "A tank shell penetration calculator with 2D graphics", 
            link: "https://armor-sim.web.app/", 
            imgURL: "https://i.imgur.com/YduCVan.png"
        },
        { 
            name: "SquareClicker", 
            desc: "My first React project, a simple game", 
            link: "https://squareclicker.web.app", 
            imgURL: "https://i.imgur.com/1Ggwv5C.png"
        },
    ]

    return (
                <div className={classes.Projects}>
                    {projectList.map(project => <Project name={project.name} desc={project.desc} link={project.link} imgURL={project.imgURL}/>)}
                </div>
    )
}

export default Projects;