import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = () => {
    const { status } = useSelector(state => state.auth)
    const navigate = useNavigate()


    useEffect(() => {
        if (!status) {
            navigate('/')
        }
    }, [status])

    return (
        <Outlet />
    )
}

export const IsAuthenticated = () => {
    const { status } = useSelector(state => state.auth)

    const navigate = useNavigate()
    useEffect(() => {
        if (status) {
            navigate("/posts")
        }
    }, [status])
    return (
        <Outlet />
    )
}


export default PrivateRoute