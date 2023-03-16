

import axios from 'axios'
import React, { useState } from 'react'
import Button from '../../ui/button/Button'
import Card from '../../ui/card/Card'
import Input from '../input/Input'


const EditContact = ({ view,onRefresh,setForm }) => {

    const id = localStorage.getItem('userId')

    const [input, setInput] = useState({ ...view })

    const handleInputData = (data) => {
        console.log(data)
        setInput((prev) => {
            return { ...prev, ...data }
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(input)

        axios.post('http://localhost:5000/updatecontact/' + id + '/' + view._id, input)
            .then((response) => {
              
                onRefresh()
                setForm(false)
            })
            .catch((er) => {
                console.log(er)
            })
    }
    return (


        <>

            <Card className='h-[94vh]'>


                <h1 class="mb-8 text-3xl text-center">Edit Contact</h1>

                <form onSubmit={handleSubmit}>

                    <Input onChangeInput={handleInputData}
                        type={'text'}
                        name={'name'}
                        value={view.name}
                        placeHolder={'Full Name'}
                    />
                    <Input
                        onChangeInput={handleInputData}
                        type={'email'}
                        name={'email'}
                        value={view.email}
                        placeHolder={'Email'}

                    />
                    <Input
                        onChangeInput={handleInputData}
                        type={'number'}
                        name={'phone'}
                        value={view.phone}
                        placeHolder={'Phone'}

                    />
                    <Button className='w-full py-3 my-1'>
                        Update Cotact
                    </Button>
                </form>

            </Card>

        </>
    )
}

export default EditContact