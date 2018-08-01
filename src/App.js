import React, { Component } from 'react';
import './App.css';
import Yunqi from './yunqi';
import moment from 'moment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>五运六气计算器</h1>
        <Yunqi label="日期1：" defaultValue={new moment()}/>
        <br/>
        <Yunqi label="日期2：" defaultValue={new moment()}/>
      </div>
    );
  }
}

export default App;
