"use client"
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
export default function SignUp(){
    const router = useRouter()
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
            name: yup.string().required('Name is required'),
            email: yup.string().email('Invalid email format').required('Email is required'),
            password: yup.string().required('Password is required')
        }),
        onSubmit: async(values) => {
            console.log(values)
            router.push('/login')
        }
    })
    const {values, handleSubmit, handleChange, errors, touched } = formik;
    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Enter name" onChange={handleChange} value={values.name}/><br />
                    {errors.name && touched.name && <span style={{fontSize:'13px'}}>{errors.name}</span>}
                </div>
                <br />
                <div>
                    <input type="text" name="email" placeholder="Enter email" onChange={handleChange} value={values.email}/><br />
                    {errors.email && touched.email && <span style={{fontSize:'13px'}}>{errors.email}</span>}
                </div>
                <br />

                <div>
                    <input type="password" name="password" placeholder="Enter password" onChange={handleChange} value={values.password}/><br />
                    {errors.password && touched.password && <span style={{fontSize:'13px'}}>{errors.password}</span>}
                </div>
                <br />

                <input type="submit" />
            </form>
        </React.Fragment>
    )
}