import React,{useContext} from 'react'
import { useUserRecipieContext } from '../hook/useUserRecipieContext'
import { useAuthContext } from '../hook/useAuthContext'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const UserRecipieList = ({ recipe }) => {
    let { theme } = useContext(ThemeContext)
    const { dispatch }=useUserRecipieContext()
    const {user}=useAuthContext()
    const navigate = useNavigate()
    const handleClick = async(id) => {

        if (!user) {
            return
          }
      
          const response = await fetch('https://project-recipe-directory.herokuapp.com/api/recipes/' + id, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          })
        
          const json = await response.json()
        
          if (response.ok) {
            dispatch({type: 'DELETE_USER_RECIPIE', payload: json})
          }
    }

    const handleEdit=(id)=>{
      navigate(`/update/${id}`)
    }
    return (
        <>
            <div className="w-4/5 mx-auto my-auto mb-4 mt max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 " >
                <div className='flex justify-between pt-4 pl-4 items-center'>
                    <div className='flex'>
                        <div className="flex  justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                        </div>
                        <h1 className='flex items-center pl-1.5' >{recipe.user.name}</h1>
                    </div>
                    <div className='mr-4 flex items-center'>
                        <svg onClick={() => handleClick(recipe._id)} className="w-6 h-6 text-gray-600 cursor-pointer" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path   d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        <svg onClick={()=>(handleEdit(recipe._id))} className="w-6 h-6 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path   d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </div>
                </div>

               
                    <img className="rounded-t-lg p-4 lg:h-72 w-full md:h-56" src={recipe.imageurl} alt="" />
               
                <div className="pl-5 pr-5 pb-4">
                    <h1>
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</p>
                    </h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-all">{recipe.method.substring(0, 100)}</p>
                    <button onClick={() => navigate(`/recipes/${recipe._id}`)} className={`${theme[0].bg} hover:${theme[0].bgHover} flex items-center text-white font-bold py-2 px-4 rounded my-2`}>
                        Read more
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserRecipieList