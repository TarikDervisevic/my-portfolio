import { createStore } from "redux";

const mainReducer = (state = 
    { activeToolbarBtn: "home" }, action ) => {
    switch (action.type) {
        case "setActiveToolbarBtn": return { ...state, activeToolbarBtn: action.payload.activeToolbarBtn } || state;
        default: return state;
    }
};

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;