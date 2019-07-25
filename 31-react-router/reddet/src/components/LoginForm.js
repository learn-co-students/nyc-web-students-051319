import React from 'react'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.password === "123"){
      console.log(this.props)
      this.props.history.push("/posts")
    } else {
      alert("hold your horses!")
    }
  }

  render(){
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange}placeholder="username"/>
          <input name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/>
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
  
}

export default LoginForm