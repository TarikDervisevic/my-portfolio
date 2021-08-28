import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ScreenSizeProvider = (props) => {
    const dispatch = useDispatch();

    const updateScreenSize = (screenSize) => {
        dispatch({
            type: "setScreenSize",
            payload: {
                screenSize: screenSize
            }
        })
    };

    const smallBreakpoint = 700;
    const extraSmallBreakpoint = 500;

    useEffect(() => {
        setTimeout(() => {
            if (window.innerWidth < smallBreakpoint && window.innerWidth > extraSmallBreakpoint) // setTimeout because window.innerWidth returns wrong value without it
        {
            updateScreenSize("small")
        } else if (window.innerWidth < extraSmallBreakpoint) {
            updateScreenSize("extraSmall")
        }
        }, 1);
        window.addEventListener("resize", () => {
            if (window.innerWidth < smallBreakpoint && window.innerWidth > extraSmallBreakpoint) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < extraSmallBreakpoint) {
            updateScreenSize("extraSmall")
        } else if (window.innerWidth > smallBreakpoint) {
            updateScreenSize("large")
        }
        });
        return () => window.removeEventListener("resize", () => {
            if (window.innerWidth < smallBreakpoint && window.innerWidth > extraSmallBreakpoint) 
        {
            updateScreenSize("small")
        } else if (window.innerWidth < extraSmallBreakpoint) {
            updateScreenSize("extraSmall")
        } else if (window.innerWidth > smallBreakpoint) {
            updateScreenSize("large")
        }
        });
    });
    return null;
}

export default ScreenSizeProvider;