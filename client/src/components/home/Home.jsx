
import React, { useState, useEffect } from 'react'
import AddContact from '../addContact/AddContact'
import Navbar from '../navbar/Navbar'
import Table from '../table/Table'
import axios from 'axios'

const Home = () => {


  const [form, setForm] = useState(false)
  const [contacts, setContacts] = useState([])
  const [toggle,setToggle] = useState()
  const addForm = () => {
    setForm(true)
        
  }


  const fetchContact = () => {
    const id = localStorage.getItem('userId')

    axios.get('http://localhost:5000/contact/' + id)
      .then((response) => {

        setContacts(response.data.contacts)
      })
      .catch((er) => {
        console.log(er)
      })

  }


  useEffect(() => {
    fetchContact()
  }, [])

  const refresh = () => {

    
    fetchContact()
    setForm(false)
  }

  return (
    <>
      <Navbar toggle={setToggle} setForm={setForm} />

      {!form ?
        <Table onRefresh={refresh} 
        contacts={contacts} 
        addForm={addForm}
       
        /> :
        <AddContact onRefresh={refresh} />}

    </>

  )
}

export default Home