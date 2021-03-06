import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { projectReducer } from "./Project/reducer";
import { taskReducer } from "./Title/reducer";
import {userReducer} from "../Components/Login/userSlice"

const rootReducer = combineReducers({
    project: projectReducer,
    tasks: taskReducer,
    user: userReducer
})

export const store= createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)