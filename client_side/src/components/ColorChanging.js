import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ColorChanging = () => {
    let {blue,red,purple}=useContext(ThemeContext)
  return (
    <div className='flex justify-end mx-5 my-2'>
         <div className='w-6 h-6 bg-blue-400 rounded-full' onClick={()=>blue()}>  </div>
        <div className='w-6 h-6 bg-red-400 rounded-full' onClick={()=>red()}>  </div>
        <div className='w-6 h-6 bg-purple-400 rounded-full' onClick={()=>purple()}>  </div>
    </div>
  )
}

export default ColorChanging