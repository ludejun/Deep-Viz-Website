import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { WordCloud } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class WordCloudShow extends Basic {
  onTooltipFormat(params) {
    console.log(params);
  }

  onChartClick(params, echart) {
    console.log(params, echart);
  }

  render() {
    const CloudData = [
      { name: 'Sam S Club', value: 10000 },
      { name: 'Macys', value: 9999 },
      { name: 'Amy Schumer', value: 4386 },
      { name: 'Jurassic World', value: 4055 },
      { name: 'Charter Communications', value: 2467 },
      { name: 'Chick Fil A', value: 2244 },
      { name: 'Planet Fitness', value: 1898 },
      { name: 'Pitch Perfect', value: 1484 },
      { name: 'Express', value: 1112 },
      { name: 'Home', value: 965 },
      { name: 'Johnny Depp', value: 847 },
      { name: 'Lena Dunham', value: 582 },
      { name: 'Lewis Hamilton', value: 555 },
      { name: 'KXAN', value: 550 },
      { name: 'Mary Ellen Mark', value: 462 },
      { name: 'Farrah Abraham', value: 366 },
      { name: 'Rita Ora', value: 360 },
      { name: 'Serena Williams', value: 282 },
      { name: 'NCAA baseball tournament', value: 273 },
      { name: 'Point Break', value: 265 },
    ];
    const chartSource = [
      {
        parameter: 'config',
        description: '必需，配置关系图的数据源等，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'style',
        description: '非必需，设置Chart的宽高等，一般格式{ height: 高度, width: 宽度 }',
        type: 'Object',
        defaultValue: '{ height: 500, width: \'100%\' }',
      },
      {
        parameter: 'onEvents',
        description: '非必需，所有的事件交互回调集合，可参考示例代码；一般为点击事件，参数为params及echart实例；事件类型可参考Echarts.events',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'onTooltipFormat',
        description: '非必需，自定义提示框浮层内容及样式，传递给父组件，参数有params，具体可参考示例代码或Echarts.tooltip.formatter',
        type: 'Function',
        defaultValue: 'null',
      },
    ];
    const configSource = [
      {
        parameter: 'data',
        description: '必需，定义数据源，详见下面Table',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'gridSize',
        description: '非必需，用来控制字之间的间距大小',
        type: 'Number',
        defaultValue: '10',
      },
      {
        parameter: 'sizeRange',
        description: '非必需，用来控制字的大小区间范围',
        type: 'Array',
        defaultValue: '[6,66]',
      },
      {
        parameter: 'rotationRange',
        description: '非必需，用来控制字的旋转角度区间范围',
        type: 'Array',
        defaultValue: '[-90,90]',
      },
      {
        parameter: 'rotationStep',
        description: '非必需，用来控制字每一步旋转的角度',
        type: 'Number',
        defaultValue: '45',
      },
      {
        parameter: 'left',
        description: '非必需，用来控制词云的位置',
        type: 'String',
        defaultValue: 'center',
      },
      {
        parameter: 'right',
        description: '非必需，用来控制词云的位置',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'top',
        description: '非必需，用来控制词云的位置',
        type: 'String',
        defaultValue: 'center',
      },
      {
        parameter: 'bottom',
        description: '非必需，用来控制词云的位置',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'width',
        description: '非必需，用来控制词云的宽度',
        type: 'String',
        defaultValue: '70%',
      },
      {
        parameter: 'height',
        description: '非必需，用来控制词云的高度',
        type: 'String',
        defaultValue: '80%',
      },
      {
        parameter: 'fontFamily',
        description: '非必需，设置字体的类型',
        type: 'String',
        defaultValue: 'sans-serif',
      },
      {
        parameter: 'fontWeight',
        description: '非必需，设置字体的粗细',
        type: 'String',
        defaultValue: 'bold',
      },
      {
        parameter: 'title',
        description: '非必需，设置Chart的标题，默认放在中间；推荐在组件外写subtitle',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'subtitle',
        description: '非必需，设置Chart的副标题，默认放在中间；推荐在组件外写subtitle',
        type: 'String',
        defaultValue: 'null',
      },
    ];

    const cloudDataSource = [
      {
        parameter: 'name',
        description: '必需，显示数据的名字',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'value',
        description: '必需，value值越大对应的字越大，反之则越小',
        type: 'Number',
        defaultValue: 'null',
      },
    ];
    const tableConfig = [
      { title: 'LineChart', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'data', subtitle: '', dataSource: cloudDataSource },
    ];
    return (
      <div>
        <p className="container-header">WordCloud 词云</p>
        <p>词云图，通过设置可以展现出关键词</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <WordCloud
            config={{
              data: CloudData,
            }}
            onEvents={{ click: this.onChartClick }}
            onTooltipFormat={this.onTooltipFormat}
          />
          <hr />
          <p className="sample-title">
            词云图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { WordCloud } from 'deep-viz';

// 创建虚假数据
  const CloudData=[
    { name: 'Sam S Club', value: 10000 },
    { name: 'Macys', value: 9999 },
    { name: 'Amy Schumer', value: 4386 },
    { name: 'Jurassic World', value: 4055 },
    { name: 'Charter Communications', value: 2467 },
    { name: 'Chick Fil A', value: 2244 },
    { name: 'Planet Fitness', value: 1898 },
    { name: 'Pitch Perfect', value: 1484 },
    { name: 'Express', value: 1112 },
    { name: 'Home', value: 965 },
    { name: 'Johnny Depp', value: 847 },
    { name: 'Lena Dunham', value: 582 },
    { name: 'Lewis Hamilton', value: 555 },
    { name: 'KXAN', value: 550 },
    { name: 'Mary Ellen Mark', value: 462 },
    { name: 'Farrah Abraham', value: 366 },
    { name: 'Rita Ora', value: 360 },
    { name: 'Serena Williams', value: 282 },
    { name: 'NCAA baseball tournament', value: 273 },
    { name: 'Point Break', value: 265 },
  ];

// 自定义tooltip浮层
onTooltipFormat(params) {
  console.log(params);
}

// 事件交互回调
onChartClick(params, echart) {
  console.log(params, echart);
}

ReactDOM.render(
  <WordCloud
    config={{
      data: CloudData,
    }}
    style={{ height: 500, width: '100%' }}
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
