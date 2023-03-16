
import React from 'react'

const Card = ({ children ,className}) => {
    return (
        <div className={`bg-slate-300  flex flex-col ${className}`}>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">

                    {children}

                </div>

            </div>
        </div>
    )
}

export default Card