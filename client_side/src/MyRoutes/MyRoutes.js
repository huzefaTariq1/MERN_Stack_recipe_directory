import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
  import Home from '../pages/Home'
  import Create from '../pages/Create'
  import Search from '../pages/Search'
import Recipes from '../pages/Recipes';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import LoginUserRecipes from '../pages/LoginUserRecipes';
import Update from '../pages/Update';

const MyRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/recipies/me' element={<LoginUserRecipes/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/search' element={<Search/>}></Route>  
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/recipes/:id' element={<Recipes/>}></Route>  
          <Route path='*' element={<div>404 Not Found</div>}></Route>  
        </Routes>
        </>
  )
}

export default MyRoutes