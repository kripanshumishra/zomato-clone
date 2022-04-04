import React from 'react';
import { useLocation,Navigate } from 'react-router-dom';

export default function login() {

    const location = useLocation();
    const from = location?.state?.from || '/';
    let token ; // global state

  return (
    token?
    <Navigate to={from} replace />:
    // User Login info
    <div>do Login</div>
  )
}
