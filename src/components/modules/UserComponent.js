import React from "react"

export default function UserComponent({data}){
    return(
        <React.Fragment>
            {
                data.map((v,i)=>{
                    return(
                        <p key={i}>{v?.name?.title} {v?.name?.first} {v?.name?.last}</p>
                    )
                })
            }
        </React.Fragment>
    )
}