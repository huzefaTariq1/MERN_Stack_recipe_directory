import React from 'react'

const UserRecipieList = ({ recipe }) => {
    console.log(recipe)
    const handleClick=(id)=>{
    console.log(id)
    }
  return (
    <>
    <div className="w-4/5 mx-auto my-auto mb-4 mt max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 " >
  <div className='flex pt-4 pl-4'>
<div className="inline-flex  justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>
<h1 className="p-1.5">{recipe.user.name}</h1>
</div>
    <a href="#">
        <img className="rounded-t-lg p-4 lg:h-72 w-full md:h-56" src={recipe.imageurl} alt=""/>
    </a>
    <div className="pl-5 pr-5 pb-4">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-all">{recipe.method.substring(0, 100)}</p>
        <a onClick={()=>handleClick(recipe._id)} href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
        </a>
    </div>
</div>
    </>
  )
}

export default UserRecipieList