import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

import { Route, Switch } from 'react-router-dom'

class App extends Component {

  state = {
    mode: "card",
    searchTerm: "",
    currentUser: null
  }

  componentDidMount(){
    const token = localStorage.token

    if(token){
      //get user info

      fetch("http://localhost:3001/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    }
  }

  setUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/posts")
    })
    
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/login")
    })
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
    console.log("USER", this.state.currentUser)
    return (
      <div className="app">
        <NavBar currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} handleChange={this.handleChange} logout={this.logout} cardMode={this.cardMode} listMode={this.listMode}/>
        <Switch>
          <Route path="/login" render={() => <LoginForm setUser={this.setUser}/>}/>
          <Route path="/signup" render={() => <SignupForm setUser={this.setUser}/>}/>
          <Route path="/posts" render={(routerProps) => <MainContainer mode={this.state.mode} searchTerm={this.state.searchTerm} {...routerProps} />} />

          {/* Fall through route - notice the lack of a path. If the URL entered by a user matches none of the above routes, this route will be hit (think default case in a switch statement */}
          
          <Route render={() => <h1>These are not the routes you are looking for...</h1>} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
