"use client"
import React from "react";
import { useRouter } from "next/navigation";
export default function Login(){
    const router = useRouter()
    return(
        <React.Fragment>
            <h1>Login</h1>
            <button onClick={()=>router.push('/verify/sometoken')}>go to verify token</button>
        </React.Fragment>
    )
}