import React from "react";
import { Link } from "react-router-dom";

import classes from "./ToolbarBtn.module.css"

const ToolbarBtn = (props) => {

    return (
                <Link to={props.linkTo}>
                    <button className={classes.ToolbarBtn}>{props.name}</button>
                </Link>
    )
}

export default ToolbarBtn;