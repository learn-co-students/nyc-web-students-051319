import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import LoginForm from '../components/LoginForm'

import { Route, Switch } from 'react-router-dom'

class App extends Component {

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
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/posts" render={(routerProps) => <MainContainer mode={this.state.mode} searchTerm={this.state.searchTerm} {...routerProps} />} />

          {/* Fall through route - notice the lack of a path. If the URL entered by a user matches none of the above routes, this route will be hit (think default case in a switch statement */}
          
          <Route render={() => <h1>These are not the routes you are looking for...</h1>} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
