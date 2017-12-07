import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import _ from 'lodash';
import { PillarList } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class BallMoveShow extends Basic {
  render() {
    const chartSource = [
      {
        parameter: 'style',
        description: '非必需，定义Canvas宽度',
        type: 'Object',
        defaultValue: '{width:400,height:300}',
      },
      {
        parameter: 'data',
        description: `必需，目前输入几组柱子配置（目前只支持三组、四组和五组），形式如下[
          { percent: 0.3,name:'高端消费' },
          { percent: 0.6,name:'普通消费'},
          { percent: 0.4,name:'低端消费'},
        ]`,
        type: 'Array',
        defaultValue: '',
      },
      {
        parameter: 'colors',
        description: '非必需',
        type: 'Array',
        defaultValue: "['#29AAFF','#0DF29E','#00D1C6','#ff0000','#00ff00']",
      },
    ];
    const tableConfig = [{ title: 'PillarList', subtitle: '', dataSource: chartSource }];
    const chartData = [
      { percent: _.random(0.2, 0.4), name: '普通消费' },
      { percent: _.random(0.5, 0.6), name: '中端消费' },
      { percent: _.random(0.9, 1), name: '高级消费' },
      { percent: _.random(0.1, 0.2), name: '中级消费' },
      { percent: _.random(0.7, 0.8), name: '初级消费' },
    ];
    return (
      <div>
        <p className="container-header">PillarList 立体簇状柱形图</p>
        <p>立体簇状柱形图，可根据数据量，做出3、4、5个柱子的立体柱形图</p>
        <p className="container-title">代码示例</p>
        <Card>
          <PillarList
            data={chartData.slice(0, 3)}
            style={{ width: 400, height: 300 }}
            colors={['#c23631', '#91c7ae', '#d48266']}
          />
          <hr />
          <p className="sample-title">
            三列柱状排列图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">尺寸可调整，建议高度大于宽度</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import {PillarList} from 'deep-viz';
const chartData = [
  { percent: parseFloat(_.random(0.1, 0.2).toFixed(4)), name: '普通消费' },
  { percent: parseFloat(_.random(0.2, 0.6).toFixed(4)), name: '中端消费' },
  { percent: parseFloat(_.random(0.7, 1)).toFixed(4), name: '高级消费' },
  { percent: parseFloat(_.random(0.2, 0.8).toFixed(4)), name: '中级消费' },
  { percent: parseFloat(_.random(0.3, 0.9).toFixed(4)), name: '初级消费' },
];
ReactDOM.render(
  <PillarList data={chartData.slice(0,3)}
  style={{ width: 400, height: 300 }}
  colors={['#c23631', '#91c7ae', '#d48266']} />
, mountNode);`}
            </Highlight>
          </div>
        </Card>
        <Card>
          <PillarList data={chartData.slice(0, 4)} style={{ width: 400, height: 300 }} />
          <hr />
          <p className="sample-title">
            四列柱状排列图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">尺寸可调整，建议高度大于宽度</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import {PillarList} from 'deep-viz';
const chartData = [
  { percent: parseFloat(_.random(0.1, 0.2).toFixed(4)), name: '普通消费' },
  { percent: parseFloat(_.random(0.2, 0.6).toFixed(4)), name: '中端消费' },
  { percent: parseFloat(_.random(0.7, 1)).toFixed(4), name: '高级消费' },
  { percent: parseFloat(_.random(0.2, 0.8).toFixed(4)), name: '中级消费' },
  { percent: parseFloat(_.random(0.3, 0.9).toFixed(4)), name: '初级消费' },
];
ReactDOM.render(
  <PillarList data={chartData.slice(0,4)}
  style={{ width: 400, height: 300 }} />
  , mountNode);`}
            </Highlight>
          </div>
        </Card>
        <Card>
          <PillarList data={chartData} style={{ width: 400, height: 300 }} />
          <hr />
          <p className="sample-title">
            五列柱状排列图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">尺寸可调整，建议高度大于宽度</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import {PillarList} from 'deep-viz';
const chartData = [
  { percent: parseFloat(_.random(0.1, 0.2).toFixed(4)), name: '普通消费' },
  { percent: parseFloat(_.random(0.2, 0.6).toFixed(4)), name: '中端消费' },
  { percent: parseFloat(_.random(0.7, 1)).toFixed(4), name: '高级消费' },
  { percent: parseFloat(_.random(0.2, 0.8).toFixed(4)), name: '中级消费' },
  { percent: parseFloat(_.random(0.3, 0.9).toFixed(4)), name: '初级消费' },
];
ReactDOM.render(
  <PillarList data={chartData}
  style={{ width: 400, height: 300 }}
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
