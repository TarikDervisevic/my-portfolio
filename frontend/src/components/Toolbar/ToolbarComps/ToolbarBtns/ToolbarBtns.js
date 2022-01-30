import React from "react";
import { useSelector } from "react-redux";

import classes from "./ToolbarBtns.module.css"
import ToolbarBtn from "./ToolbarBtn/ToolbarBtn";

const ToolbarBtns = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    const toolbarButtons = [ 
        {name: "Home", linkTo: "/"}, 
        {name: "About", linkTo: "/about"}, 
        {name: "Projects", linkTo: "/projects"}, 
        {name: "Contact", linkTo: "/contact"} ]

    return (
            <div className={
                `${screenSize === "large" || screenSize === "medium" ? 
                classes.ToolbarBtnsLarge : screenSize === "small" ? 
                classes.ToolbarBtnsSmall : classes.ToolbarBtnsExtraSmall}`}>
                {toolbarButtons.map((button, i) => {
                    return <ToolbarBtn name={button.name} linkTo={button.linkTo} btnColor={props.btnColor} key={i}/>
                })}
            </div>
    )
}

export default ToolbarBtns;