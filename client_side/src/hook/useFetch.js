import React, { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [ispending, setIspending] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const { user } = useAuthContext()

    const postData = (postData) => {
        setOptions(
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                  },
                body: JSON.stringify(postData)
            }
        )
    }

    useEffect(() => {
        const fetchdata = async (fetchOptions) => {
            setIspending(true)

            try {
                const respone = await fetch(url,{...fetchOptions})
                
                const json = await respone.json()
                if (!respone.ok) {
                    //throw new Error(respone.statusText)
                    setError(json.msg)
                    console.log(json.msg)
                }
                setIspending(false)
                setData(json)
                setError(null)
            } catch (err) {
                setIspending(false)
                //setError("could not fetch");
                //console.log(err.message)
            }

        }


        if (method === "GET") {
            fetchdata()
        }

        if (method === "POST" && options) {
            fetchdata(options)
        }
    }, [url,options,method])
    return { data, ispending, error, postData }
}