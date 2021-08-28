import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './DrawerToggle.module.css';
import drawerTogglePng from "../../../../assets/images/DrawerToggle.png"

const DrawerToggle = (props) => {
    const dispatch = useDispatch();

    const setShowBackdrop = () => {
        dispatch({
            type: "setShowBackdrop",
            payload: {
                showBackdrop: true
            }
        })
    }

    return (
        <img
        src={drawerTogglePng}   
        className={classes.DrawerToggle}
        onClick={setShowBackdrop}/>
    )

};

export default DrawerToggle;