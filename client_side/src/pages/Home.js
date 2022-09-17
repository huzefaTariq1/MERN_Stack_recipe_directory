import React, { useState, useEffect } from 'react'
import ColorChanging from '../components/ColorChanging'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import RecipeList from '../components/RecipeList'
import { useRecipieContext } from '../hook/useRecipieContext'




const Home = () => {

  // const [data, setData] = useState(null)
  // const [error, setError] = useState(false)
  // const [ispending, setIspending] = useState(false)

  const {recipie, dispatch} = useRecipieContext()

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:3001/api/recipes")
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'GET_RECIPIE', payload: json})
      }
    }

    
      fetchRecipes()
    
  }, [dispatch])

  // let url="http://localhost:3001/api/recipes"
  // const {data ,ispending ,error}=useFetch(url)
  console.log(recipie)
  return (
    <>
      <Navbar />
      <ColorChanging/>
      {/* {ispending && <Loader />}
      {error && error} */}

      <div className='grid md:grid-cols-3'>
        {recipie && recipie.map((recipe) => {
          return (
            <React.Fragment key={recipe.id}>
              <RecipeList recipe={recipe} />
            </React.Fragment>
          )
        })}
      </div>
      <h1>home</h1>
    </>
  )
}

export default Home