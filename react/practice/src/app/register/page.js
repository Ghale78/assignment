
'use client'

import CustomNavbar from "@/components/navbar/page";
import {Button,Input,} from "@nextui-org/react";
import Link from "next/link";


const Register = () => {
  return (
  <>
      <CustomNavbar/>
      <div className="flex justify-center ">
      <div className='border border-red m-7 w-72 p-4 '>
              <Input type="text" label="First Name" /> <br/>
              <Input type="text" label="LastName" /> <br/>
              <Input type="number" label="PhoneNumber" /> <br/>
              <Input type="email" label="Email" /> <br/>
              <Input type="Password" label="password" /> <br/>
              <Button isDisabled color="primary">
      Sign up
    </Button><br/>
      Have account ? <Link href='login'>login</Link>
      </div>
      </div>
      </>
  )
}

export default Register