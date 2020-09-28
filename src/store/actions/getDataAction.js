import {FETCH_ERROR, FETCH_SUCCESS} from "./actionTypes";
import axios from '../../axios/axios-baseURL'

export const fetchError = error => ({type: FETCH_ERROR, error});

export const fetchSuccess = response => ({type: FETCH_SUCCESS, response});

export const getDataAction = () => async dispatch => {
    try {
        let response = await axios.get('/non-static-path-of-address.json');
        response = response.data;
        dispatch(fetchSuccess(response));
    } catch (error) {
        dispatch(fetchError(error));
    }
};