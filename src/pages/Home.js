import React from 'react'
import Navbar from '../components/Navbar'
import RecipeList from '../components/RecipeList'

const Home = () => {
  return (
     <>
     <Navbar/>
       <h1 className=''>home</h1>
       <div className='grid md:grid-cols-4'>
       <RecipeList/>
       <RecipeList/>
       <RecipeList/>
       <RecipeList/>
       <RecipeList/>
       </div>
   
     </>
  )
}

export default Home