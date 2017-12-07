import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { CirclePan } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class CirclePanSvg extends Basic {
  constructor() {
    super();
    this.state = { a: 70, s: 50, d: 30, f: 20, g: 80, h: 10 };
    this.interval = null;
  }
  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({ a: Math.floor(Math.random() * 100),
        s: Math.floor(Math.random() * 100),
        d: Math.floor(Math.random() * 100),
        f: Math.floor(Math.random() * 100),
        g: Math.floor(Math.random() * 100),
        h: Math.floor(Math.random() * 100) });
    }, 3000);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    const configSource = [
      {
        parameter: 'data',
        description: '必需，定义不同类目数据item的集合，item条目最多6个',
        type: 'Array',
        defaultValue: '[]',
      },
    ];
    const itemSource = [
      {
        parameter: 'legend',
        description: '必需，比例说明文字',
        type: 'String',
        defaultValue: '',
      }, {
        parameter: 'textColor',
        description: '非必需，比例说明文字颜色',
        type: 'color',
        defaultValue: 'black',
      }, {
        parameter: 'percent',
        description: '必需，比例数值（乘以100后到数值）',
        type: 'Number',
        defaultValue: '0',
      }, {
        parameter: 'color',
        description: '非必需，定义圆盘颜色',
        type: 'color',
        defaultValue: '',
      }, {
        parameter: 'backGround',
        description: '非必需，定义圆盘背景颜色',
        type: 'color',
        defaultValue: 'transparent',
      },
    ];
    const tableConfig = [{ title: 'CirclePan', subtitle: '', dataSource: configSource },
    { title: 'item', subtitle: '类型：Object', dataSource: itemSource }];
    return (
      <div>
        <p className="container-header">CirclePan 环形图</p>
        <p>环形图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。支持1-6个环。</p>
        <p className="container-title">代码示例</p>
        <Card>
          <div>
            <CirclePan
              data={
              [
                { legend: '百度',
                  textColor: 'black',
                  percent: this.state.a,
                  color: '#E96A69',
                  backGround: 'lightgray' },
                { legend: '谷歌',
                  textColor: 'black',
                  percent: this.state.s,
                  color: '#80EBFD',
                  backGround: 'lightgray' },
                { legend: '必应',
                  textColor: 'black',
                  percent: this.state.d,
                  color: '#2592EE',
                  backGround: 'lightgray' },
                { legend: '搜狗',
                  textColor: 'black',
                  percent: this.state.f,
                  backGround: 'lightgray' },
              ]}
            />
          </div>
          <hr />
          <p className="sample-title">
            环形圆盘
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import {CirclePan} from 'deep-viz';
ReactDOM.render(
    <CirclePan
    data={
      [
        { legend: '百度',
          textColor: 'black',
          percent: this.state.a,
          color: '#E96A69',
          backGround: 'lightgray' },
        { legend: '谷歌',
          textColor: 'black',
          percent: this.state.s,
          color: '#80EBFD',
          backGround: 'lightgray' },
        { legend: '必应',
          textColor: 'black',
          percent: this.state.d,
          color: '#2592EE',
          backGround: 'lightgray' },
        { legend: '搜狗',
          textColor: 'black',
          percent: this.state.f,
          backGround: 'lightgray' },
        { legend: '360',
          textColor: 'black',
          percent: this.state.g,
          backGround: 'lightgray' },
        { legend: '雅虎',
          textColor: 'black',
          percent: this.state.h,
          backGround: 'lightgray' },
      ]}/>
, mountNode);`}
            </Highlight>
          </div>
        </Card>
        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}

