
import React, { useEffect, useState,useContext } from 'react'
import Button from '../../ui/button/Button'
import TableData from './TableData'
import TableHead from './TableHead'
import EditContact from '../editContact/EditContact'


const Table = ({ addForm, contacts , onRefresh}) => {
 
  const [form, setForm] = useState(false)
  const [data, setData] = useState({})
  const getUpdateForm = (data) => {

    setData(data)
    setForm(true)
    
  }

  const addContactForm = () => {
    addForm()
  }

  return (


    <>
      {
        !form?
        
        <div className='w-[95%] bg-white shadow-lg mt-10 mx-auto'>
        <div className='flex justify-between items-baseline px-5 py-2'>
          <h1 className='text-lg font-semibold text-[#0a66c2]'>Contact List</h1>
          <Button

            onclick={addContactForm}
            className='px-3 py-2'>
            Add Contact
          </Button>
        </div>

        <table className=" w-full
       border border-gray-300">

          <TableHead />

          {contacts?.map((contact, i) => {
            return (

              <TableData
                key={contact._i}
                contact={contact}
                no={i}
                onclick={getUpdateForm}
                onRefresh={onRefresh}
              />
            )
          })}


        </table>
      </div>
       :

       <EditContact 
       onRefresh={onRefresh}
       setForm={setForm}
       view={data}/>
      
      }

    </>


  )
}

export default Table