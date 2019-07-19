import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    value: 0
  }

  start = () => {
    this.ticker = setInterval(() => {
      this.setState({
        value: Math.round(Math.random()*(100))
      })
    }, 1000)
  }

  componentDidMount(){
    this.start()
  }


  stop = () => {
    clearInterval(this.ticker)
  }

  componentWillUnmount(){
    this.stop()
  }
 
 
  render(){
    return (
      <div className="box">
        <button onClick={this.stop}>Stop Ticker</button>
        <Ticker value={this.state.value}/>
      </div>
    );
  }
}



export default TickerContainer