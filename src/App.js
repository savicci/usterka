import React from 'react';
import {Router, Route, Link} from 'react-router-dom';

import {history} from './auth/helpers';
import {authenticationService} from './auth/services';
import {PrivateRoute} from './auth/components/PrivateRoute';
import {HomePage} from './auth/HomePage/HomePage';
import {LoginPage} from './auth/LoginPage/LoginPage';
import MainRoutes from "./routes/MainRoutes";
import {NavigationBar} from "./components/navbar/NavigationBar";
import MainPage from "./components/main/MainPage";
import SearchPage from "./components/search/SearchPage";

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

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const {currentUser} = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                    <NavigationBar/>
                    }

                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={MainPage}/>
                                    <PrivateRoute path="/search" component={SearchPage}/>
                                    <Route path="/login" component={LoginPage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<MainRoutes/>*/}
            </Router>
        );
    }
}

export {App};