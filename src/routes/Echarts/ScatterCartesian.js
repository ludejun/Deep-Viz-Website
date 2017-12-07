/**
 * Created by Administrator on 2017/11/3.
 */
import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { ScatterCartesian } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ScatterCartesianShow extends Basic {
  onTooltipFormat(params) {
    const tips = `<div class='tooltip-sample'>
                    ${params.seriesName}<br/>
                    ${params.value[0]}￥ :
                    ${params.value[1]}岁;</div>
    `;
    return tips;
  }
  onScatterClick() {
    console.log('hello Gundam');
  }
  render() {
    const data1 = [[31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [37062, 75.4, 252847810, 'United States', 1990]];
    const data2 = [[43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [53354, 79.1, 321773631, 'United States', 2015]];
    const scatterCartesianSource = [
      {
        parameter: 'config',
        description: '必需，配置组件的数据和样式等，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'style',
        description: '非必需，设置组件的宽高等，一般格式{ height: 高度, width: 宽度 }',
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
        parameter: 'options',
        description: '必需，组件中scatter配置选项，详见下面Table',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'color',
        description: '非必需，每种散点类型的颜色，color.length=data.length；每个元素可以是颜色字符串，也可以是一个数组，当每个元素是数组时，会从第1个颜色渐变到第2个颜色',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'grid',
        description: '非必需，控制直角坐标系上下左右的留白空间',
        type: 'Object',
        defaultValue: '{ left: 10, right: 0, top: 30, bottom: 10 }',
      },
      {
        parameter: 'isLabelShow',
        description: '非必需，用于显示label标签是否一直显示',
        type: 'Boolean',
        defaultValue: 'false',
      },
      {
        parameter: 'isToolboxShow',
        description: '非必需，用于显示工具箱是否显示',
        type: 'Boolean',
        defaultValue: 'false',
      },
      {
        parameter: 'title',
        description: '非必需，组件title选项，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'xName',
        description: '必需，x轴数据的名字',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'yName',
        description: '必需，y轴数据的名字',
        type: 'String',
        defaultValue: 'null',
      },
    ];
    const optionsSource = [
      {
        parameter: 'name',
        description: '必需，组件的seriesName',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'data',
        description: '必需，组件数据源，数据结构[[213,22,"China",245,...], [332,56,"Russia",761,...],...]，子数组的第一项数据，必需，x轴数据；子数组的第二项数据，必需，y轴数据；子数组的第三项数据，必需，label标签名字，即当前项数据的名子；子数组的第四项数据，非必需，根据此数据设置symbol的大小，默认大小20',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'markLine',
        description: '非必需，是否显示组件数据的平均值线',
        type: 'Boolean',
        defaultValue: 'false',
      },
    ];
    const titleSource = [
      {
        parameter: 'text',
        description: '必需，标题名',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'subtitle',
        description: '非必需，副标题名',
        type: 'String',
        defaultValue: 'null',
      },
    ];
    const tableConfig = [
      { title: 'ScatterCartesian', subtitle: '', dataSource: scatterCartesianSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'options', subtitle: '', dataSource: optionsSource },
      { title: 'title', subtitle: '', dataSource: titleSource },
    ];
    return (
      <div>
        <p className="container-header">ScatterCartesian 笛卡尔坐标系散点图</p>
        <p>基础散点图，可用于在坐标系上绘制不同颜色、不同大小的pointer、scatter。
          散点的颜色支持径向渐变。坐标系中每组数据内置可以画出平均数功能，及label，方便探索四个象限点的规律。
          每个pointer的大小根据数据（数组第三位）的最大值最小值自动算出。
        </p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <ScatterCartesian
            config={{
              options: [
                {
                  name: '1995',
                  data: data1,
                  markLine: true,
                },
              ],
              grid: { left: 20, right: 40, top: 50, bottom: 10 },
              xName: 'GDP',
              yName: '年龄',
              isLabelShow: true,
              title: {
                text: '1990年各国家人均寿命与 GDP',
              },
            }}
            style={{ height: 450, width: '100%' }}
            onTooltipFormat={this.onTooltipFormat}
            onEvents={{ click: this.onScatterClick }}
          />
          <hr />
          <p className="sample-title">
            单组数据，有平均数
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">scatter颜色可改变，x轴，y轴name可变。颜色不渐变，label一直标示，适合点不多的情况，如label相互重合不多。</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ScatterCartesian } from 'deep-viz';

// 创建虚假数据
const data1 = [[29476,77.1,56943299,'France',1990], [44056,81.8,23968973,'Australia',2015]...];

ReactDOM.render(
  <ScatterCartesian
    config={{
      options: [
        {
          name: '1995',
          data: data1,
          markLine: true,
        },
      ],
      grid: { left: 20, right: 40, top: 50, bottom: 10 },
      xName: 'GDP',
      yName: '年龄',
      isLabelShow: true,
      title: {
        text: '1990年各国家人均寿命与 GDP',
      },
    }}
    style={{ height: 450, width: '100%' }}
    onTooltipFormat={this.onTooltipFormat}
    onEvents={{ click: this.onScatterClick }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>
        <Card>
          <ScatterCartesian
            config={{
              options: [
                {
                  name: '1990',
                  data: data1,
                },
                {
                  name: '2005',
                  data: data2,
                },
              ],
              color: [['rgb(129, 227, 238)', 'blue'], ['rgb(251, 118, 123)', 'rgb(204, 46, 72)']],
              grid: { left: 20, right: 40, top: 30, bottom: 10 },
              isLabelShow: false,
              isToolboxShow: true,
              xName: 'GDP',
              yName: '年龄',
            }}
            style={{ height: 450, width: '100%' }}
            onTooltipFormat={this.onTooltipFormat}
            onEvents={{ click: this.onScatterClick }}
          />
          <hr />
          <p className="sample-title">
            多组数据，颜色渐变
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">scatter颜色可改变，x轴，y轴name可变。颜色渐变，也支持画出每组数据的平均数，tooltip的样式及内容自定义。</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ScatterCartesian } from 'deep-viz';

// 创建虚假数据

const data1 = [[29476,77.1,56943299,'France',1990], [44056,81.8,23968973,'Australia',2015]...];
const data2 = [[44056,81.8,23968973,'Australia',2015], [43294,81.7,35939927,'Canada',2015]...];

ReactDOM.render(
  <ScatterCartesian
    config={{
      options: [
        {
          name: '1990',
          data: data1,
        },
        {
          name: '2005',
          data: data2,
        },
      ],
      color: [['rgb(129, 227, 238)', 'rgb(25, 183, 207)'], ['rgb(251, 118, 123)', 'rgb(204, 46, 72)']],
      grid: { left: 20, right: 40, top: 30, bottom: 10 },
      isLabelShow: false,
      xName: 'GDP',
      yName: '年龄',
    }}
    style={{ height: 450, width: '100%' }}
    onTooltipFormat={this.onTooltipFormat}
    onEvents={{ click: this.onScatterClick }}
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
