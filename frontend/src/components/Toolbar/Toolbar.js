import React from "react";

import classes from "./Toolbar.module.css"
import ToolbarBtns from "./ToolbarComps/ToolbarBtns/ToolbarBtns";

const Toolbar = (props) => {

    return (
            <header className={classes.Toolbar}>
                <ToolbarBtns/>
            </header>
    )
}

export default Toolbar;