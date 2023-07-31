import React from "react";
import Link from "next/link";
export default function Services() {
    const service_data = [
        "flights",
        "cars",
        "vacations",
        "paragliding"
    ]
    
    return (
        <React.Fragment>
            <h1>choose a service</h1>
            {service_data.map((v, i) => (
                <React.Fragment key={i}>
                    <Link href={'/modules/' + v}>{v}</Link><br />
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}