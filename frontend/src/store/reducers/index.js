import { createStore } from "redux";

const mainReducer = (state = 
    { 
        activeToolbarBtn: "home",
        screenSize: "large",
        showBackdrop: false
    }, action ) => {
    switch (action.type) {
        case "setActiveToolbarBtn": return { ...state, activeToolbarBtn: action.payload.activeToolbarBtn } || state;
        case "setScreenSize": return { ...state, screenSize: action.payload.screenSize } || state;
        case "setShowBackdrop": return { ...state, showBackdrop: action.payload.showBackdrop} || state;
        default: return state;
    }
};

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;