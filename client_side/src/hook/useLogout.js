import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext()
  
    const logout = () => {
      // removeing the user from localstorage
      localStorage.removeItem('user')
  
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })
    }
  
    return { logout }
  }