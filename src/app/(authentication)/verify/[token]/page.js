"use client"
import React from "react";
import { useRouter } from "next/navigation";
export default function Verify({params}){
    const router = useRouter()
    setTimeout(()=>{
        router.push('/modules')
    },2500)
    return(
        <React.Fragment>
            <h1>Verifying token: {params.token}, Please wait !!!!</h1>
        </React.Fragment>
    )
}