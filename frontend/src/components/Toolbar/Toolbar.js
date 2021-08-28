import React from "react";
import { useSelector } from "react-redux";

import classes from "./Toolbar.module.css"
import DrawerToggle from "./ToolbarComps/DrawerToggle/DrawerToggle";
import ToolbarBtns from "./ToolbarComps/ToolbarBtns/ToolbarBtns";

const Toolbar = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    return (
            <header className={
                `${classes.Toolbar} ${screenSize === "large" ? 
                classes.ToolbarLarge : screenSize === "small" ? 
                classes.ToolbarSmall : classes.ToolbarExtraSmall}`}>
                {screenSize !== "extraSmall" ? <ToolbarBtns btnColor={props.btnColor}/> : <DrawerToggle/>}
            </header>
    )
}

export default Toolbar;