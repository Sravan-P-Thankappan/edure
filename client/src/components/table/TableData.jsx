
import React, { useState } from 'react'
import axios from 'axios'
import Modal from '../modal/Modal'
import { AiFillEye } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";



const TableData = ({ contact, no,onclick,onRefresh }) => {

    const id = localStorage.getItem('userId')
    const [view, setView] = useState({})
    const [modal, setModal] = useState(false)

    const viewContact = () => {
        axios.get('http://localhost:5000/viewcontact/' + id + '/' + contact._id)
            .then((response) => {

                setView(response.data[0].contacts)
                setModal(true)
            })
            .catch((er) => {
                console.log(er)
            })
    }


    const editContact = () => {

        axios.get('http://localhost:5000/viewcontact/' + id + '/' + contact._id)
            .then((response) => {

               onclick(response.data[0].contacts)

            })
    }

    const deleteContact = () => {

        axios.delete('http://localhost:5000/contact/' + id + '/' + contact._id)
            .then(() => {

                console.log('deleted')
                onRefresh()
            })
            .catch(() => {

            })
    }
   
    

    
    return (
        <>
            <tbody>


                <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-x">{no + 1}</td>
                    <td className="text-sm border-x text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {contact.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                        {contact.email}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                        {contact.phone}
                    </td>
                    <td
                        onClick={viewContact}
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x ">
                        <AiFillEye style={{color:'green',cursor:'pointer'}} size={20}/>

                    </td>
                    <td
                        onClick={editContact}
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x ">
                        <AiFillEdit style={{color:'blue',cursor:'pointer'}} size={20}/>

                    </td>
                    <td
                        onClick={deleteContact}
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x ">
                        <AiFillDelete style={{color:'red',cursor:'pointer'}} size={20}/>

                    </td>
                </tr>

            </tbody>



            {modal && <Modal view={view} setModal={setModal} />}

        </>
    )
}

export default TableData