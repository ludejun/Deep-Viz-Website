import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { GraphChart } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class GraphChartShow extends Basic {
  onTooltipFormat(params) {
    const tips = `<div class='tooltip-sample'>
      ${params.name}<br/>
    `;
    return tips;
  }

  onChartClick(params, echart) {
    console.log(params, echart);
  }

  render() {
    const graphData = {
      data: [
        { name: '节点1', category: '节点1', value: 40 },
        { name: '节点2', category: '节点1', value: 20 },
        { name: '节点3', category: '节点1', value: 20 },
        { name: '节点4', category: '节点1', value: 20 },
        { name: '节点5', category: '节点1', value: 20 },
        { name: '节点21', category: '节点2', value: 10 },
        { name: '节点22', category: '节点2', value: 10 },
        { name: '节点23', category: '节点2', value: 10 },
        { name: '节点31', category: '节点3', value: 10 },
        { name: '节点32', category: '节点3', value: 10 },
        { name: '节点33', category: '节点3', value: 10 },
        { name: '节点41', category: '节点4', value: 10 },
        { name: '节点42', category: '节点4', value: 10 },
        { name: '节点43', category: '节点4', value: 10 },
        { name: '节点51', category: '节点5', value: 10 },
        { name: '节点52', category: '节点5', value: 10 },
        { name: '节点53', category: '节点5', value: 10 },
      ],
      links: [
        { source: '节点1', target: '节点2' },
        { source: '节点1', target: '节点3' },
        { source: '节点1', target: '节点4' },
        { source: '节点1', target: '节点5' },
        { source: '节点2', target: '节点21' },
        { source: '节点2', target: '节点22' },
        { source: '节点2', target: '节点23' },
        { source: '节点3', target: '节点31' },
        { source: '节点3', target: '节点32' },
        { source: '节点3', target: '节点33' },
        { source: '节点4', target: '节点41' },
        { source: '节点4', target: '节点42' },
        { source: '节点4', target: '节点43' },
        { source: '节点5', target: '节点51' },
        { source: '节点5', target: '节点52' },
        { source: '节点5', target: '节点53' },
      ],
      categories: [
        { name: '节点1' },
        { name: '节点2' },
        { name: '节点3' },
        { name: '节点4' },
        { name: '节点5' },
      ],
      lengendData: ['节点1', '节点2', '节点3', '节点4', '节点5'],
    };

    const chartSource = [{
      parameter: 'color',
      description: '非必需，自定义节点的颜色数组，按顺序取色',
      type: 'Array',
      defaultValue:
        "['#2CA51A', '#0BBEFE', '#F8B853', '#EA6C6B', '#8AAAF6', '#4F76D1', '#C1DFFF', '#F7F7F7']",
    }, {
      parameter: 'config',
      description: '必需，配置关系图的数据源等，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'style',
      description: '非必需，设置Chart的宽高等，一般格式{ height: 高度, width: 宽度 }',
      type: 'Object',
      defaultValue: '{ height: 400, width: \'100%\' }',
    }, {
      parameter: 'onEvents',
      description: '非必需，所有的事件交互回调集合，可参考示例代码；一般为点击事件，参数为params及echart实例；事件类型可参考Echarts.events',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'onTooltipFormat',
      description: '非必需，自定义提示框浮层内容及样式，传递给父组件，参数有params，具体可参考示例代码或Echarts.tooltip.formatter',
      type: 'Function',
      defaultValue: 'null',
    }];

    const configSource = [{
      parameter: 'data',
      description: '必需，定义数据源，详见下面Table',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'links',
      description: '必需，定义数据之间的关系，详见下面Table',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'categories',
      description: '非必需，定义数据的显示，详见下面Table',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'legend',
      description: '非必需，定义一级关系的名称，详见下面Table',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'title',
      description: '非必需，设置Chart的标题，当有title时，legend会放在右边；推荐在组件外写title',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'subtitle',
      description: '  非必需，设置Chart的副标题，当有title时，legend会放在右边；推荐在组件外写subtitle',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'draggable',
      description: '  非必需，是否可以拖拽',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'toolbox',
      description: '非必需，是否显示工具箱.events',
      type: 'Boolean',
      defaultValue: 'false',
    }];

    const graphDataSource = [{
      parameter: 'name',
      description: '必需，节点的名称',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'category',
      description: '非必需,上级的节点,控制是否显示与categories结合使用',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'value',
      description: '非必需,通过value值的大小控制节点的大小',
      type: 'Number',
      defaultValue: '20',
    }];
    const linksSource = [{
      parameter: 'source',
      description: '必需,指向的数据',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'target',
      description: '必需,被指向的数据',
      type: 'String',
      defaultValue: 'null',
    }];
    const categoriesSource = [{
      parameter: 'name',
      description: '必需,用来显示当前节点下的所有数据与data中的category对应',
      type: 'Array',
      defaultValue: 'null',
    }];
    const tableConfig = [
      { title: 'GraphChart', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'data', subtitle: '', dataSource: graphDataSource },
      { title: 'links', subtitle: '', dataSource: linksSource },
      { title: 'categories', subtitle: '', dataSource: categoriesSource },
    ];

    return (
      <div>
        <p className="container-header">GraphChart 关系图</p>
        <p>节点关系图，支持部分节点的显示隐藏</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <GraphChart
            config={{
              data: graphData.data,
              links: graphData.links,
              categories: graphData.categories,
              legend: {
                data: graphData.lengendData,
              },
            }}
            onEvents={{ click: this.onChartClick }}
            onTooltipFormat={this.onTooltipFormat}
          />
          <hr />
          <p className="sample-title">
            关系图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { GraphChart } from 'deep-viz';

// 创建虚假数据
const graphData = {
  data: [
    { name: '节点1', category: '节点1', value: 40 },
    { name: '节点2', category: '节点1', value: 20 },
    { name: '节点3', category: '节点1', value: 20 },
    { name: '节点4', category: '节点1', value: 20 },
    { name: '节点5', category: '节点1', value: 20 },
    { name: '节点21', category: '节点2', value: 10 },
    { name: '节点22', category: '节点2', value: 10 },
    { name: '节点23', category: '节点2', value: 10 },
    { name: '节点31', category: '节点3', value: 10 },
    { name: '节点32', category: '节点3', value: 10 },
    { name: '节点33', category: '节点3', value: 10 },
    { name: '节点41', category: '节点4', value: 10 },
    { name: '节点42', category: '节点4', value: 10 },
    { name: '节点43', category: '节点4', value: 10 },
    { name: '节点51', category: '节点5', value: 10 },
    { name: '节点52', category: '节点5', value: 10 },
    { name: '节点53', category: '节点5', value: 10 },
  ],
  links: [
    { source: '节点1', target: '节点2' },
    { source: '节点1', target: '节点3' },
    { source: '节点1', target: '节点4' },
    { source: '节点1', target: '节点5' },
    { source: '节点2', target: '节点21' },
    { source: '节点2', target: '节点22' },
    { source: '节点2', target: '节点23' },
    { source: '节点3', target: '节点31' },
    { source: '节点3', target: '节点32' },
    { source: '节点3', target: '节点33' },
    { source: '节点4', target: '节点41' },
    { source: '节点4', target: '节点42' },
    { source: '节点4', target: '节点43' },
    { source: '节点5', target: '节点51' },
    { source: '节点5', target: '节点52' },
    { source: '节点5', target: '节点53' },
  ],
  categories: [
    { name: '节点1' },
    { name: '节点2' },
    { name: '节点3' },
    { name: '节点4' },
    { name: '节点5' },
  ],
  lengendData: ['节点1', '节点2', '节点3', '节点4', '节点5'],
};

// 自定义tooltip浮层
onTooltipFormat(params) {
  // console.log(params);
  const tips = \`<div class='tooltip-sample'>这是自定义的Tooltip<br/>
      \${params.name}<br/>
    \`;
  return tips;
}

// 事件交互回调
onChartClick(params, echart) {
  console.log(params, echart);
}

ReactDOM.render(
  <GraphChart
    config={{
      data: graphData.data,
      links: graphData.links,
      categories: graphData.categories,
      legend: {
        data: graphData.lengendData,
      },
    }}
    onEvents={{ click: this.onChartClick }}
    onTooltipFormat={this.onTooltipFormat}
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
