import { Route, Switch } from "react-router";
import { Dashboard } from "../Compo/Dashboard";
import { Home } from "../Components/Home/Home";


function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/timer">
                    <Dashboard/>
                </Route>
            </Switch>
        </>
    )
}

export {Routes}