import {FETCH_ERROR, FETCH_SUCCESS} from "../actions/actionTypes";

const initialState = {
    data: null,
    error: null,
};

const handlers = {

    [FETCH_SUCCESS]: (state, action) => ({
        ...state,
        data: action.response,
    }),

    [FETCH_ERROR]: (state, action) => ({
        ...state,
        data: action.error,
    }),

    DEFAULT: state => state
};

const getDataReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};

export default getDataReducer;