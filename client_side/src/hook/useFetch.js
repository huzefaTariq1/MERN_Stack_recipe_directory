import React, { useEffect, useState } from 'react'

export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [ispending, setIspending] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)


    const postData = (postData) => {
        setOptions(
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
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
                if (!respone.ok) {
                    throw new Error(respone.statusText)
                }
                const json = await respone.json()
                setIspending(false)
                setData(json)
                setError(null)
            } catch (err) {
                setIspending(false)
                setError("could not fetch");
                console.log(err.message)
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