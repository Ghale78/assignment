
'use client'

import CustomNavbar from "@/components/navbar/page";
import {Button,Input} from "@nextui-org/react";
import Link from "next/link";

const login = () => {
  return (
  <>
      <CustomNavbar/>
      <div className="flex justify-center ">
      <div className='border border-black m-7 w-72 p-4 '>
      <Input type="email" label="Email" />  
          <Input type="Password" label="Password"/>
          <Button color="primary" variant="shadow">
        Sign in 
      </Button><br/>
        Don't have account ? <Link href='register'>Sign up</Link> 
      </div>
      </div>
      </>
  )
}

export default login