import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_LOGOUT,
    AUTH_FAIL,
} from "../actionTypes";

const initialState = {
    payload: null,
    error: null,
    loading: false,
    status: null,
};

const authStart = (state) => {
    return {error: null, loading: false, payload: null, status: null};
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return authStart(state);
        // case AUTH_SUCCESS:
        //   return authSuccess(state, action);
        // case AUTH_FAIL:
        //   return authFail(state, action);
        // case AUTH_LOGOUT:
        //   return authLogout(state);
        default:
            return state;
    }
};

export default reducer;