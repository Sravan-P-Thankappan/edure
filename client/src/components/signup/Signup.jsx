
import React, { useState } from 'react'
import Card from '../../ui/card/Card'
import Input from '../input/Input'
import Button from '../../ui/button/Button'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({})
  const [inputError, setInputError] = useState({})


  const validate = (data)=>{
   
    let error = {}
    // const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(data.name===undefined||data.name.trim().length===0) error.name ="Name Is Required"
    if(!emailRegex.test(data.email)) error.email = "Email Is Not Valid"
    if(data.password===undefined||data.password.trim().length<3) error.password ="Password Is Not Strong"
    
    return error
  
  }


  const handleInputData = (data) => {

    setInputData((prev) => {
      return { ...prev, ...data }
    })

  }
 


  const handleSubmit = (e) => {
    e.preventDefault()

   let res = validate(inputData)
   setInputError(res)

   if(Object.keys(res).length===0)
  
   {
    axios.post('http://localhost:5000/signup',inputData)
    .then(()=>{

      navigate('/')
    })

    .catch((er)=>{
         
      console.log(er.response.data.message)
    })

   }

   return;
   

  }

  




  console.log(inputData)

  return (

    <>

      <Card className='min-h-screen'>
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <form onSubmit={handleSubmit} >

          <label htmlFor="" className='text-sm text-red-600'>{inputError.name}</label>

          <Input onChangeInput={handleInputData} type={'text'}
            placeHolder={'Full Name'} name='name' />

          <label htmlFor="" className='text-sm text-red-600'>{inputError.email}</label>

          <Input onChangeInput={handleInputData} type={'email'}
            placeHolder={'Email'} name='email' />


          <label htmlFor="" className='text-sm text-red-600'>{inputError.password}</label>

          <Input onChangeInput={handleInputData} type={'password'}
            placeHolder={'Password'} name='password' />

          <Button className='w-full py-3 my-1'>
            Create Account
          </Button>

        </form>

        <div class="text-center text-sm text-grey-dark mt-4">
          Have  account?

          <Link className="no-underline border-b ml-1
          border-grey-dark text-grey-dark"
            to={'/'}
          >
            Login
          </Link>

        </div>

      </Card>


    </>

  )
}

export default Signup