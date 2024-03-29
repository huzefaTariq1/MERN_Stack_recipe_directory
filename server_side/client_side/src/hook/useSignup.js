import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
  
    const signup = async (name,email, password) => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('https://project-recipe-directory.herokuapp.com/api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name,email, password })
      })
      const json = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        setError(json.errors[0].param+" "+json.errors[0].msg)
      }
      if (response.ok) {
        // saveing the user to the local storage
        localStorage.setItem('user', JSON.stringify(json))
  
        // update the auth context
        dispatch({type: 'LOGIN', payload: json})
  
        // update loading state
        setIsLoading(false)
      }
    }
  
    return { signup, isLoading, error }
  }