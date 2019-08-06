import React from 'react';
import './App.css';
import Child from "./Child"
import { connect } from 'react-redux'

import { like, dislike, toggleDark, handleChange, choosePokemon } from './actions'

class App extends React.Component {

  state = {
    pokeID: 1
  }

  componentDidMount(){
    this.props.choosePokemon(this.state.pokeID)
    .then(() => console.log("I CAN NOW SET LOCAL STATE IF I HAVE IT"))
  }

  next = () => {
    this.setState({
      pokeID: this.state.pokeID + 1
    }, () => this.props.choosePokemon(this.state.pokeID))
  }


  render(){
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        {this.props.loading ? <h1>Loading...</h1> : <img src={this.props.pokePicture} alt=""/>}
        <button onClick={this.next}>Next!</button>
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

        <Child/>
      </div>
    );
  }
} // end of App component


function msp(state){
  return {
    likes: state.user.likes,
    darkMode: state.user.darkMode,    
    text: state.user.text,    
    thangs: state.user.thangs,
    pokePicture: state.user.pokePicture,
    loading: state.user.loading
  }
}

export default connect(msp, {
  like, 
  dislike, 
  toggleDark, 
  handleChange,
  choosePokemon
})(App);


