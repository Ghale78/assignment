"use client"
import React,{useState} from 'react'
import {Button} from "@nextui-org/react";
  const calculator = () => {
    // why created state? 
    // let num= 0 will cahnge but not update in the UI
    let [num, setNum] = useState('')
    //multi-array
    const digits = [
        ['7','8','9'],
        ['4','5','6'],
        ['1','2','3'],
        ['0','.','00']
        ]
    
    const symbols = ['+','-','/','*','=','⌫']
   
    const generateDigits = ()=> {
      return  digits.map((item)=>{
        return(
            <div className='flex'>
                {  item.map((val)=>{
                return( <div 
                onClick={()=>setNum(num+val)}
                className=' m-2 w-10 h-10 bg-gray-700 text-2xl text-white text-center rounded-lg'>
                    {val}
                    </div>)
            })}
            </div>
        )
         
        })


    }

    const handleSymbolChange = (symbol)=> {
        if(symbol === '='){
                const output = eval(num)
                setNum(output)
        }else if (symbol === '⌫') {
          setNum(num.slice(0, -1));
        }
        else if (symbol === 'AC') {
          setNum('');
      } else{
          setNum(num+symbol)
        }
    }

    return (
      <div className='bg-stone-950 w-60 rounded '>
      <div className=' text-white text-4xl w-auto '>
         {num}
      </div>
      <div className='flex'>
      <div className='flex-col'>
      {generateDigits()}
      <button className='m-2 p-0 w-10 h-10 bg-gray-700 text-2xl text-white text-center rounded-lg'onClick={() => 
      handleSymbolChange('AC')}>AC</button>
     
    
      </div>
       <div className='flex-col'>
      {symbols.map((item)=>{
        return <div 
        onClick={()=>handleSymbolChange(item)}
        className=' m-2 w-10 h-9 p-0 bg-orange-700 text-2xl text-white text-center rounded-lg'>{item}</div>
      })}
      </div>
      </div>
     
      </div>
    )
  }

export default calculator