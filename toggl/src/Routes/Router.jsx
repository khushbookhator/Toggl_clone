import { Route, Switch } from "react-router";
import { Dashboard } from "../Compo/Dashboard";
import { Sidebar } from "../Compo/sidebar";


function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <h1>LANDING PAGE</h1>
                </Route>
                <Route path="/timer">
                    <Dashboard/>
                </Route>
            </Switch>
        </>
    )
}

export {Routes}