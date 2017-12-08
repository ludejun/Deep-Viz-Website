/**
 * Created by Administrator on 2017/9/28.
 */
import React from 'react';
import Highlight from 'react-highlight';
import { Card, Icon } from 'antd';
import Basic from '../Layout/WDBasic';
import { ProgressBar } from '../../components/src';

export default class ProgressBarShow extends Basic {
  render() {
    const data = [
      { name: '吃', value: 1200, backgroundColor: '#2CA51A' },
      { name: '喝', value: 800, backgroundColor: '#0BBEFE' },
      { name: '玩', value: 12000, backgroundColor: '#EA6C6B' },
      { name: '乐', value: 20000, backgroundColor: '#F8B853' },
    ];

    const ProgressSource = [
      {
        parameter: 'data',
        description: '必需，组件的数据源，详见下面table',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'config',
        description: '必需，组件相关配置项，详见下面table',
        type: 'Object',
        defaultValue: 'null',
      },
    ];
    const dataArrSource = [
      {
        parameter: 'name',
        description: '必需，组件的数据的name',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'value',
        description: '必需，组件的数据的value',
        type: 'Number',
        defaultValue: 'null',
      },
      {
        parameter: 'backgroundColor',
        description: '非必需，设置各项数据进度条的背景色',
        type: 'String',
        defaultValue: '#2CA51A',
      },
    ];
    const optionsSource = [
      {
        parameter: 'unit',
        description: '非必需，展示数据value的单位',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'namePosition',
        description: '非必需，设置数据的name属性的位置，可选"top"，"center"，"bottom"',
        type: 'String',
        defaultValue: 'top',
      },
      {
        parameter: 'color',
        description: '非必需，设置文字的字体颜色',
        type: 'String',
        defaultValue: '#333',
      },
      {
        parameter: 'fontSize',
        description: '非必需，设置文字的字体大小',
        type: 'String',
        defaultValue: '14px',
      },
      {
        parameter: 'height',
        description: '非必需，设置ProgressBar的高度',
        type: 'String',
        defaultValue: '25px',
      },
      {
        parameter: 'margin',
        description: '非必需，设置上下相邻ProgressBar的margin',
        type: 'String',
        defaultValue: '25px',
      },
      {
        parameter: 'backgroundColor',
        description: '非必需，设置ProgressBar最外层的背景色',
        type: 'String',
        defaultValue: '#d9d9d9',
      },
    ];
    const tableConfig = [
      { title: 'ProgressBar', subtitle: '', dataSource: ProgressSource },
      { title: 'data', subtitle: '', dataSource: dataArrSource },
      { title: 'config', subtitle: '', dataSource: optionsSource },
    ];
    return (
      <div>
        <p className="container-header">ProgressBar 进度条</p>
        <p>ProgressBar 进度条，主要用来展示每项数据在所有数据的占比，直观明了。</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <ProgressBar
            data={data}
            config={{
              height: '20px',
              margin: '20px',
              unit: '$',
              namePosition: 'top',
              color: '#333',
              fontSize: '14px',
              backgroundColor: '#d9d9d9',
            }}
          />
          <hr />
          <p className="sample-title">
            当月各项支出占比情况
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc"></p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { ProgressBar } from 'deep-viz';
const data = [
  { name: '吃', value: 1200, backgroundColor: '#2CA51A', },
  { name: '喝', value: 800, backgroundColor: '#0BBEFE', },
  { name: '玩', value: 12000, backgroundColor: '#EA6C6B', },
  { name: '乐', value: 20000, backgroundColor: '#F8B853', },
];

ReactDOM.render(
  <ProgressBar
    data={data}
    config={{
      height: '20px',
      margin: '20px',
      unit: '$',
      namePosition: 'center',
      color: '#333',
      fontSize: '14px',
      backgroundColor: '#d9d9d9',
    }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>
        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}
