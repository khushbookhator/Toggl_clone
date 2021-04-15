import { POST_PROJECT_FAILURE, POST_PROJECT_REQ, POST_PROJECT_SUCCESS } from "./actiontype"


const init = {
    data: []
}
const projectReducer = (state = init, action) => {
    switch(action.type){
        case POST_PROJECT_SUCCESS: {
            return{
                ...state,
                data: action.payload
            }
        }
        case POST_PROJECT_REQ: {
            return{
                ...state
            }
        }
        case POST_PROJECT_FAILURE: {
            return{

            }
        }
        default:
            state
    }
}

export {projectReducer}