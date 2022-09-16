import React from 'react'
import { useNavigate } from "react-router-dom";
import { projectFirestore } from '../firebase/config';
const RecipeList = ({ recipe }) => {
  let navigate = useNavigate();
  console.log(recipe)
  const handleDelete = (id) => {
   // projectFirestore.collection('recipes').doc(id).delete()
   console.log('delete')
  }

  return (
    <>

      {/* <div className='bg-white rounded-md w-10/12 mx-auto my-2'>
        <div className='p-5'>
          <div className='flex justify-between'>
            <h1 className='text-gray-600 break-all font-bold text-3xl '>{recipe.title}</h1>
            <img className='cursor-pointer' onClick={() => handleDelete(recipe._id)} src="img/del.png" alt='delete' />
          </div>
          <h1 className='text-gray-500 text-xl'>{recipe.cookingTime}</h1>
          <h1 className='text-gray-500 break-all text-sm md:h-10  ' >{recipe.method.substring(0, 100)} </h1>
          <center><button onClick={() => navigate(`/recipes/${recipe.id}`)} className='bg-gray-300 p-1 px-4 rounded-lg mt-3'>Cook This</button></center>
        </div>
      </div> */}

<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg p-4 lg:h-72 w-full md:h-56" src={recipe.imageurl} alt=""/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 break-all">{recipe.method.substring(0, 100)}</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

    

    </>
  )
}

export default RecipeList