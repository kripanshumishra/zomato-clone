import React from 'react';
import { Outlet, Navigate, useLocation} from 'react-router-dom';

export default function Protected() {
    let token; // golbal state;
    let location = useLocation();

    return token?
        <Outlet/>:
        <Navigate to={'/login'} state={{ from : location}} replace />
}
