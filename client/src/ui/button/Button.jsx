
import React from 'react'

const Button = ({children,className,onclick}) => {
     
    const setForm = ()=>{
         
        if(typeof onclick ==='function')
        {
            onclick(true)
        }

        return 
       
    
    }
   
          

    return (
        <button
           onClick={setForm}
            type="submit"
            className= {`${className} text-center  rounded bg-[#0a66c2]
             text-white hover:bg-green-dark focus:outline-none `}
        > 
        {children}
        
        </button>
    )
}

export default Button