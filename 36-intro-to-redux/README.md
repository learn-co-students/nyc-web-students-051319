Intro to Redux
==============

## SWBATs

### Redux
- [x] Install the redux library so it can be used in a project.
- [x] Create a `store` in redux with some default `state`.
- [x] Create a `reducer` to change `state` based on an `action.type`.
- [x] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [x] Read `state` in the `store`.

### React Redux
- [ ] Install the `react-redux` library so it can be used in a project.
- [ ] Make the `store` available to their application by using the `Provider` component.
- [ ] Use `connect` to give components the ability to listen for changes to the `store`.
- [ ] Use `dispatch` in a React component.
- [ ] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [ ] Rethinking in React with Redux


## Lecture Notes

// your reducer is called once upon initialization automatically so that you can initialize your default state

// when you call `createStore`, you must pass in a function that will act as your reducer

  // whatever is return from the reducer BECOMES state


// dispatch - is going to be your new setState
// it takes an object called an "action" as its argument
// the action is just an object that MUST always have a "type" attribute
// dispatch calls your reducer

Redux **will** test your JavaScript knowledge to the **MAX**!!!


### Vocabulary
- [x] Redux - a global state management system
- [x] store - return value of the `createStore`. holds your global state. also contains the functions for reading (`getState`) and writing (`dispatch`) to state
- [x] reducer - a function that is used to create new state by REDUCING the old state and the incoming data (payload) into a new state. uses message passing based on your `action.type` to control what gets returned
- [x] getState() - gets the state (read state)
- [x] dispatch() - changes state (write state)
- [x] action - contains the message that tells your reducer how to change state. always has a `type` attribute, may have `payload` attribute to contain incoming data. a POJO
- [x] type - attribute of the action containing a string that is used to control program flow in the reducer
- [x] payload - part of the action. contains the data that will be used to change state

### React Redux
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] Provider
- [ ] connect()

### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```


### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)
