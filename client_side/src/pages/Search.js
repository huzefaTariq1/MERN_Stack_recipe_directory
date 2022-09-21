// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { useLocation } from 'react-router-dom'
// import { useFetch } from '../hook/useFetch'
// import Loader from '../components/Loader'
// import RecipeList from '../components/RecipeList'
// import NoItem from '../components/NoItem'

// const Search = () => {

//   const queryString = useLocation().search
//   const queryParam = new URLSearchParams(queryString)
//   const q = queryParam.get('q')

//   let url = `http://localhost:3000/recipes?q=${q}`
//   const { data: recipes, ispending, error } = useFetch(url)
//   console.log(recipes)

//   return (
//     <div> 
//       <Navbar />
      
//       {ispending && <Loader />}
//       {error && error}

//       <div className='grid md:grid-cols-4'>
//         {recipes && recipes.map((recipe) => {
//           return (
//             <React.Fragment key={recipe.id}>
//               <RecipeList recipe={recipe} />
//             </React.Fragment>
//           )
//         })}
//       </div>

//       {recipes && recipes.length===0 && <NoItem/>}
//     </div>
//   )
// }

// export default Search