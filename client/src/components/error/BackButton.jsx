
import React from 'react'
import { useNavigate } from 'react-router-dom'


const BackButton = () => {
    const navigate = useNavigate()
    return (


        <button className="mt-5"
        onClick={()=>navigate(-1)}
        >
            <p
                className="relative inline-block text-sm font-medium
                     text-[#FF6A3D] group active:text-orange-500 
                     focus:outline-none focus:ring"
            >
                <span
                    className="absolute inset-0 transition-transform
                         translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] 
                         group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span className="relative block px-8 py-3 
                    bg-[#1A2238] border border-current">
                    Go Back
                </span>
            </p>
        </button>

    )
}

export default BackButton