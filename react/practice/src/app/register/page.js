
'use client'

import CustomNavbar from "@/components/navbar/page";
import {Button,Input,} from "@nextui-org/react";
import Link from "next/link";
const Register = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];
  return (
  <>
  
      <CustomNavbar/>
      <div className="flex justify-center" >
      <div className='border border-black m-7 w-72 p-4 '>
              <Input type="text" label="FirstName"variant={"underlined"} /> <br/>
              <Input type="text" label="LastName"variant={"underlined"}/> <br/>
              <Input type="number" label="PhoneNumber"variant={"underlined"}/> <br/>
              <Input type="email" label="Email"variant={"underlined"}/> <br/>
              <Input type="Password" label="Password"variant={"underlined"} /> <br/>
     <Button color="primary" variant="shadow">
      Register
    </Button><br/>
      Already have account ? 
      <Link href='login'>login</Link>
      </div>
      </div>
      </>
  )
}

export default Register