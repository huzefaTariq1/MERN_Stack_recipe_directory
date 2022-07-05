import React from 'react'
import { useNavigate } from "react-router-dom";
import { projectFirestore } from '../firebase/config';
const RecipeList = ({recipe}) => {
  let navigate = useNavigate();
 
  const handleDelete=(id)=>{
     projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <>

       <div className='bg-white rounded-md w-10/12 mx-auto my-2'>
        <div className='p-5'>
        <h1 className='text-gray-600 font-bold text-3xl '>{recipe.title}</h1>
        <h1 className='text-gray-500 text-xl'>{recipe.cookingTime}</h1>
        <h1 className='text-gray-500 text-sm ' >{recipe.method.substring(0, 100)} </h1>
        <center><button onClick={()=>navigate(`/recipes/${recipe.id}`)} className='bg-gray-300 p-1 px-4 rounded-lg mt-3'>Cook This</button></center>
        <button onClick={()=>handleDelete(recipe.id)}>delete</button>
        </div>
       </div>

       </>
  )
}

export default RecipeList