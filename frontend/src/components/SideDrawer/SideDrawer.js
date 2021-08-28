import React, { useState } from 'react';

import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import DrawerItem from "./DrawerItem/DrawerItem";
import { useSelector, useDispatch } from 'react-redux';

const SideDrawer = ( props ) => {
    const dispatch = useDispatch();

    const [categories, setCategories] = useState(null);
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const setShowBackdrop = () => {
        dispatch({
            type: "setShowBackdrop",
            payload: {
                showBackdrop: false
            }
        })
    }

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false)
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer((prevState) => !prevState.showSideDrawer)
    }

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (showSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop/>
            <div className={attachedClasses.join(' ')} onClick={sideDrawerClosedHandler}>
                <nav>
                    <DrawerItem name="Home" linkpath="/home"/>
                    <DrawerItem name="About" linkpath="/about"/> 
                    <DrawerItem name="Projects" linkpath="/projects"/>
                    <DrawerItem name="Contact" linkpath="/contact"/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default SideDrawer;