import { Route, Switch } from "react-router";
import { Home } from "../Components/Home/Home";
import {Sidebar} from "../Compo/sidebar"
import {Timer} from "../Components/Timer/Timer"
import { Project } from "../Components/Project/Project";


function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/timer">
                <div style={{
                    display:"flex"
                }}>
                    <Sidebar/>
                    <Timer/>
                </div>
                </Route>
                <Route path="/projects">
                <div style={{
                    display:"flex"
                }}>
                    <Sidebar/>
                    <Project/>
                </div>
                </Route>
            </Switch>
        </>
    )
}

export {Routes}