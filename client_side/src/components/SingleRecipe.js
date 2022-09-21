
import {  useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useAuthContext } from '../hook/useAuthContext'
import { useNavigate } from 'react-router-dom'


const SingleRecipe = ({ recipe }) => {
    const navigate = useNavigate()

let { theme } = useContext(ThemeContext)
const { user } = useAuthContext()


const handleEdit=(id)=>{
    navigate(`/update/${id}`)
  }
    return (
        <div className='mt-5 bg-white w-10/12 mx-auto rounded-md shadow-md p-3'>
            <img className='w-full h-64' src={recipe.imageurl} alt=""/>
            <div className='text-gray-600 text-center text-2xl'> {recipe.title} </div>
            <div className='text-gray-500 text-center text-xl'>{recipe.cooking_time
            }</div>
            <ul className=' w-3/4 mx-auto text-gray-400 md:flex md:justify-between'>
                Ingrediant:
                {recipe && recipe.recipie_ingrediants.map((indg, index) => {
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
       
            { user? user.email===recipe.user.email && <button onClick={()=>(handleEdit(recipe._id))}  className={`${theme[0].bg} hover:${theme[0].bgHover} text-white font-bold py-2 px-4 rounded my-2`}>UpdateMe</button> :""}
            
        </div>

    )
}

export default SingleRecipe