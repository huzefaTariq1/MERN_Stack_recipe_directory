import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import ColorChanging from '../components/ColorChanging';
import { useAuthContext } from '../hook/useAuthContext';
import { useRecipieContext } from '../hook/useRecipieContext';


const Create = () => {

  let [title, setTitle] = useState("")
  let [cooking_time, setTime] = useState("")
  let [imageurl, setImageurl] = useState("")
  let [method, setMethod] = useState("")
  let [newIngrediant, setNewIngrediant] = useState("");
  let [recipie_ingrediants, setIngrediant] = useState([]);
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])


  const navigate = useNavigate()
  let { theme } = useContext(ThemeContext)
  const { user } = useAuthContext()
  const { dispatch } = useRecipieContext()


  const addIngrediant = () => {
    newIngrediant = newIngrediant.trim()
    if (newIngrediant && !recipie_ingrediants.includes(newIngrediant)) {
      setIngrediant(prevIndrediant => [...prevIndrediant, newIngrediant])
    }
    setNewIngrediant("")

  }

  let url = 'http://localhost:3001/api/recipes'
 

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in Add Recipie')
      return
    }
    const doc = { title, recipie_ingrediants, imageurl, method, cooking_time: `${cooking_time} Minutes` }

    console.log(doc)

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(doc),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.msg)
      console.log(json.msg)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setTime('')
      setImageurl('')
      setMethod("")
      setNewIngrediant("")
      setError(null)
      setEmptyFields([])
      setIngrediant([])
      dispatch({ type: 'CREATE_RECIPIE', payload: json })
      navigate('/') 
    }
  }


return (
  <>
    <Navbar />
    <ColorChanging />
    <h1 className='text-3xl text-center mb-6 mt-6 font-[Poppins] font-bold text-gray-700'>Add Recipes Here</h1>
    <form onSubmit={handleSubmit} className='bg-white w-9/12 md:w-7/12 p-3 md:p-10 md:mb-9 lg:mb-9 mx-auto rounded-md'>
      <label className='my-9'>
        <span className='text-gray-500'>Title</span>
        <input
          type={"text"}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>

      <div className='w-3/5 mx-auto md:w-6/12 my-2 md:mt-5'>
        <label className='my-9'>
          <span className='text-gray-500'>Recipe recipie_ingrediants</span>
          <input
            type={"text"}
            className="w-full my-2 mb-1 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setNewIngrediant(e.target.value)}
            value={newIngrediant}
          />
        </label>

        {recipie_ingrediants &&
          <ul className='md:flex md:justify-around md:flex-wrap text-gray-600 '>
            {recipie_ingrediants.map((recipie_ingrediants) => {
              return (
                <li className='list-disc md:mx-5'>
                  {recipie_ingrediants}
                </li>
              )
            })}
          </ul>}

        <center>
          <button onClick={addIngrediant} className={`${theme[0].bg} hover:${theme[0].bgHover} text-white font-bold py-2 px-4 rounded my-2`}>
            Add
          </button>
        </center>
      </div>

      <label className='my-9'>
        <span className='text-gray-500'>Time In Minutes</span>
        <input
          type={"number"}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setTime(e.target.value)}
          value={cooking_time}
          required
        />
      </label>

      <label className='my-9'>
        <span className='text-gray-500'>Recipe Image Url</span>
        <input
          type={"text"}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setImageurl(e.target.value)}
          value={imageurl}
          required
        />
      </label>

      <label className='my-9'>
        <span className='text-gray-500'>Method</span>
        <textarea

          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setMethod(e.target.value)}
          value={method}
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
        <button type={"submit"} className={`${theme[0].bg} hover:${theme[0].bgHover} text-white font-bold py-2 px-4 rounded`}>
          Create Recipe
        </button>
      </center>
    </form>
  </>

)
}

export default Create