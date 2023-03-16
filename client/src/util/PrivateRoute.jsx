
import React,{useContext} from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { UserContext } from './AuthContext'

 
const PrivateRoute = () => {
    const {loggedIn} = useContext(UserContext)

  return (
     loggedIn?<Outlet/>:<Navigate to={'/'} />
  )
}

export default PrivateRoute