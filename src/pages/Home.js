import  React, {useState} from 'react'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import RecipeList from '../components/RecipeList'
import {useFetch} from '../hook/useFetch'



const Home = () => {

  const [url,setUrl]=useState('http://localhost:3000/recipes')
  const {data:recipes ,ispending ,error}=useFetch(url)
  return (
     <>
     <Navbar/>
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
     </>
  )
}

export default Home