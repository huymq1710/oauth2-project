"use client"

import {useEffect, useState} from "react";

export default function Page() {
    const [headers, setHeaders] = useState<any>()
    useEffect(() => {
        const getHeaders = async () => {
            try {
                const response = await fetch('http://localhost/headers', {
                    credentials: "include"
                }) // Use when having nginx reverse proxy
                const result = await response.json()
                const data = JSON.stringify(result, null, 2)
                setHeaders(data)
            } catch (e) {
                console.error(e)
            }
        }
        getHeaders().then(r => {
        })
    }, []);
    return (
        <pre>
            {headers}
        </pre>
    )
}
