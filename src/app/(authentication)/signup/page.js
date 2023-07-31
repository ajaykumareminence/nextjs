import Link from "next/link";
import React from "react";
export default function SignUp(){
    return(
        <React.Fragment>
            <h1>Sign up</h1>
            <Link href="/login">goto login</Link>
        </React.Fragment>
    )
}