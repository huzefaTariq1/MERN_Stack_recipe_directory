import { useState,useContext } from "react"
import Navbar from "../components/Navbar"
import ColorChanging from "../components/ColorChanging"
import { ThemeContext } from "../context/ThemeContext"

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    let {theme}=useContext(ThemeContext)
    const handleSubmit =async (e) => {
        e.preventDefault()
        console.log(name,email,password)
      }
  return (
  <>
   <Navbar />
      <ColorChanging/>
      <form onSubmit={handleSubmit} className='bg-white w-9/12 md:w-7/12 p-3 md:p-10 md:mb-9 lg:mb-9 mx-auto rounded-md'>
      <h1 className='text-3xl text-center mb-6 mt-6 font-[Poppins] font-bold text-gray-700'>Signup</h1>
      
      <label className='my-9'>
          <span className='text-gray-500'>Name</span>
          <input
            type={"text"}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
      
        <label className='my-9'>
          <span className='text-gray-500'>Email</span>
          <input
            type={"email"}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label className='my-9'>
          <span className='text-gray-500'>Password</span>
          <input
            type={"password"}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
      
        
        <center>
          <button type={"submit"} className={`${theme[0].bg} hover:${theme[0].bgHover} text-white mt-1.5 font-bold py-2 px-4 rounded`}>
            Signup
          </button>
        </center>
      </form>
    </>
  )
}

export default Signup