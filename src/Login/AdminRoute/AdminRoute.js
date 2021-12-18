import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <Spinner></Spinner> }
    if(user.email && admin){
        return children;
    }
    return (
        <div>
            <Navigate to="/login" state={{ from: location }} />
        </div>
    );
};

export default AdminRoute;