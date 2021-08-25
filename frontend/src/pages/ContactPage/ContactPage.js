import React from "react";

import classes from "./ContactPage.module.css"
import ContactContainer from "../../components/ContactComps/ContactContainer/ContactContainer";

const ContactPage = (props) => {
    return (
                <div className={classes.ContactPage}>
                    <div className={classes.ContactTitle}>
                        CONTACT
                    </div>
                    <ContactContainer/>
                </div>
    )
}

export default ContactPage;