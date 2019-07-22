import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import MainContainer from './MainContainer'

class App extends Component {

  state = {
    mode: "card",
    searchTerm: "",
    counter: 0
  }

  handleChange = (event) => {
   this.setState({
    searchTerm: event.target.value.toUpperCase()
   })
  }


  cardMode = () => {
    this.setState({
      mode: "card"
    })
  }

  listMode = () => {
    this.setState({
      mode: "list"
    })
  }

  incrementCounter = () => {
    console.log("INCREMENT START")
    // setState is asynchronous
    // takes 2 possible data types as its first argument:
    // 1. An object
    // 2. A function

    // Why a function?
    // The rule is that if you are using OLD STATE to create your NEW STATE, you should use the function syntax
    this.setState(
      (prevState) => ({counter: prevState.counter + 1})
    )


    // this.setState(prevState => {
    //   return {
    //     stuff: [...prevState.stuff, newStuff]
    //   }
    // })
    // this.setState(prevState => {
    //   return {
    //     toggle: !prevState.toggle
    //   }
    // })

    // Examples of when you use old state
    // 1. Counter
    // 2. Manipulating arrays
    // 3. Toggles
  }

  render(){
    console.log("APP STATE", this.state.counter)
    return (
      <div className="app">
        <button onClick={this.incrementCounter}>{this.state.counter}</button>
        <NavBar searchTerm={this.state.searchTerm} handleChange={this.handleChange} cardMode={this.cardMode} listMode={this.listMode}/>
        <MainContainer mode={this.state.mode} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
