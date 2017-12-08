import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { ShadeMap } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ShadeMapShow extends Basic {
  onTooltipFormat(params) {
    const tips = `<div class='tooltip-sample'>
      ${params.$vars[1]} : ${params.data.name}<br/>
      ${params.$vars[2]} : ${params.data.value === undefined ? '-' : params.data.value}<br/>
    `;
    return tips;
  }

  onChartClick(params, echart) {
    console.log(params, echart);
  }
  render() {
    const data = [
      { name: '广西', value: 10 },
      { name: '湖南', value: 20 },
      { name: '江西', value: 30 },
      { name: '湖北', value: 40 },
      { name: '河南', value: 50 },
      { name: '四川', value: 60 },
      { name: '福建', value: 70 },
      { name: '北京', value: 80 },
      { name: '贵州', value: 90 },
      { name: '浙江', value: 100 },
    ];

    const chartSource = [{
      parameter: 'mapConfig',
      description: '非必需，配置地图的基础样式，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'dataConfig',
      description: '必需，配置省份区分图的数据源等，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'style',
      description: '非必需，设置Chart的宽高等，一般格式{ height: 高度, width: 宽度 }',
      type: 'Object',
      defaultValue: '{ height: 450, width: \'100%\' }',
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
    const mapConfigSource = [{
      parameter: 'areaColor',
      description: '非必需，设置地图的颜色',
      type: 'String',
      defaultValue: '#F3F3F3',
    }, {
      parameter: 'hoverColor',
      description: '非必需，设置地图省份悬停的颜色',
      type: 'String',
      defaultValue: '#C0B796',
    }, {
      parameter: 'borderWidth',
      description: '非必需，设置地图边框的粗细',
      type: 'Number',
      defaultValue: 1,
    }, {
      parameter: 'borderColor',
      description: '非必需，设置地图边框的颜色',
      type: 'String',
      defaultValue: 'rgba(243,243,243,.5)',
    }];
    const dataConfigSource = [{
      parameter: 'title',
      description: '非必需，设置Chart的标题，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'visualMap',
      description: '非必需，设置可视化组件',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'isLableShow',
      description: '非必需，用于地图上是否显示省的名字',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'tooltip',
      description: '非必需，用于显示提示框浮层内容',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'province',
      description: '必需，配置省份区分图的数据源等，详见下面Table',
      type: 'Array',
      defaultValue: 'null',
    }];

    const proviceConfigSource = [{
      parameter: 'name',
      description: '必需，要显示省份的名字',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'value',
      description: '必需，要显示省份的范围',
      type: 'Number',
      defaultValue: 'null',
    }];

    const titleConfigSource = [{
      parameter: 'text',
      description: '非必需，设置Chart的标题',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'subtext',
      description: '非必需，设置Chart的副标题',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'textStyle',
      description: '非必需，设置Chart标题字体的大小和颜色',
      type: 'Object',
      defaultValue: '{ color: "#4A4A4A", fontSize: 14 }',
    }, {
      parameter: 'x',
      description: '非必需，设置Chart标题x轴的位置有 left center right 可选',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'y',
      description: '非必需，设置Char标题y轴的位置有 top center bottom 可选',
      type: 'String',
      defaultValue: 'null',
    }];

    const visualConfigSource = [{
      parameter: 'min',
      description: '非必需，设置颜色范围的最小值',
      type: 'Number',
      defaultValue: '0',
    }, {
      parameter: 'max',
      description: '非必需，设置颜色范围的最大值',
      type: 'Number',
      defaultValue: '100',
    }, {
      parameter: 'left',
      description: '非必需，设置可视化组件的水平位置',
      type: 'String',
      defaultValue: 'left',
    }, {
      parameter: 'top',
      description: '非必需，设置可视化组件的垂直位置',
      type: 'String',
      defaultValue: 'bottom',
    }, {
      parameter: 'text',
      description: '非必需，设置文本的内容',
      type: 'Array',
      defaultValue: '["高", "低"],',
    }, {
      parameter: 'calculable',
      description: '非必需，是否可以拖拽',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'inRange',
      description: '非必需，设置地图过渡的颜色',
      type: 'Object',
      defaultValue: '{color: ["e0ffff", "#006edd"]}',
    }];

    const tableConfig = [
      { title: 'ShadeMap', subtitle: '', dataSource: chartSource },
      { title: 'mapConfig', subtitle: '', dataSource: mapConfigSource },
      { title: 'dataConfig', subtitle: '', dataSource: dataConfigSource },
      { title: 'visualMapConfig', subtitle: '', dataSource: visualConfigSource },
      { title: 'title', subtitle: '', dataSource: titleConfigSource },
      { title: 'provice', subtitle: '', dataSource: proviceConfigSource },
    ];
    return (
      <div>
        <p className="container-header">ShadeMap 区域阴影地图</p>
        <p>默认加载中国地图，根据不同区域（省份）的值，做出不同颜色的阴影地图。颜色可为渐变或每个区域固定色，省份的名称可以加上。Tooltip支持自定义显示。</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <ShadeMap
            dataConfig={{
              visualMap: {},
              tooltip: true,
              province: data,
            }}
            style={{ height: 450, width: '100%' }}
            onEvents={{ click: this.onChartClick }}
            onTooltipFormat={this.onTooltipFormat}
          />
          <hr />
          <p className="sample-title">
            省份颜色划分图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { ShadeMap } from 'deep-viz';

// 创建虚假数据
const data = [
  { name: '广西', value: 10 },
  { name: '湖南', value: 20 },
  { name: '江西', value: 30 },
  { name: '湖北', value: 40 },
  { name: '河南', value: 50 },
  { name: '四川', value: 60 },
  { name: '福建', value: 70 },
  { name: '北京', value: 80 },
  { name: '贵州', value: 90 },
  { name: '浙江', value: 100 },
];

// 自定义tooltip浮层
onTooltipFormat(params) {
  // console.log(params);
  const tips = \`<div class='tooltip-sample'>这是自定义的Tooltip<br/>
      \${params.$vars[1]} : \${params.data.name}<br/>
      \${params.$vars[2]} : \${params.data.value}<br/>
    \`;
  return tips;
}

// 事件交互回调
onChartClick(params, echart) {
  console.log(params, echart);
}

ReactDOM.render(
  <ShadeMap
    dataConfig={{
      visualMap: {},
      tooltip: true,
      province: data,
    }}
    style={{ height: 450, width: '100%' }}
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
