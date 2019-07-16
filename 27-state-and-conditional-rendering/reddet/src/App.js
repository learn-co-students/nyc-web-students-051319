import React from 'react';
import './App.css';
import NavBar from './NavBar'
import MainContainer from './MainContainer'

class App extends React.Component {

  state = {
    mode: "card"
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
        <NavBar cardMode={this.cardMode} listMode={this.listMode}/>
        <MainContainer mode={this.state.mode} />
      </div>
    );
  }
}

export default App;
