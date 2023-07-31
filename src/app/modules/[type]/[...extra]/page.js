import React from "react"

export default function Extra({params}){
    return(
        <React.Fragment>
            <h1>Multiple Slugs: {params.extra.map((v,i)=>(
                <React.Fragment key={i}>
                    {v},
                </React.Fragment>
            ))}</h1>
        </React.Fragment>
    )
}