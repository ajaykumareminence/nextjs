import React from "react"

export default function Extra({params}){
    return(
        <React.Fragment>
            <h1>{params.extra.map((v)=>(v))}</h1>
        </React.Fragment>
    )
}