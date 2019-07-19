import React from 'react'
import Grandchild from './Grandchild'

export default class Child extends React.Component {

  state = {
    timer: 0
  }

  incrementTimer = () => {
    this.setState({
      timer: this.state.timer + 1
    })
  }

  componentDidMount(){
    this.interval = setInterval(this.incrementTimer, 1000)
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.name !== this.props.name){
  //     return true
  //   }

  //   return false
  // }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    return (
      <div className="box">
        <h1>{this.state.timer}</h1>
        <p onClick={this.click}>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}