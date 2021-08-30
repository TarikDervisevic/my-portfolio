import React, { useState, useEffect } from 'react';

import classes from './SideDrawer.module.css';
import Backdrop from "./Backdrop/Backdrop";
import DrawerItem from "./DrawerItem/DrawerItem";
import { useSelector, useDispatch } from 'react-redux';

const SideDrawer = ( props ) => {
    const dispatch = useDispatch();
    const showSideDrawer = useSelector(state => state.showBackdrop)

    const [categories, setCategories] = useState(null);
    const [attachedClasses, setAttachedClasses] = useState([classes.SideDrawer, classes.Close])

    const setShowBackdrop = () => {
        dispatch({
            type: "setShowBackdrop",
            payload: {
                showBackdrop: false
            }
        })
    }

    useEffect(() => {
        if (!showSideDrawer) {
            setAttachedClasses([classes.SideDrawer, classes.Close]);
        }
        if (showSideDrawer) {
            setAttachedClasses([classes.SideDrawer, classes.Open]);
        }
    }, [showSideDrawer])
    
    return (
        <React.Fragment>
            <Backdrop/>
            <div className={attachedClasses.join(' ')} onClick={setShowBackdrop}>
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