import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ColorChanging = () => {
    let {blue,red,purple}=useContext(ThemeContext)
  return (
    <div className='flex justify-end mx-5 my-2 pt-2 md:pt-0.5 md:mt-5'>
         <div className='w-6 h-6 bg-blue-400 rounded-full mr-1 cursor-pointer' onClick={()=>blue()}>  </div>
        <div className='w-6 h-6 bg-red-400 rounded-full mr-1 cursor-pointer' onClick={()=>red()}>  </div>
        <div className='w-6 h-6 bg-purple-400 rounded-full cursor-pointer' onClick={()=>purple()}>  </div>
    </div>
  )
}

export default ColorChanging