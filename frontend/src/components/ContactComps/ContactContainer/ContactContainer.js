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
                        <a href="https://www.linkedin.com/in/tarikdev/">
                            <div className={setResponsiveClassName(classes, screenSize, "LinkedIn")}>
                                <div className={setResponsiveClassName(classes, screenSize, "LinkedInText")}>Linked</div>
                                <img className={setResponsiveClassName(classes, screenSize, "LinkedInIcon")} src={LinkedInIcon}/>  
                            </div>
                        </a>
                    </div>
    )
}

export default ContactContainer;