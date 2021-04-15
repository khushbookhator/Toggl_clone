
import axios from 'axios';
import { GET_TASK_SUCCESS, GET_TASK_FAILURE, GET_TASK_REQ, POST_TASK_FAILURE, POST_TASK_SUCCESS, POST_TASK_REQ } from './actiontype';

const { REACT_APP_BASE_URL } = process.env;

export const getTaskSuccess = payload => {
    return{
        type: GET_TASK_SUCCESS,
        payload
    }
}

export const getTaskFailure= err => {
    return{
        type: GET_TASK_FAILURE,
        payload: err
    }
    
}

export const getTaskReq = () => {
    return{
        type: GET_TASK_REQ,
    }
}
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

export const postTaskSuccess = payload => {
    return{
        type: POST_TASK_SUCCESS,
        payload
    }
}

export const postTaskFailure= err => {
    return{
        type: POST_TASK_FAILURE,
        data: err
    }
    
}

export const postTaskReq = () => {
    return{
        type: POST_TASK_REQ,
    }
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

export const postTask = (payload) => (dispatch) => {
    dispatch(postTaskReq())
    return axios.post(`${REACT_APP_BASE_URL}/title`, payload)
    .then((res) => dispatch(postTaskSuccess(res.data)))
}

export const getTask= () => (dispatch) => {
    dispatch(getTaskReq())
    return axios.get(`${REACT_APP_BASE_URL}/title`)
    .then((res) => dispatch(getTaskSuccess(res.data)))
}

