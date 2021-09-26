import React from "react";
import { useSelector } from "react-redux";

import classes from "./Article.module.css"

const Article = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    const openNewTab = (url) => {
        window.open(url,'_blank');
    }

    return (
                <div className={
                    `${classes.Article} ${screenSize === "large" ? classes.ArticleLarge :
                    screenSize === "medium" ? classes.ArticleMedium : 
                    screenSize === "small" ? classes.ArticleSmall : 
                    screenSize === "extraSmall" ? classes.ArticleExtraSmall : 
                    null}`
                }>

                    <div className={
                        `${classes.Header} ${screenSize === "large" ? classes.HeaderLarge :
                        screenSize === "medium" ? classes.HeaderSmall : 
                        screenSize === "small" ? classes.HeaderSmall : 
                        screenSize === "extraSmall" ? classes.HeaderExtraSmall : 
                        null}`
                    }>
                        <h2 className={classes.MyName}>Tarik Dervišević</h2>
                        <div className={`${screenSize === "medium" || screenSize === "small" || screenSize === "extraSmall" ? classes.Info : null}`}>
                            <div><span className={classes.InfoName}>address:</span> Bosnia and Herzegovina, Bihać, Midžića mahala 44</div>
                            <div><span className={classes.InfoName}>telephone:</span> +38761590136</div>
                            <div><span className={classes.InfoName}>LinkedIn:</span> www.linkedin.com/in/tarikdev</div>
                            <div><span className={classes.InfoName}>e-mail:</span> rikdervisevic@gmail.com</div>
                        </div>
                    </div>
                    

                    <h2 className={classes.Title}>Profile</h2>
                        <div>An enthusiastic young full-stack web developer with a passion for code. Quick to pick up new languages/technologies and enjoys developing efficient solutions to challenging problems.</div>

                    <h2 className={classes.Title}>Programming skills</h2>
                        <div><span className={classes.Bold}>Frontend -</span> HTML/CSS, Bootstrap, React, jQuery</div>
                        <div><span className={classes.Bold}>Backend -</span> Node.js/Express.js</div>
                        <div><span className={classes.Bold}>Databases -</span> MongoDB</div>
                        <div><span className={classes.Bold}>Version Control System -</span> Git</div>

                    <h2 className={classes.Title}>Projects</h2>
                        <div className={classes.ProjectTitle}>PixelStore</div>
                        <div className={classes.ProjectDesc}>A responsive online store made with React and Node/Express</div>
                        <button className={classes.VisitSiteBtn} onClick={() => {openNewTab("https://pixelstore-loads-slowly.herokuapp.com/")}}>Visit Site</button>
                        <div className={classes.ProjectTitle}>SquareClicker</div>
                        <div className={classes.ProjectDesc}>A simple game made with React</div>
                        <button className={classes.VisitSiteBtn} onClick={() => {openNewTab("https://squareclicker.web.app/")}}>Visit Site</button>
                    <h2 className={classes.Title}>Education</h2>
                        <div><span>Medical nurse</span> | <span>"Medicinska škola Bihać"</span></div>
                        <div className={classes.SchoolYears}>2016. - 2021.</div>

                    <h2 className={classes.Title}>Languages</h2>
                    <div className={classes.Languages}>
                        <div className={classes.LanguageName}>
                            <div className={classes.Bold}>Bosnian</div>
                            <div className={classes.Bold}>English</div>
                            <div className={classes.Bold}>German</div>
                        </div>
                        <div className={classes.LanguageFluency}>
                            <div>Native</div>
                            <div>Fluent</div>
                            <div>Good</div>
                        </div>
                    </div>
                        
                        
                </div>
    )
}

export default Article;