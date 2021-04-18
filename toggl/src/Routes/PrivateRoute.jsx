import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";


export function PrivateRoute({children,
    path,
    exact=false,
    redirectPath="/",
    push=false}){
        
        const user = useSelector(state=>state.user.user) 
 
        return user?(
            <Route path={path} exact={exact}>
                {children}
            </Route>
        ):(
            <Redirect to={redirectPath} push={push}/>
        )
}