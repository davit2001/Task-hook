
import "./App.css";
import {Route, Switch, Redirect} from "react-router-dom";
import Projects from "./modules/projects/components/Projects";
import Tasks from "./modules/tasks/components/Tasks";
import Header from "./components/Header";
import React from 'react'

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/" exact
                    component={Projects}/>
                <Route path="/:id"
                    component={Tasks}/>
            </Switch>
            <Redirect from="*" to="/"/>
        </React.Fragment>
    );
}

export default App;