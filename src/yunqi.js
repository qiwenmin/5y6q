import React from 'react'
import DatePicker from 'antd/lib/date-picker';

class Yunqi extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.state.value = props.defaultValue
    }

    changeDate(date) {
        console.log(date)
        this.setState({
            value: date
        })
    }

    renderResult() {
        let gan_table = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
        let zhi_table = ['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑']
        let wuxing_table = ['土','金','水','木','火']
        let liuqi_table = ['少阴君火','太阴湿土','少阳相火','阳明燥金','太阳寒水','厥阴风木']

        if (this.state.value) {
            var y = this.state.value.year()
            var m = this.state.value.month() + 1
            var d = this.state.value.date()

            if (m === 1 && d <= 21) y--

            var gan = (y % 10) - 4; if (gan < 0) gan += 10
            var zhi = (y + 6) % 12

            var ganzhi = gan_table[gan] + zhi_table[zhi]
            var zhuyun = wuxing_table[gan % 5]
            var yinyang = (gan % 2) === 0 ? '太过' : '不及'

            var sitian = liuqi_table[(zhi +2 )% 6]
            var zaiquan = liuqi_table[(zhi + 5) % 6]

            return (
                <div>
                    {ganzhi + '年 | 主运：' + zhuyun + '【' + yinyang + '】'}
                    <br/>
                    {'司天：' + sitian + ' | 在泉：' + zaiquan}
                </div>
            )
        } else {
            return ''
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <label htmlFor="birth">{this.props.label}</label>
                    <DatePicker id="birth" defaultValue={this.props.defaultValue} onChange={(date, dateString) => this.changeDate(date)}></DatePicker>
                </div>
                <div>
                    {this.renderResult()}
                </div>
            </div>
        )
    }
}

export default Yunqi