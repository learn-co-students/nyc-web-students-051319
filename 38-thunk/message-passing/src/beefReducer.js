const defaultState = {
  sauce: "A1",
  bones: "calcium",
  likes: 0,
  delicious: true
}

function beefReducer(state = defaultState, action){
  switch(action.type){
    case "LIKE":
      return {...state, likes: state.likes + 10}
    default:
     return state
  }
}

export default beefReducer