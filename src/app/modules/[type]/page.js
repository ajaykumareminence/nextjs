"use client"
import React, { useEffect, useState, useRef } from "react";
import { getUser } from "@/services/modules.js";
import UserComponent from "@/components/modules/UserComponent.js";
import RandomModal from "@/modals/RandomModal.js";
import Link from "next/link";
import { getCountry } from "@/services/modules.js";
export default function Types({ params }) {
    const my_modal = "hello-modal";
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([])
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
    async function get(){
        const response = await getCountry();
        setCountries(response)
    }
    useEffect(()=>{
        get()
    },[])
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
            <hr />
            <br />

            {countries.map((v,i)=>{
                return(
                    <div key={i}>
                        <Link href={`/modules/${params.type}/${v.name.common}`}>{v.name.official}</Link>


                    </div>
                )
            })}
            <RandomModal id={my_modal} data="Ajay"/>

        </React.Fragment>
    )
}