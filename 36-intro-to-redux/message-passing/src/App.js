import React from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
  render(){
    console.log("APP PROPS", this.props)
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggleDark}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={(event) => this.props.handleChange(event.target.value)}/>
        <button onClick={this.props.print}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        {
          this.props.thangs.map(thang => (
            <div>
              <h1>{thang}</h1>
              <button onClick={(event) => {
                this.props.deprint(thang)
              }}>
                X this Thang
              </button>
            </div>
          ))
        }
      </div>
    );
  }
} // end of App component


function msp(state){
  return {
    likes: state.likes,
    darkMode: state.darkMode,    
    text: state.text,    
    thangs: state.thangs   
  }
}

function mdp(dispatch){
  return {
    like: () => { 
      dispatch({type: "LIKE"})
    },
    dislike: () => {
      dispatch({type: "DISLIKE"})
    },
    toggleDark: () => {
      dispatch({type: "DARK_MODE"})
    },
    handleChange: (text) => {
      dispatch({type: "HANDLE_CHANGE", payload: text})
    },
    print: () => {
      dispatch({type: "PRINT"})
    },
    deprint: (text) => {
      dispatch({type: "DEPRINT", payload: text})
    }
  }
}


export default connect(msp, mdp)(App);


