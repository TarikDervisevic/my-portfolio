import React from "react";
import { useSelector } from "react-redux";

import classes from "./ContactPage.module.css"
import ContactContainer from "../../components/ContactComps/ContactContainer/ContactContainer";

const ContactPage = (props) => {
    const screenSize = useSelector(state => state.screenSize);

    return (
                <div className={classes.ContactPage}>
                    <div className={
                        `${classes.ContactTitle} ${screenSize === "large" ? classes.ContactTitleLarge :
                        screenSize === "medium" ? classes.ContactTitleMedium : 
                        screenSize === "small" ? classes.ContactTitleSmall : 
                        screenSize === "extraSmall" ? classes.ContactTitleExtraSmall : 
                        null}`
                    }>
                        CONTACT
                    </div>
                    <ContactContainer/>
                </div>
    )
}

export default ContactPage;