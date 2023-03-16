

import React, { useState, useContext } from 'react'
import Button from '../../ui/button/Button'
import Card from '../../ui/card/Card'
import Input from '../input/Input'
import axios from 'axios'
const AddContact = ({onRefresh}) => {

  

    const [input, setInput] = useState({})
    const id = localStorage.getItem('userId')
    const handleInputData = (data) => {

        setInput((prev) => {
            return { ...prev, ...data }
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        input.userId = id
        axios.post('http://localhost:5000/contact', input)
            .then(() => {
                
                // window.location.reload()
                onRefresh()
               
             
            })

            .catch((er) => {
                console.log(er)
            })

    }

    return (
        <>

            <Card className='h-[94vh]'>


                <h1 class="mb-8 text-3xl text-center">Add Contact</h1>

                <form onSubmit={handleSubmit}>

                    <Input onChangeInput={handleInputData}
                        type={'text'}
                        name={'name'}
                        placeHolder={'Full Name'}
                    />
                    <Input
                        onChangeInput={handleInputData}
                        type={'email'}
                        name={'email'}
                        placeHolder={'Email'}

                    />
                    <Input
                        onChangeInput={handleInputData}
                        type={'number'}
                        name={'phone'}
                        placeHolder={'Phone'}

                    />
                    <Button className='w-full py-3 my-1'>
                        Add Cotact
                    </Button>
                </form>

            </Card>

        </>
    )
}

export default AddContact