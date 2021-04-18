const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

export const trackLogin = (data) => {
  return{
      type: LOGIN,
      payload:data
  }
} 

export const trackLogout = () => {
  return{
      type: LOGOUT,
  }
} 
const init = {
  user:null
}

export const userReducer = (state=init,action)=>{
  switch (action.type) {
    case LOGIN:
      return{
        ...state,
        user:action.payload
      }
    case LOGOUT:
      return{
        ...state,
        user:null
      }  
    default:
      return state
  }
}