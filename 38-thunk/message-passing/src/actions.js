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

// function choosePokemon(pokeURL){
//   return {type: "I_CHOOSE_YOU", payload: pokeURL}
// }

function choosePokemon(pokeID){
  return function(dispatch){
    dispatch({type: "TOGGLE_LOAD"})

    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: "I_CHOOSE_YOU", payload: data.sprites.front_default})
      dispatch({type: "TOGGLE_LOAD"})
    })

  }
}

function template(argsFromComponent){
  return function(dispatch){
  }
}


export {
  like,
  dislike,
  toggleDark,
  handleChange,
  choosePokemon
}