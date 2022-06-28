import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useFetch } from '../hook/useFetch'


const Create = () => {

  let [title, setTitle] = useState("")
  let [time, setTime] = useState("")
  let [method, setMethod] = useState("")
  let [newIngrediant,setNewIngrediant]=useState("");
  let [ingrediants,setIngrediants]=useState([]);
  
  const {postData,data,error}=useFetch("http://localhost:3000/recipes","POST")


const addIngrediant=()=>{
      newIngrediant=newIngrediant.trim()
     if (newIngrediant && !ingrediants.includes(newIngrediant)){
        setIngrediants(prevIndrediant=>[...prevIndrediant,newIngrediant])
     }
     setNewIngrediant("")
     
}
console.log(ingrediants)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, time, method,ingrediants)
    postData({title,ingrediants,method,time})
  }
  return (
    <>
      <Navbar />
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
            <span className='text-gray-500'>Recipe Ingrediants</span>
            <input
              type={"text"}
              className="w-full my-2 mb-1 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setNewIngrediant(e.target.value)}
              value={newIngrediant}
            />
          </label>
            
             {ingrediants &&
              <ul className='md:flex md:justify-around text-gray-600'>
                {ingrediants.map((ingrediant)=>{
                  return(
                    <li className='list-disc'>
                       {ingrediant}
                    </li>
                  )
                })}
              </ul>}

          <center>
          <button onClick={addIngrediant} className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded my-2">
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
            value={time}
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
          <button type={"submit"} className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </center>
      </form>
    </>

  )
}

export default Create