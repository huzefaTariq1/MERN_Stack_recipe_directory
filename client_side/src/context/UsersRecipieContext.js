import { createContext, useReducer } from 'react'

export const UsersRecipieContext = createContext()

export const UsersRecipieReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_RECIPIE': 
      return {
        usersrecipie: action.payload
      }
    case 'DELETE_USER_RECIPIE':
      return {
        usersrecipie: state.usersrecipie.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const UsersRecipieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersRecipieReducer, {
    usersrecipie: null
  })

  return (
    <UsersRecipieContext.Provider value={{...state, dispatch}}>
      { children }
    </UsersRecipieContext.Provider>
  )
}