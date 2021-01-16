import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Lessions from "./lessions.js";
import Home from './Home.js';
import history from './history.js';
function Dashboard() {


    return (
        <div className = 'content'>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/lessions/:path" component={Lessions}>
                        <Lessions />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Dashboard;