
import React,{useContext} from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { UserContext } from './AuthContext'

 
const PrivateRoute = () => {
    const {loggedIn} = useContext(UserContext)
    const id = localStorage.getItem('userId')
  return (
    id?<Outlet/>:<Navigate to={'/'} />
  )
}

export default PrivateRoute