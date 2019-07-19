import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {

  state = {
    display: true
  }

  click = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render(){
    return (
      <div className="box">
        <p onClick={this.click}>Parent</p>
        {this.state.display ? <Child name="child"/> : null}
      </div>
    );
    
  }
}