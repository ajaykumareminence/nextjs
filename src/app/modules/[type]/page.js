"use client"
import React, { useEffect, useState, useRef } from "react";
import { getUser } from "@/services/modules.js";
import UserComponent from "@/components/modules/UserComponent.js";
import RandomModal from "@/modals/RandomModal.js";
import Link from "next/link";
export default function Types({ params }) {
    const my_modal = "hello-modal";
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getUserApi(){
        setLoading(true)
        let response = await getUser();
        setLoading(false)
        if(response.hasOwnProperty('results')){
            setUsers(response.results || [])
        }
    }
    function show(id){
        let element = document.getElementById(id);
        element.showModal()
    }
    useEffect(() => {
        getUserApi()
    }, [])
    const multi_slug = [
        'a',
        'a/b',
        'a/b/c',
        'a/b/c/d'
    ]
    return (
        <React.Fragment>
            <h1>You selected: {params.type}</h1>

            {
                loading
                ?
                'Loading..please wait!!!'
                :
                users?.length == 0 
                ?
                "no users found"
                :
                <UserComponent data={users}/>
            }
            <button onClick={()=>show(my_modal)}>
                say hello!!
            </button>
            <br />
            {multi_slug.map((v,i)=>{
                return(
                    <React.Fragment key={i}>
                    <Link href={`services/${params.type}/${v}`} >{v}</Link><br />
                    </React.Fragment>
                )
            })}
            <RandomModal id={my_modal}/>

        </React.Fragment>
    )
}