
import React from 'react'

const Input = (props) => {

  const handleInput = (e)=>{

   const data= {[e.target.name]:e.target.value}
   props.onChangeInput(data)
  }
  
  return (
      
    <input
    onChange={handleInput}
    type={props.type}
    class="block border border-zinc-300 outline-none w-full p-3 rounded mb-4"
    name={props.name}
    defaultValue={props.value}
    placeholder={props.placeHolder} />
  )
}

export default Input