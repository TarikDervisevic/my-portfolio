import React from "react";
import { useSelector } from "react-redux";

import classes from "./Article.module.css"

const Article = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    return (
                <div className={
                    `${classes.Article} ${screenSize === "large" ? classes.ArticleLarge :
                    screenSize === "medium" ? classes.ArticleMedium : 
                    screenSize === "small" ? classes.ArticleSmall : 
                    screenSize === "extraSmall" ? classes.ArticleExtraSmall : 
                    null}`
                }>

                    <h2 className={classes.Title}>Profile</h2>
                        <div>An enthusiastic young full-stack web developer with a passion for code. Quick to pick up new languages/technologies and enjoys developing efficient solutions to challenging problems.</div>

                    <h2 className={classes.Title}>Programming skills</h2>
                        <div><span className={classes.Bold}>Frontend -</span> HTML/CSS, Bootstrap, React, jQuery</div>
                        <div><span className={classes.Bold}>Backend -</span> Node.js/Express.js</div>
                        <div><span className={classes.Bold}>Databases -</span> MongoDB</div>
                        <div><span className={classes.Bold}>Version Control System -</span> Git</div>

                    <h2 className={classes.Title}>Projects</h2>
                        <div className={classes.Bold}>PixelStore</div>
                        <div>An online store made with React and Node/Express</div>
                        <a>www.pixelstorelink.com</a>
                        <div className={classes.Bold}>SquareClicker</div>
                        <div>A simple game made with React</div>
                        <a>www.squareclickerlink.com</a>

                    <h2 className={classes.Title}>Education</h2>
                        <div><span>Medical nurse</span> | <span>"Medicinska škola Bihać"</span></div>
                        <div>2016 - 2021</div>

                    <h2 className={classes.Title}>Languages</h2>
                        <div>
                            <div className={classes.Bold}>Bosnian/Croatian/Serbian</div>
                            <div className={classes.Bold}>English</div>
                            <div className={classes.Bold}>German</div>
                        </div>
                        <div>
                            <div>Native</div>
                            <div>Fluent</div>
                            <div>Good</div>
                        </div>
                        
                </div>
    )
}

export default Article;