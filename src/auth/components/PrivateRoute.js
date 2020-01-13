import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {authenticationService} from '../services';
import AuthLayout from "../../components/layouts/AuthLayout";
import DefaultLayout from "../../components/layouts/DefaultLayout";

export const PrivateRoute = ({component: Component, ...rest}) => (
        <Route {...rest} render={props => {
            const currentUser = authenticationService.currentUserValue;
            if (!currentUser) {
                // not logged in so redirect to login page with the return url
                return (
                    <DefaultLayout>
                        <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
                    </DefaultLayout>
                )
            }

            // authorised so return component
            return (
                <AuthLayout>
                    <Component {...props}/>
                </AuthLayout>
            )
        }}/>
    )
;