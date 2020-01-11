import {Route, Switch} from "react-router-dom";
import MainPage from "../components/main/MainPage";
import LoginPage from "../components/login/LoginPage";
import SearchPage from "../components/search/SearchPage";
import React from "react";
import NoPage from "../components/NoPage";

export default () => (
    <Switch>
        <Route exact path="/">
            <MainPage/>
        </Route>

        <Route path="/login">
            <LoginPage/>
        </Route>

        <Route path="/search">
            <SearchPage/>
        </Route>

        <Route>
            <NoPage/>
        </Route>
    </Switch>
)