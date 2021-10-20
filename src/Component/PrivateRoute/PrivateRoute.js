import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useFirebase()
    const email = sessionStorage.getItem("email");
    console.log(user)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;