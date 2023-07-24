/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);

    if (user?.email) {
        return children;
    }

    return <Navigate to='/sign-in' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;