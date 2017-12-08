import React from 'react';
import _ from 'lodash';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { HeatmapCartesian } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class HeatmapCartesianShow extends Basic {
  render() {
    const chartSource = [
      {
        parameter: 'color',
        description: '必需，定义颜色区间，建议2个颜色，由浅到深，组件自动按value渐变',
        type: 'Array',
        defaultValue: '',
      },
      {
        parameter: 'config',
        description: '必需，配置热力图的数据源等，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'style',
        description: '非必需，设置Chart的宽高等，一般格式{ height: 高度, width: 宽度 }',
        type: 'Object',
        defaultValue: "{ height: 250, width: '100%' }",
      },
    ];
    const configSource = [
      {
        parameter: 'x',
        description: '必需，定义x轴数据源，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'y',
        description: '必需，定义y轴数据源及配置，详见下面Table，类同x',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'data',
        description: '必需，定义数据源及配置。',
        type: 'Array',
        defaultValue: '[]',
      },
      {
        parameter: 'title',
        description: '非必需，设置Chart的标题，当有title时，legend会放在右边；推荐在组件外写title',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'option',
        description: '非必需，接口预留直接改变或覆盖Chart属性。',
        type: 'Object',
        defaultValue: 'null',
      },
    ];
    const xSource = [
      {
        parameter: 'data',
        description: '必需，定义x轴数据源',
        type: 'Array',
        defaultValue: 'null',
      },
    ];

    const tableConfig = [
      { title: 'HeatmapCartesian', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'x: {data: [], name: ""}', subtitle: '', dataSource: xSource },
    ];
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      chartData.push([_.random(0, 8), _.random(0, 2), _.random(0, 20)]);
    }
    return (
      <div>
        <p className="container-header">HeatmapCartesian 笛卡尔坐标系热力图</p>
        <p>支持在笛卡尔坐标系（一般为直角坐标系）上根据区块显示热力值的可视化组件</p>
        <p className="container-title">代码示例</p>
        <Card>
          <HeatmapCartesian
            config={{
              x: { data: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
              y: { data: ['low', 'middle', 'high'] },
              data: chartData,
              color: ['#C9E5F9', '#108EE9'],
            }}
          />
          <hr />
          <p className="sample-title">
            笛卡尔坐标系上的热力图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">尺寸可调整</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { HeatmapCartesian } from 'deep-viz';

const chartData = [];
for (let i = 0; i < 20; i++) {
  chartData.push([_.random(0, 8), _.random(0,2), _.random(0, 20)]);
}

ReactDOM.render(
<HeatmapCartesian
  config={{
    x: { data:[0,1,2,3,4,5,6,7,8] },
    y: { data:['low','middle','high'] },
    data: chartData,
    color: ['#C9E5F9', '#108EE9'],
  }}
/>
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
