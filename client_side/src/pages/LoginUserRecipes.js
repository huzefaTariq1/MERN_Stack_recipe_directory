import React,{ useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useUserRecipieContext } from "../hook/useUserRecipieContext"
import { useAuthContext } from "../hook/useAuthContext"
import Navbar from "../components/Navbar"
import ColorChanging from "../components/ColorChanging"
import UserRecipieList from "../components/UserRecipieList"



const LoginUserRecipes = () => {
  const navigate = useNavigate()
  const {usersrecipie ,dispatch}=useUserRecipieContext()
  const {user}=useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3001/api/recipes/me', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        },
      })
      const json = await response.json()
   
      if (response.ok) {
        dispatch({type: 'GET_USER_RECIPIE', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])
 
  return (
    <>
    <Navbar/>
    <ColorChanging/>
    {user? <div className='grid md:grid-cols-3'>
        {usersrecipie && usersrecipie.map((recipe) => {
          return (
            <React.Fragment key={recipe._id}>
              <UserRecipieList recipe={recipe}/>
            </React.Fragment>
          )
        })}
      </div>: navigate('/')}
   
    </>
   
  )
}

export default LoginUserRecipes
