'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
//click ->skyblue
//re-click -> back to grey
const page = () => {
  let [color, setColor]= useState('grey')
  
  const handleColorChange = ()=>{
          if(color=='grey'){
            setColor('skyblue')
          }else{
            setColor('grey')
          }
  }
return (
  <div>
      <button onClick={()=>handleColorChange()} className='bg-gray-200 p-2 border border-black'>
          <GrLike color={color}/>
          </button>
  </div>
)
}

export default page