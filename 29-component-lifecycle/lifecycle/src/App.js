import React from 'react';
import './App.css';
// import TickerContainer from "./ticker/TickerContainer"
import LifeCycleApp from "./lifecycle/LifeCycleApp"

class App extends React.Component {

  render(){
    return (
      <div className="App">  
        <LifeCycleApp />
      </div>
    );
  }
  
}

export default App;
