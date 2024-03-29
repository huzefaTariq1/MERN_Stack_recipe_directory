import React, { useState, useEffect } from 'react'
import ColorChanging from '../components/ColorChanging'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import RecipeList from '../components/RecipeList'
import { useRecipieContext } from '../hook/useRecipieContext'




const Home = () => {

  // const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [ispending, setIspending] = useState(false)

  const { recipie, dispatch } = useRecipieContext()

  useEffect(() => {

    const fetchRecipes = async () => {

      try {
        setIspending(true)
        const response = await fetch("https://project-recipe-directory.herokuapp.com/api/recipes")
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()
        setIspending(false)
        setError(null)
        if (response.ok) {
          dispatch({ type: 'GET_RECIPIE', payload: json })
        }
      } catch (err) {
        setError("could not Fetch Data")
        console.log(err.msg)
      }

    }

  

    fetchRecipes()

  }, [dispatch])

  return (
    <>
      <Navbar />
      <ColorChanging />
      {ispending && <Loader />}
      {error && error} 

      <div className='grid md:grid-cols-3 w-11/12 ml-auto mr-auto'>
        {recipie && recipie.map((recipe) => {
          return (
            <React.Fragment key={recipe._id}>
              <RecipeList recipe={recipe} />
            </React.Fragment>
          )
        })}
      </div>
     
    </>
  )
}

export default Home