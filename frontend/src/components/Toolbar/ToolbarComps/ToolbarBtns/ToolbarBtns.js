import React from "react";

import classes from "./ToolbarBtns.module.css"
import ToolbarBtn from "./ToolbarBtn/ToolbarBtn";

const ToolbarBtns = (props) => {
    const toolbarButtons = [ {name: "home", linkTo: "/"}, {name: "projects", linkTo: "/"}, {name: "contacts", linkTo: "/"} ]

    return (
            <div className={classes.ToolbarBtns}>
                {toolbarButtons.map(button => {
                    return <ToolbarBtn name={button.name} linkTo={button.linkTo}/>
                })}
            </div>
    )
}

export default ToolbarBtns;