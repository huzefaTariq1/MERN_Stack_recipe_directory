import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import RecipeList from '../components/RecipeList'
import { projectFirestore } from '../firebase/config'




const Home = () => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [ispending, setIspending] = useState(false)

  useEffect(() => {
    setIspending(true)
     const unsub=  projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('No recipes to Load')
        setIspending(false)
      }
      else {
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() })
          setData(results)
          setIspending(false)
        })
      }
    },(err=>{
      setError(err.message)
      setIspending(false)
    }))

    return ()=>unsub()
  }, [])

  return (
    <>
      <Navbar />
      {ispending && <Loader />}
      {error && error}

      <div className='grid md:grid-cols-4'>
        {data && data.map((recipe) => {
          return (
            <React.Fragment key={recipe.id}>
              <RecipeList recipe={recipe} />
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default Home