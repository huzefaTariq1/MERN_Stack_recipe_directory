import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
    const [term,setterm]=useState("")
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
      e.preventDefault()
      navigate(`/search?q=${term}`)
    }
  return (
   <>
   <form onSubmit={handleSubmit} className='text-black'>
   <input
    className='border rounded-lg pl-3  w-32 focus:outline-none focus:border-grey-500 focus:ring-grey-500  focus:ring-1 sm:mr-2' type={"text"} placeholder='Enter text' 
   onChange={(e)=>setterm(e.target.value)}
   />
   </form>
   </>
  )
}

export default SearchBar