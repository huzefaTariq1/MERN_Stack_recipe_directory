import React , {useState} from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../hook/useFetch'
import Loader from '../components/Loader'
import RecipeList from '../components/RecipeList'

const Search = () => {

  const queryString=useLocation().search
  const queryParam= new URLSearchParams(queryString)
  const q=queryParam.get('q')
  
  let url=`http://localhost:3000/recipes?q=${q}`
  const {data:recipes ,ispending ,error}=useFetch(url)

  return (
    <div>
      <Navbar />
      search
      {ispending && <Loader/>}
     {error && error}

     <div className='grid md:grid-cols-4'>
     {recipes && recipes.map((recipe)=>{
      return(
        <React.Fragment key={recipe.id}>
        <RecipeList recipe={recipe}/>
        </React.Fragment> 
      )
     })}
     </div>
    </div>
  )
}

export default Search