import React from 'react';
import './App.css';
import NavBar from './NavBar'
import MainContainer from './MainContainer'

class App extends React.Component {

  state = {
    mode: "card",
    searchTerm: ""
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

  render(){
    return (
      <div className="app">
        <NavBar searchTerm={this.state.searchTerm} handleChange={this.handleChange} cardMode={this.cardMode} listMode={this.listMode}/>
        <MainContainer mode={this.state.mode} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
