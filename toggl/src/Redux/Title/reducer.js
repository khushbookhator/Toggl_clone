import { GET_TASK_FAILURE, POST_TASK_FAILURE, POST_TASK_REQ, POST_TASK_SUCCESS, GET_TASK_REQ, GET_TASK_SUCCESS } from "./actiontype"


const init = {
    task: [],
    isPosting: false,
    isFetching: false
}
const taskReducer = (state = init, action) => {
    switch(action.type){
        case POST_TASK_SUCCESS: {
            return{
                ...state,
                isPosting: false
            }
        }
        case POST_TASK_REQ: {
            return{
                ...state,
                isPosting: true
            }
        }
        case POST_TASK_FAILURE: {
            return{
                ...state,
                isPosting: false
            }
        }
        case GET_TASK_REQ: {
            return{
                ...state,
                isFetching: true
            }
        }
        case GET_TASK_SUCCESS: {
            return{
                ...state,
                task: action.payload,
                isFetching: false
            }
        }
        case GET_TASK_FAILURE: {
            return{
                ...state,
                isFetching: false
            }
        }
        default:
            return state
    }
}

export {taskReducer}