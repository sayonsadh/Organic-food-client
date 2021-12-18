import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    let location = useLocation();
    if(isLoading)
    {return <Spinner></Spinner> }
    if(user.email){
      return children;
    }
    return (
        <div>
             <Navigate to="/login" state={{ from: location }} />
        </div>
    );
};

export default PrivateRoute;