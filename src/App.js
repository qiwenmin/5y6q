import React, { Component } from 'react';
import DatePicker from 'antd/lib/date-picker';
import './App.css';

class App extends Component {
  changeDate(date, resultId) {
    console.log(date.year(), date.month() + 1, date.date());
  }

  render() {
    return (
      <div className="App">
        <h1>五运六气计算器</h1>
          <div>
          <label htmlFor="birth">生日：</label>
          <DatePicker id="birth" onChange={(date, dateString) => this.changeDate(date, null)}></DatePicker>
        </div>
      </div>
    );
  }
}

export default App;
