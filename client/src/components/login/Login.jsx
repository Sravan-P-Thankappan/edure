
import React, { useState, useContext, useEffect } from 'react'
import Button from '../../ui/button/Button'
import Card from '../../ui/card/Card'
import Input from '../input/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../util/AuthContext'
const Login = () => {

  const { setLoggedIn ,loggedIn} = useContext(UserContext)
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({})
  const [error, setError] = useState('')




  const handleInputData = (data) => {

    setInputData((prev) => {
      return { ...prev, ...data }
    })
  }





  const handleSubmit = (e) => {

    e.preventDefault()
    axios.post('http://localhost:5000/login', inputData)
      .then((res) => {


        localStorage.setItem('userId', res.data.userId)
        setLoggedIn(true)
        navigate('/home')
      })
      .catch((er) => {

        setError(er.response.data.message)
      })
  }


  useEffect(()=>{
    if(loggedIn) navigate('/home')
    return
},[])


  return (


    <Card className='min-h-screen'>
      <h1 class="mb-8 text-3xl text-center">Login</h1>

      <form onSubmit={handleSubmit} >

        <p className='text-center text-sm text-red-500 mb-3'>
          {error}</p>

        <Input onChangeInput={handleInputData} type={'email'}
          placeHolder={'Email'} name='email' />

        <Input onChangeInput={handleInputData} type={'password'}
          placeHolder={'Password'} name='password' />

        <Button className='w-full py-3 my-1' >
          Login
        </Button>

      </form>


      <div className="text-center text-sm text-grey-dark mt-4">
        <p> Don't you have an account?</p>
        <Link class="no-underline border-b 
          border-grey-dark text-grey-dark"
          to={'/signup'}
        >
          Signup
        </Link>
      </div>


    </Card>


  )
}

export default Login