'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
//click ->skyblue
//re-click -> back to grey
const page = () => {

    const [color, setColor]= useState('red')
    const handleColorChange = ()=>{
    setColor('blue')
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