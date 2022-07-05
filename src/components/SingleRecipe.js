import React from 'react'

const SingleRecipe = ({ recipe }) => {
    return (
        <div className='mt-5 bg-white w-10/12 mx-auto rounded-md shadow-md p-3'>
            <div className='text-gray-600 text-center text-2xl'> {recipe.title} </div>
            <div className='text-gray-500 text-center text-xl'>{recipe.cookingTime}</div>
            <ul className=' w-3/4 mx-auto text-gray-400 md:flex md:justify-between'>
                Ingrediant:
                {recipe.ingrediants.map((indg,index) => {
                    return (
                        <li key={index}>
                            {indg}
                        </li>
                    )
                })}
            </ul>
            <div className='text-gray-500'>
                {recipe.method}
            </div>
        </div>
     
    )
}

export default SingleRecipe