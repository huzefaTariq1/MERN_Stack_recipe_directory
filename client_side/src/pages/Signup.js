import { useState, useContext } from "react"
import Navbar from "../components/Navbar"
import ColorChanging from "../components/ColorChanging"
import { ThemeContext } from "../context/ThemeContext"
import { useSignup } from "../hook/useSignup"


const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()


  let { theme } = useContext(ThemeContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(name, email, password)
  }
  return (
    <>
      <Navbar />
      <ColorChanging />
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
          {error && <div className="flex p-4 mt-1.5 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" ></path></svg>
            <span className="sr-only">Info</span>
            <div>
              {error}
            </div>
          </div>}
          <button disabled={isLoading} type={"submit"} className={`${theme[0].bg} hover:${theme[0].bgHover} text-white mt-1.5 font-bold py-2 px-4 rounded`}>
            Signup
          </button>


        </center>
      </form>
    </>
  )
}

export default Signup