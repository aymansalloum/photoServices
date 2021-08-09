import React, { Component } from "react";
import { Switch, Route, Router, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";


class Main extends Component {
    render() {
        return(
            <React.Fragment>
                <Header/>
                <Home/>
            </React.Fragment>

        );
    }
}

export default Main;