import React from "react";
import { useSelector } from "react-redux";
import { setResponsiveClassName } from "../../../utility/utilityFunctions";

import classes from "./ContactContainer.module.css"
import LinkedInIcon from "../../../assets/images/LinkedInIcon.png"

const ContactContainer = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    return (
                    <div className={setResponsiveClassName(classes, screenSize, "ContactContainer")}>
                        <div className={setResponsiveClassName(classes, screenSize, "Email")}>Email: rikdervisevic@gmail.com</div>
                        <div className={setResponsiveClassName(classes, screenSize, "Email")}>Telephone: +38761590136</div>
                        <div className={classes.LinkedIn}>
                            <div className={classes.LinkedInText}>Linked</div>
                            <img className={classes.LinkedInIcon} src={LinkedInIcon}/>  
                        </div>
                    </div>
    )
}

export default ContactContainer;