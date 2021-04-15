
import axios from 'axios';
import { GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE, GET_PROJECT_REQ, POST_PROJECT_FAILURE, POST_PROJECT_SUCCESS, POST_PROJECT_REQ } from './actiontype';

const { REACT_APP_BASE_URL } = process.env;

export const getProjectSuccess = payload => {
    return{
        type: GET_PROJECT_SUCCESS,
        payload
    }
}

export const getProjectFailure= err => {
    return{
        type: GET_PROJECT_FAILURE,
        payload: err
    }
    
}

export const getProjectReq = () => {
    return{
        type: GET_PROJECT_REQ,
    }
}
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

export const postProjectSuccess = data => {
    return{
        type: POST_PROJECT_SUCCESS,
        data
    }
}

export const postProjectFailure= err => {
    return{
        type: POST_PROJECT_FAILURE,
        data: err
    }
    
}

export const postProjectReq = () => {
    return{
        type: POST_PROJECT_REQ,
    }
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

export const postProject = (payload) => (dispatch) => {
    dispatch(postProjectReq())
    return axios.post(`${REACT_APP_BASE_URL}/project`, payload, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => dispatch(postProjectSuccess(res.data)))
}

export const getProject = () => (dispatch) => {
    dispatch(getProjectReq())
    return axios.get(`${REACT_APP_BASE_URL}/project`)
    .then((res) => dispatch(getProjectSuccess(res.data)))
}

