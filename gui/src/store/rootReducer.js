import {combineReducers} from "@reduxjs/toolkit";
import {default as authReducer} from "./reducers/auth"

const appReducer = combineReducers({
    auth: authReducer,
});

const rootReducer = (state, action) => {
    // if (action.type === "AUTH_LOGOUT") {
    //     return appReducer(undefined, action);
    // }
    return appReducer(state, action);
};

export default rootReducer;
