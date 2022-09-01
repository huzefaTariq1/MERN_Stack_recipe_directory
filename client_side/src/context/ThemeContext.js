import { createContext ,useReducer } from "react";
import ThemeReducer from './ThemeReducer'


let theme =[{
   // bgColor:"md:flex items-center justify-between bg-red-400  py-4 md:px-10 px-7"
   bg:"bg-red-400",
   bgHover:"bg-red-700"
}]


export const ThemeContext=createContext();


export function ThemeProvider({children}){
    
    const [state,dispatch]=useReducer(ThemeReducer,theme)

    function blue(){
        dispatch({
            type:"blue",
            payload:{ //bgColor:"md:flex items-center justify-between bg-blue-400  py-4 md:px-10 px-7"
                bg:"bg-blue-400",
                bgHover:"bg-blue-700"
            }
        })
 }
 function red(){
    dispatch({
        type:"red",
        payload:{ //bgColor:"md:flex items-center justify-between bg-red-400  py-4 md:px-10 px-7"
            bg:"bg-red-400",
            bgHover:"bg-red-700"
        }
    })
}
function purple(){
    dispatch({
        type:"purple",
        payload:{ //bgColor:"md:flex items-center justify-between bg-purple-400  py-4 md:px-10 px-7"
            bg:"bg-purple-400",
            bgHover:"bg-purple-700"
        }
    })
}


    return(
     <ThemeContext.Provider value={{theme:state,blue,red,purple}} >
     {children}
     </ThemeContext.Provider>
    )
    
}