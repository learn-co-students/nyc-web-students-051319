import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux'
import reducer from './reducer'
import beefReducer from './beefReducer'

import { Provider } from 'react-redux'



const rootReducer = combineReducers({user: reducer, beef: beefReducer})

const store = createStore(rootReducer)

// store.dispatch({type: "LIKE"})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

