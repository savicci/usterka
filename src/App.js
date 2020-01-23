import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {history} from './auth/helpers';
import {authenticationService} from './auth/services';
import {PrivateRoute} from './auth/components/PrivateRoute';
import LoginPage from './auth/LoginPage/LoginPage';
import {MainPage} from "./components/main/MainPage";
import {SearchPage} from "./components/search/SearchPage";
import NoPage from "./components/NoPage";

import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({currentUser: x}));
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={MainPage}/>
                    <PrivateRoute path="/search" component={SearchPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route component={NoPage}/>
                </Switch>
            </Router>
        );
    }
}

export {App};