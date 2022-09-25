const ThemeReducer=(state,action)=>{
    switch(action.type){
        case "red":{
            return [action.payload]
        }

        case "blue":{
            return [action.payload]
        }

        case "purple":{
            return [action.payload]
        }

       
        default:
            return state;
    }
}

export default ThemeReducer;