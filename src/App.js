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
                {currentUser && <NavigationBar/>}

                <div className="jumbotron myContainer">
                    <Switch>
                        <PrivateRoute exact path="/" component={MainPage}/>
                        <PrivateRoute path="/search" component={SearchPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route component={NoPage}/>
                    </Switch>
                </div>

            </Router>
        );
    }
}

export {App};