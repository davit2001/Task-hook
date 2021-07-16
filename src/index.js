import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./modules/index";
import {BrowserRouter as Router} from "react-router-dom";
import {DndProvider} from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render (
    <Router basename="/projects">
        <DndProvider backend={Backend}>
            <Provider store={store}>
            <App/>
        </Provider>
        </DndProvider>
     </Router>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
