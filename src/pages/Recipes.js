import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hook/useFetch';
import Loader from '../components/Loader';
import SingleRecipe from '../components/SingleRecipe';


const Recipes = () => {
  let { id } = useParams();
  const [url, setUrl] = useState(`http://localhost:3000/recipes/${id}`)
  const { data: recipe, ispending, error } = useFetch(url)
  console.log(id)
  console.log(recipe)
  return (
    <>
      <Navbar />
      {ispending && <Loader />}
      {error && error}

      {recipe &&  <SingleRecipe recipe={recipe} />}
        

      <h1 className='text-red-500'>hello recipes</h1>
    </>
  )
}

export default Recipes