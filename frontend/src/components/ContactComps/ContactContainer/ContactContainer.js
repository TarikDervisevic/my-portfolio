import React from "react";

import classes from "./ContactContainer.module.css"
import LinkedInIcon from "../../../assets/images/LinkedInIcon.png"

const ContactContainer = (props) => {
    return (
                    <div className={classes.ContactContainer}>
                        <div className={classes.ContactTitle}>Contact</div>
                        <div className={classes.Email}>Email: rikdervisevic@gmail.com</div>
                        <div className={classes.Email}>Telephone: +38761590136</div>
                        <div className={classes.LinkedIn}>
                            <div className={classes.LinkedInText}>Linked</div>
                            <img className={classes.LinkedInIcon} src={LinkedInIcon}/>  
                        </div>
                    </div>
    )
}

export default ContactContainer;