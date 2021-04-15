import { GET_PROJECT_FAILURE, POST_PROJECT_FAILURE, POST_PROJECT_REQ, POST_PROJECT_SUCCESS, GET_PROJECT_REQ, GET_PROJECT_SUCCESS } from "./actiontype"


const init = {
    proj: [],
    isPosting: false,
    isFetching: false
}
const projectReducer = (state = init, action) => {
    switch(action.type){
        case POST_PROJECT_SUCCESS: {
            return{
                ...state,
                isPosting: false
            }
        }
        case POST_PROJECT_REQ: {
            return{
                ...state,
                isPosting: true
            }
        }
        case POST_PROJECT_FAILURE: {
            return{
                ...state,
                isPosting: false
            }
        }
        case GET_PROJECT_REQ: {
            return{
                ...state,
                isFetching: true
            }
        }
        case GET_PROJECT_SUCCESS: {
            return{
                ...state,
                proj: action.payload,
                isFetching: false
            }
        }
        case GET_PROJECT_FAILURE: {
            return{
                ...state,
                isFetching: false
            }
        }
        default:
            return state
    }
}

export {projectReducer}