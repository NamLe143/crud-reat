import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SizeSetting from './components/sizeSetting.component';
import ColorPicker from './components/colorPicker.component';
import Resuilt from './components/resuilt.component';
import Reset from './components/reset.component'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      fontSize: 15
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
  }
  onSetColor(params) {
    console.log(params);
    
    this.setState({
      color: params
    })    
  }
  changeFontSize(value) {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
    
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-6">
            <SizeSetting fontSize={this.state.fontSize} changeFontSize={this.changeFontSize}/>
            <Reset/>
          </div>
        </div>
        <Resuilt color={this.state.color} fontSize={this.state.fontSize}/>
      </div>
    );
  }
}

export default App;
