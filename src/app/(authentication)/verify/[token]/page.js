import React from "react";
import Link from "next/link";
export default function Verify({params}){
    return(
        <React.Fragment>
            <h1>VerifyToken: {params.token}</h1>
            <Link href="/modules">view services</Link>
        </React.Fragment>
    )
}