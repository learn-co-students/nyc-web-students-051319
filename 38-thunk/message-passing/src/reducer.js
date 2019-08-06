import { LIKE, DISLIKE } from './types'

const defaultState = {
  likes: 0,
  text: "",
  darkMode: false,
  thangs: [],
  pokePicture: "",
  loading: false
}

function reducer(prevState=defaultState, action){

  switch(action.type){
    case LIKE:
      return {...prevState, likes: prevState.likes + 1}
    case DISLIKE:
      return {...prevState, likes: prevState.likes - 1}
    case "DARK_MODE":
      return {...prevState, darkMode: !prevState.darkMode}
    case "HANDLE_CHANGE":
      return {...prevState, text: action.payload}
    case "PRINT":
      return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
    case "DEPRINT":
      return {
        ...prevState, 
        thangs: prevState.thangs.filter(thang => {
          return thang !== action.payload
        })}
    case "I_CHOOSE_YOU":
      return {...prevState, pokePicture: action.payload}
    case "TOGGLE_LOAD":
      return {...prevState, loading: !prevState.loading}
    default: 
      return prevState
  }

}

export default reducer