import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import SingleRecipe from '../components/SingleRecipe';
import ColorChanging from '../components/ColorChanging';


const Recipes = () => {
  let { id } = useParams();
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [ispending, setIspending] = useState(false)


  useEffect(() => {

    const fetchRecipes = async () => {

      try {
        setIspending(true)
        const response = await fetch(`http://localhost:3001/api/recipes/${id}`)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()
        setIspending(false)
        setError(null)
        if (response.ok) {
          setData(json)
        }
      } catch (err) {
        setError("could not Fetch Data")
        console.log(err.msg)
      }

    }

    

    fetchRecipes()

  },[id])

  return (
    <>
      <Navbar />
      <ColorChanging />
      {ispending && <Loader />}
      {error && error}
    
       {data &&  <SingleRecipe recipe={data}  />} 
        
    </>
  )
}

export default Recipes