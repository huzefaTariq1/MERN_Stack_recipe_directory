import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [ispending, setIspending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchdata = async () => {
            setIspending(true)

            try 
            {
                const respone = await fetch(url)
                if (!respone.ok){
                    throw new Error(respone.statusText)
                }
                const json = await respone.json()
                setIspending(false)
                setData(json)
                setError(null)
            }catch(err){
                setIspending(false)
                setError("could not fetch");
                console.log(err.message)
            }
         
        }
        fetchdata()
    }, [url])
    return { data, ispending,error }
}