import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {

    const { isAuthenticated } = useSelector(state => state.user);
    const { sucess } = useSelector(state => state.notes);
    useEffect(() => {

    }, [isAuthenticated, sucess])
    if (sucess === false && isAuthenticated === false) {
        return <Navigate to='/login' />
    } else if(!sucess && !isAuthenticated){
        return <Navigate to='/login' />

    }
    else {
        return <Outlet />

    }
}

export default Protected