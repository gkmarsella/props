import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default App;
