import React from 'react'

class Ticker extends React.Component {

  state = {
    color: "black",
    arrow: "➡"
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.value < prevProps.value){
      this.setState({
        color: "red",
        arrow: "⬇"
      })
    } else if (this.props.value > prevProps.value){
      this.setState({
        color: "green",
        arrow: "⬆"
      })
    }
  }

  render(){
    return (
      <div className="box" style={{color: this.state.color}}>
        <div style={{ borderStyle: "solid"}}>
          <h1>{this.props.value} {this.state.arrow}</h1>
        </div>
      </div>
    );
  }
}

export default Ticker