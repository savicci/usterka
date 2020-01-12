import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './auth/helpers';
import {authenticationService} from './auth/services';
import {PrivateRoute} from './auth/components/PrivateRoute';
import LoginPage from './auth/LoginPage/LoginPage';
import {NavigationBar} from "./components/navbar/NavigationBar";
import MainPage from "./components/main/MainPage";
import SearchPage from "./components/search/SearchPage";
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
        const {currentUser} = this.state;
        return (
            <Router history={history}>
                <div style={{height: "100vh", width: "100vw"}}>
                    {currentUser && <div style={{height: "5vh", width: "100vw"}}>
                        <NavigationBar/>
                    </div>}

                    <div style={{height: "90vh", marginTop: "5vh", width: "100%"}}>
                        <Switch>
                            <PrivateRoute exact path="/" component={MainPage}/>
                            <PrivateRoute path="/search" component={SearchPage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route component={NoPage}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export {App};