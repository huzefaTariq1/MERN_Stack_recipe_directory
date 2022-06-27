import React from 'react'

const RecipeList = () => {
  return (
    <>

       <div className='bg-white rounded-md w-10/12 mx-auto my-2'>
        <div className='p-5'>
        <img className='w-full h-full' src="img/dish.jpeg" alt='dish'></img>
        <h1 className='text-gray-600 font-bold text-3xl '>Biryani</h1>
        <h1 className='text-gray-500 text-xl'>35 mins to make</h1>
        <h1 className='text-gray-500 text-sm ' >lorem sjhasash dsauhdusa usdhsuydg lorem sjhasash dsauhdusa usdhsuydglorem sjhasash dsauhdusa </h1>
        <center><button className='bg-gray-300 p-1 px-4 rounded-lg mt-3'>Cook This</button></center>
        </div>
       </div>

       </>
  )
}

export default RecipeList