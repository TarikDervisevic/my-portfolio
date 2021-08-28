import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    const showBackdrop = useSelector(state => state.showBackdrop);
    const dispatch = useDispatch();

    const setShowBackdrop = () => {
        dispatch({
            type: "setShowBackdrop",
            payload: {
                showBackdrop: false
            }
        })
    }

    return showBackdrop ? <div className={classes.Backdrop} onClick={setShowBackdrop}></div> : null
};

export default Backdrop;