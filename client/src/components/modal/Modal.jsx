
import React from 'react'

const Modal = ({ view,setModal}) => {
    return (




        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-6/12 my-6 mx-auto max-w-3xl">

                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold text-center">
                                Details
                            </h3>
                            <button
                                className=" ml-auto bg-red-500 border-0 text-slate-200  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"

                            >
                                <span
                                onClick={()=>setModal(false)}
                                className=" text-slate-200  mb-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative w-full flex flex-col items-center p-6">

                            <div className='flex justify-between gap-5'>

                                <div>
                                    <p>Name:</p>
                                    <p>Email:</p>
                                    <p>Phone:</p>
                                </div>

                                <div>
                                    <p>{view.name}</p>
                                    <p>{view.email}</p>
                                    <p>{view.phone}</p>
                                </div>

                            </div>



                        </div>
                        {/*footer*/}

                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>


    )
}

export default Modal