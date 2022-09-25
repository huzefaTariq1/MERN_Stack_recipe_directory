import { RecipieContext } from '../context/RecipieContext'
import { useContext } from 'react'

export const useRecipieContext = () => {
  const context = useContext(RecipieContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}