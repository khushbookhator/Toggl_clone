import { GET_PROJECT_FAILURE, POST_PROJECT_FAILURE, POST_PROJECT_REQ, POST_PROJECT_SUCCESS, GET_PROJECT_REQ, GET_PROJECT_SUCCESS , GET_INDIVIDUAL_PROJ_SUCCESS, GET_INDIVIDUAL_PROJ_REQ, DELETE_PROJECT_REQ, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE} from "./actiontype"


const init = {
    proj: [],
    isPosting: false,
    isFetching: false,
    isDeleting: false,
    individual:{}
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
        case GET_INDIVIDUAL_PROJ_REQ : {
            return{
                ...state,
            }
        }
        case GET_INDIVIDUAL_PROJ_SUCCESS: {
            return{
                ...state,
                individual: {...action.data}
            }
        }
        case DELETE_PROJECT_REQ: {
            return{

                ...state,
                isDeleting: true

            }
        }
        case DELETE_PROJECT_SUCCESS: {
            return{
                ...state,
                isDeleting: false
                
            }
        }
        case DELETE_PROJECT_FAILURE: {
            return{
                ...state,
                isDeleting: false

            }
        }
        default:
            return state
    }
}

export {projectReducer}