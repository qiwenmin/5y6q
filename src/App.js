import React, { Component } from 'react';
import './App.css';
import { Button, notification } from 'antd';
import Yunqi from './yunqi';
import moment from 'moment';

class App extends Component {
  onInfoClick() {
    const readme = (
      <ul>
        <li>在设计思想上，本程序以大寒节气作为每年干支纪年的起点，以大寒、春分、小满、大暑、秋分、小雪作为主、客气六气轮值的分界线。</li>
        <li>在具体实现上，本程序以上述节气所在月的22日作为节气的发生日，因此查询一月、三月、五月、七月、九月、十一月的20-23日时可能存在误差，需根据当年日历手工矫正干支和六气划分。</li>
        <li>本程序不能用来查询公元4年之前的日期（算法原因但懒得改，望天）。</li>
        <li>本程序的链接地址在微信中存在无法显示的问题，可拷贝至浏览器中打开。</li>
        <li>在浏览器中加载过一次本程序后，以后无需网络连接也可正常使用。</li>
        <li>对于经常使用本工具的用户，可在手机桌面建立浏览地址快捷入口。</li>
      </ul>
    )

    const args = {
      message: '使用说明',
      description: readme,
      duration: 0
    }

    notification.open(args)
  }

  render() {
    return (
      <div className="App">
        <h1>五运六气计算器</h1>
        <Yunqi label="日期1：" defaultValue={new moment()}/>
        <br/>
        <Yunqi label="日期2："/>
        <Button id="infoButton" icon="info-circle" onClick={this.onInfoClick}/>
        <div id="version">v.4</div>
      </div>
    );
  }
}

export default App;
