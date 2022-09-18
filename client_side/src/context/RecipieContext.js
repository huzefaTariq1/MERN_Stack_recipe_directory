import { createContext, useReducer } from 'react'

export const RecipieContext = createContext()

export const RecipieReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RECIPIE': 
      return {
        recipie: action.payload
      }
    case 'CREATE_RECIPIE':
      return {
        recipie: [action.payload, ...state.recipie]
      }
    default:
      return state
  }
}

export const RecipieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecipieReducer, {
    recipie: null
  })

  return (
    <RecipieContext.Provider value={{...state, dispatch}}>
      { children }
    </RecipieContext.Provider>
  )
}