import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import SingleRecipe from '../components/SingleRecipe';
import { projectFirestore } from '../firebase/config';


const Recipes = () => {
  let { id } = useParams();
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [ispending, setIspending] = useState(false)

  // NO MORE NEED THIS BCZ NOW FETCH DATA FROM FIREBASE DATA STORE
  // const [url, setUrl] = useState(`http://localhost:3000/recipes/${id}`)
  // const { data: recipe, ispending, error } = useFetch(url)
  // console.log(id)
  // console.log(recipe)

  useEffect(()=>{
   setIspending(true)
    const unsub= projectFirestore.collection('recipes').doc(id).onSnapshot((document)=>{
    if (document.exists){
     setData(document.data())
     setIspending(false)
    }else
    {
      setError("could not find that recipe")
      setIspending(false)
    }
   },err=>{
    setError(err.message)
    setIspending(false)
   })
   return ()=>  unsub()
  },[id])
 
  const handleUpdate=()=>{
    projectFirestore.collection('recipes').doc(id).update({
      title:"someThing Different"
    })
  }

  return (
    <>
      <Navbar />
      {ispending && <Loader />}
      {error && error}

      {data &&  <SingleRecipe recipe={data} handleUpdate={handleUpdate} />}
        
    </>
  )
}

export default Recipes