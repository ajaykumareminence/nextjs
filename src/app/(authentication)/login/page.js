"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from 'yup';
export default function Login() {
    const router = useRouter()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:yup.object({
            email: yup.string().email('Invalid email format').required('Email is required'),
            password: yup.string().required('Password is required')
        }),
        onSubmit: async(values) => {
            console.log(values)
            router.push('/verify/providedtoken')
        }
    })
    const {values, handleSubmit, handleChange, errors, touched } = formik;
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="email" placeholder="Enter email" onChange={handleChange} value={values.email} /><br />
                    {errors.email && touched.email && <span style={{ fontSize: '13px' }}>{errors.email}</span>}
                </div>
                <br />

                <div>
                    <input type="password" name="password" placeholder="Enter password" onChange={handleChange} value={values.password} /><br />
                    {errors.password && touched.password && <span style={{ fontSize: '13px' }}>{errors.password}</span>}
                </div>
                <br />

                <input type="submit" />
            </form>
        </React.Fragment>
    )
}