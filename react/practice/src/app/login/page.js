'use client'
import CustomNavbar from "@/components/navbar/page";
import {Input , Button} from "@nextui-org/react";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';
const login = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];
  return (
  <>
      <CustomNavbar/>
      <div className="flex justify-center  bg-">
      <div className='border border-black m-7 w-72 p-4 '>
          <Input type="email" variant={"underlined"} label="Email" />  
          <Input type="Password" variant={"underlined"} label="Password"/>
          <Button color="success" variant="shadow">
          Login
          </Button><br/>
        Don't have account ? <Link href='register'>Register</Link> 
      </div>
      </div>
      </>
  )
}
export default login