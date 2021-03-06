// action creator
import { LIKE, DISLIKE } from './types'

function like(){
  return {type: LIKE}
}

function dislike(){
  return {type: DISLIKE}
}

function toggleDark(){
  return {type: "DARK_MODE"}
}

function handleChange(text){
  return {type: "HANDLE_CHANGE", payload: text}
}


export {
  like,
  dislike,
  toggleDark,
  handleChange
}