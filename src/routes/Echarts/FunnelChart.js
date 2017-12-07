/**
 * Created by wimi on 17/10/19.
 */
import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { FunnelChart } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class FunnelChartShow extends Basic {
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
        parameter: 'sort',
        description: '非必需，可以取 ascending，descending，none（表示按 data 顺序）',
        type: 'String',
        defaultValue: 'ascending',
      },
      {
        parameter: 'label',
        description: '非必需，控制数据项的名称颜色,有属性color与emphasis',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'data',
        description: '必需，见下面table',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'max',
        description: '必需，设置漏斗的最大值',
        type: 'Number',
        defaultValue: 'null',
      },
      {
        parameter: 'min',
        description: '必需，设置漏斗的最小值',
        type: 'Number',
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
    const dataSource = [
      {
        parameter: 'name',
        description: '必需，数据项名称',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'value',
        description: '非必需，数据值',
        type: 'Number',
        defaultValue: '0',
      },
      {
        parameter: 'normalColor',
        description: '非必需，图形的颜色',
        type: 'String',
        defaultValue: '自适应color配置的颜色',
      },
      {
        parameter: 'emphasisColor',
        description: '非必需，强调的颜色，选中或滑过时的颜色 ',
        type: 'String',
        defaultValue: '自适应color配置的颜色',
      },

    ];

    const tableConfig = [
      { title: 'LineChart', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'data', subtitle: '', dataSource },
    ];


    return (
      <div>
        <p className="container-header">Funnel 漏斗图</p>
        <p>基础漏斗图，实现简单的多数据项漏斗方式呈现</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <FunnelChart
            color={['#fff']}
            config={{
              min: 0,
              max: 100,
              sort: 'descending',
              toolbox: true,
              label: {
                color: '#fff',
              },
              data: [
                { name: '数据1', value: 80, normalColor: '#108EE9', emphasisColor: '#E99610' },
                { name: '数据2', value: 66 },
                { name: '数据3', value: 60 },
                { name: '数据4', value: 57 },
                { name: '数据5', value: 50 },
                { name: '数据6', value: 43 },
              ],
            }}
          />
          <hr />
          <p className="sample-title">
            基本漏斗图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">
            基本漏斗图，配上数据和配置即可
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { FunnelChart } from 'deep-viz';

ReactDOM.render(
<FunnelChart
  color={['#fff']}
  config={{
    min: 0,
    max: 100,
    sort: 'descending',
    toolbox: true,
    label: {
      color: '#fff',
    },
    data: [
      { name: '数据1', value: 80, normalColor: '#108EE9', emphasisColor: '#E99610' },
      { name: '数据2', value: 66 },
      { name: '数据3', value: 60 },
      { name: '数据4', value: 57 },
      { name: '数据5', value: 50 },
      { name: '数据6', value: 43 },
    ],
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
