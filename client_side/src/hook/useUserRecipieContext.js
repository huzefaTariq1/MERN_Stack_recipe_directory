import { UsersRecipieContext } from '../context/UsersRecipieContext'
import { useContext } from 'react'

export const useUserRecipieContext = () => {
  const context = useContext(UsersRecipieContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}