'use client'
import {Button, Input } from "@nextui-org/react";
import NavBar from "@/components/navbar/page";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
const Required=()=>{
  return(
  <div textcolor="red-900">
 <h1> * </h1> 
  </div>
)}
const RegisterSchema = Yup.object().shape({
  
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required), 
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required), 
  email: Yup.string().email('Invalid email').required(Required),

});

const register = () => {
   const variants = ["flat", "bordered", "underlined", "faded"];

  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
  
    },
    validationSchema:RegisterSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div >
       <NavBar/>
    <div className="flex justify-center">
    <div className='border border-black m-7 w-72 p-4 rounded-lg'>
    
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName"></label>
      <Input 
      isClearable
      label="FirstName"
      variant={"underlined"}
      onChange={formik.handleChange}
      name="firstName"
      value={formik.values.firstName}
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("firstName", '')
      }
    }
  
      
    />
        {formik.errors.firstName} 
        <label htmlFor="LastName"></label>     
  <Input 
      isClearable
      label="LastName"
      variant={"underlined"}
      onChange={formik.handleChange}
      name="LastName"
      value={formik.values.LastName}
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("LastName", '')
      }
    }
    />
      {formik.errors.lastName} 
      <label htmlFor="email"></label>
      <Input
      isClearable
      type="email"
      label="Email"
      variant={"underlined"}
      onChange={formik.handleChange}
      name="email"
      value={formik.values.email}
      defaultValue=""
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("firstName", '')
      }}
    />
{formik.errors.email}
<label htmlFor="Password"></label>
    <Input
      isClearable
      type="password"
      label="Password"
      variant={"underlined"}
      onChange={formik.handleChange}
      name="password"
      value={formik.values.password}
      className="max-w-xs"  
      onClear={()=>{
        formik.setFieldValue("firstName", '')
      }} 
    />
    {formik.errors.password}
    <Button color="primary" variant="shadow">
      Register
    </Button><br/>
      Already have account ? 
      <Link href='login'>login</Link>
    </form>
    </div>
    </div>
    </div>
  );
};
export default register