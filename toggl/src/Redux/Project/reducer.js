import { GET_PROJECT_FAILURE, POST_PROJECT_FAILURE, POST_PROJECT_REQ, POST_PROJECT_SUCCESS } from "./actiontype"


const init = {
    project: [],
    isPosting: false
}
const projectReducer = (state = init, action) => {
    switch(action.type){
        case POST_PROJECT_SUCCESS: {
            return{
                ...state,
                project: action.project,
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
                isPosting: true
            }
        }
        case GET_PROJECT_SUCCESS: {
            return{
                ...state,
                project: action.project,
                isPosting: false
            }
        }
        case GET_PROJECT_FAILURE: {
            return{
                ...state,
                isPosting: false
            }
        }
        default:
            state
    }
}

export {projectReducer}