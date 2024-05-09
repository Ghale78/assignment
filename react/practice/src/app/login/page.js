'use client'
import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
const Required=()=>{
  return(
  <div textcolor="red">
 <h1>*</h1> 
  </div>
)}
const SignupSchema = Yup.object().shape({
  
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required(Required),    
  email: Yup.string().email('Invalid email').required(Required),

});
const login = () => {
    const variants = ["flat", "bordered", "underlined", "faded"];

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return ( 

    <div>
      <NavBar/> 
    <div className="flex justify-center bg-green-50 m-4 p-10 ">
    <div className='border border-black m-7 w-72 p-4 rounded-lg '>
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email"></label>
      <Input
      isClearable
      type="Email"
      label="Email"
      variant={"underlined"}
      onChange={formik.handleChange}
      name="email"
      value={formik.values.email}
      defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />

{formik.errors.email}
    <Input
      isClearable
      type="password"
      label="Password"
      variant={"underlined"}
      onChange={formik.handleChange}
      name="password"
      value={formik.values.password}    
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
       {formik.errors.password}

       <Button color="success" variant="shadow">
          Login
          </Button><br/>
        Don't have account ? <Link href='register'>Register</Link> 
  </form>
    </div>
    </div>
    </div>
  );
};

export default login