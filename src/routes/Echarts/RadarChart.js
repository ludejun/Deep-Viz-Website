/**
 * Created by wimi on 17/10/19.
 */
import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { RadarChart } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class RadarChartShow extends Basic {
  render() {
    const chartSource = [
      {
        parameter: 'color',
        description: '非必需，自定义折线的颜色数组，按顺序取色',
        type: 'Array',
        defaultValue: "['#2CA51A', '#0BBEFE', '#F8B853', '#EA6C6B', '#8AAAF6', '#4F76D1', '#C1DFFF', '#F7F7F7']",
      },
      {
        parameter: 'config',
        description: '必需，配置折线图的数据源等，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'style',
        description: '非必需，设置Chart的宽高等，一般格式{ height: 高度, width: 宽度 }',
        type: 'Object',
        defaultValue: "{ height: 250, width: '100%' }",
      },
      {
        parameter: 'onTooltipFormat',
        description: '非必需，自定义提示框浮层内容及样式，传递给父组件，参数有params，具体可参考示例代码或Echarts.tooltip.formatter',
        type: 'Function',
        defaultValue: 'null',
      },
      {
        parameter: 'onEvents',
        description: '非必需，所有的事件交互回调集合，可参考示例代码；一般为点击事件，参数为params及echart实例；事件类型可参考Echarts.events',
        type: 'Object',
        defaultValue: 'null',
      },
    ];
    const configSource = [
      {
        parameter: 'indicator',
        description: '必需，指标项数组',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'values',
        description: '必需，各项指标的值,与indicator参数中排序顺序对应',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'max',
        description: '必需，项目值的最大值',
        type: 'Number',
        defaultValue: 'null',
      },
      {
        parameter: 'name',
        description: '非必需，雷达图名称',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'position',
        description: '非必需，详细tooltip的位置,inside,top,left,right,bottom',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'radius',
        description: '必需，半径百分比',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'formatter',
        description: '非必需，是否使用formatter，配置onTooltipFormat实现',
        type: 'Bool',
        defaultValue: 'null',
      },
      {
        parameter: 'paddingColor',
        description: '非必需，雷达图填充颜色',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'lineColor',
        description: '非必需，雷达图边线颜色',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'textStyle',
        description: '非必需，数值项样式',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'grid',
        description: '非必需，控制直角坐标系上下左右的留白空间，当有右侧y轴、x轴name、y轴name、config.title、dataZoom等时，应适当加大',
        type: 'Object',
        defaultValue: '{ left: 10, right: 0, top: 30, bottom: 10 }',
      },
      {
        parameter: 'toolbox',
        description: '非必需，是否显示工具箱',
        type: 'Boolean',
        defaultValue: 'false',
      },
    ];

    const tableConfig = [
      { title: 'RadarChart', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
    ];

    return (
      <div>
        <p className="container-header">Radar 雷达图</p>
        <p>基础雷达图，实现简单的多数据雷达图方式呈现</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <RadarChart
            config={{
              max: 100,
              toolbox: true,
              position: 'top',
              formatter: true,
              radius: '70%',
              indicator: ['数据1', '数据2', '数据3', '数据4', '数据5', '数据6'],
              values: [
                [80, 66, 60, 57, 50, 43],
                [70, 60, 87, 30, 70, 26],
              ],
            }}
            onTooltipFormat={(e) => {
              const tempArray = e.data.name.map((item, i) => {
                return `<div>
                  ${item}: ${e.data.value[i]}%
                 </div>`;
              });
              return `<div>
                  ${tempArray.join('')}
                </div>`;
            }}
          />
          <hr />
          <p className="sample-title">
            基本雷达图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">
            基本雷达图，配上数据和配置即可
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { RadarChart } from 'deep-viz';

ReactDOM.render(
  <RadarChart
  config={{
      max: 100,
      toolbox: true,
      position: 'top',
      formatter: true,
      radius: '70%',
      indicator: ['数据1','数据2','数据3','数据4','数据5','数据6'],
      values: [
        [80,66,60,57,50,43],
        [70,60,87,30,70,26],
      ],
    }}
  onTooltipFormat={(e)=>{
     const tempArray = e.data.name.map((item, i) => {
      return \`<div>
      \${item}: \${e.data.value[i]}%
      </div>\`;
    });
    return \`<div>
      \${tempArray.join('')}
      </div>\`;
   }}
/>, mountNode);
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
