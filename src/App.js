import React, { Component } from 'react';
import './App.css';
import Yunqi from './yunqi';
import moment from 'moment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>五运六气计算器</h1>
        <Yunqi label="生日："/>
        <br/>
        <Yunqi label="参考：" defaultValue={new moment()}/>
      </div>
    );
  }
}

export default App;
