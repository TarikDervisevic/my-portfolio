import React from "react";

import classes from "./Projects.module.css"
import Project from "./Project/Project";

const Projects = (props) => {
    const projectList = [
        { 
            name: "PixelStore", 
            desc: ["A responsive online store made with the MERN stack.", "Has CRUD functionality, custom search function, user accounts & authentication, product reviews, cart & checkout etc.", "Initial load takes 5-10 seconds due to free heroku hosting"], 
            link: "https://pixelstore-loads-slowly.herokuapp.com/", 
            imgURL: "https://i.imgur.com/TW7A8T2.png"
        },
        { 
            name: "Armor Sim", 
            desc: ["An accurate, interactive tank shell penetration calculator with 2D graphics", "Uses the React-Pixi package for graphics"], 
            link: "https://armor-sim.web.app/", 
            imgURL: "https://i.imgur.com/YduCVan.png"
        },
        { 
            name: "4chat", 
            name1: "Websocket Version",
            name2: "HTTP Version",
            desc: ["An instant messageboard with dynamic message loading", "One version uses websockets, while the other uses timed HTTP requests", "Initial load takes 5-10 seconds due to free heroku hosting"], 
            link1: "https://four-chat-socket.herokuapp.com/", 
            link2: "https://four-chat.herokuapp.com/",
            imgURL: "https://i.imgur.com/XfXKAnV.png"
        },
        { 
            name: "SquareClicker", 
            desc: ["My first React project, a simple game of clicking squares as fast as you can", "Current record is 21 on Easy difficulty"], 
            link: "https://squareclicker.web.app", 
            imgURL: "https://i.imgur.com/1Ggwv5C.png"
        },
    ]

    return (
                <div className={classes.Projects}>
                    {projectList.map((project, i) => {
                        if (project.link) {
                            return (
                            <Project 
                                name={project.name} 
                                desc={project.desc} 
                                link={project.link} 
                                imgURL={project.imgURL} 
                                key={i}/>
                            )
                        } else if (project.link1) {
                            return (
                                <Project 
                                    name={project.name} 
                                    desc={project.desc} 
                                    link1={project.link1} 
                                    link2={project.link2} 
                                    name1={project.name1} 
                                    name2={project.name2} 
                                    imgURL={project.imgURL} 
                                    key={i}/>
                            )
                        }
                        
                    }
                    )}
                </div>
    )
}

export default Projects;