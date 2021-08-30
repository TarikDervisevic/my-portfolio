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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
    )
}

export default Article;