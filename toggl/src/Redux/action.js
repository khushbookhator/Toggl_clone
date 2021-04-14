
import axios from 'axios';
import { GET_PROJECT_SUCCESS, GET_PORJECT_FAILURE, GET_PROJECT_REQ } from './actiontype';

const { API_URL_PROJECT } = process.env;

export const getProjectSuccess = data => {
    return{
        type: GET_PROJECT_SUCCESS,
        data
    }
    
}

export const getProjectFailure= err => {
    return{
        type: GET_PORJECT_FAILURE,
        data: err
    }
    
}

export const getProjectReq = () => {
    return{
        type: GET_PROJECT_REQ,
    }
}

export const getProject = () => (dispatch) => {
    dispatch(getProjectReq())
    return axios.get(`${API_URL_PROJECT}`)
    .then((data) => dispatch(getProjectSuccess(data)))
}