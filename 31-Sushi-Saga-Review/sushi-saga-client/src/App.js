import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis: [],
    startIndex: 0,
    eatenSushi: [],
    wallet: 100
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushiObjs => this.setState({sushis: sushiObjs}))
  }

  moreSushi = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }

  addPlate = (sushiObj) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj]
    })
  }

  buyWonSoosh = (cost) => {
    this.setState({
      wallet: this.state.wallet - cost
    })
  }

  render() {
    const { sushis, startIndex, eatenSushi, wallet } = this.state

    return (
      <div className="app">
        <SushiContainer
          sushis={ sushis }
          startIndex={ startIndex }
          moreSushi={ this.moreSushi }
          addPlate={ this.addPlate }
          buyWonSoosh={ this.buyWonSoosh }
          wallet={ wallet }
        />
        <Table
          eatenSushi={ eatenSushi }
          wallet={ wallet }
        />
      </div>
    );
  }
}

export default App;
