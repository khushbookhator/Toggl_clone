import { Route, Switch } from "react-router";
import { Home } from "../Components/Home/Home";
import {Sidebar} from "../Compo/sidebar"
import {Timer} from "../Components/Timer/Timer"
import { Project } from "../Components/Project/Project";
import { Reports } from "../Components/Reports/Reports";
import { IndividualProject } from "../Components/Project/IndividulaProject";
import { Login } from "../Components/Login/Login";
import { Signup } from "../Components/Login/Signup";
import { NotFound } from "../Components/NotFound";
import { PrivateRoute } from "./PrivateRoute";

function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <PrivateRoute exact path="/timer">
                <div style={{
                    display:"flex",
                    height:"100vh",
                    overflowY:"hidden"
                }}>
                    <Sidebar/>
                    <Timer/>
                </div>
                </PrivateRoute>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <Signup/>
                </Route>
                <PrivateRoute  exact path="/projects">
                <div style={{
                    display:"flex",
                    height:"100vh",
                    overflowY:"hidden"
                }}>
                    <Sidebar/>
                    <Project/>
                </div>
                </PrivateRoute>
                <PrivateRoute exact path="/projects/:id">
                <div style={{
                    display:"flex",
                    height:"100vh",
                    overflowY:"hidden"
                }}>
                    <Sidebar/>
                    <IndividualProject/>
                </div>
                </PrivateRoute>
                <PrivateRoute path="/reports">
                <div style={{
                    display:"flex",
                    height:"100vh",
                    overflowY:"hidden"
                }}>
                    <Sidebar/>
                    <Reports/>
                </div>
                </PrivateRoute>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </>
    )
}

export {Routes}