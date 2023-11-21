import { useState, useEffect } from 'react'

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    // console.log(asyncFunction, dependencies, 'useAsync')
    // console.log(asyncFunction, 'Async function')
    useEffect(() => {
        setLoading(true)
        asyncFunction()
            .then(result => {
                setData(result)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, dependencies)

    return {
        data, 
        loading,
        error
    }
}