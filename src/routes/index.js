import React, { useContext } from 'react'
import AuthRoutes from './auth.routes'
import AuthContext from '../context/auth'
import AppRoutes from './app.routes'

const Routes = () => {
    const {token} = useContext(AuthContext)
    
    let page = <AuthRoutes></AuthRoutes>

    if(token){
        page = <AppRoutes></AppRoutes>
    }

    return page
}

export default Routes;