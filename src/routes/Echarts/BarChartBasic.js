import React from 'react';
import { Card, Icon } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import Highlight from 'react-highlight';
import { BarChartBasic } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class BarChartBasicShow extends Basic {
  onTooltipFormat(params) {
    const tips = `<div class='tooltip-sample'>这是自定义的Tooltip<br/>
      ${params[0].seriesName}数据的第${params[0].dataIndex}位：${params[0].data}，同比增长<span>50%</span><br/>
      ${params[1].seriesName}数据的第${params[1].dataIndex}位：${params[1].data}，同比减少<span>50%</span><br/>
    `;
    return tips;
  }

  render() {
    const barData = { date: [], y1: [], y2: [] };
    for (let i = 0; i < 10; i++) {
      barData.y1.push(_.random(50, 100));
      barData.y2.push(_.random(50, 100));
      barData.date.push(
        moment()
          .add(i, 'days')
          .format('YYYY/MM/DD'),
      );
    }
    const chartSource = [
      {
        parameter: 'color',
        description: '非必需，自定义折线的颜色数组，按顺序取色',
        type: 'Array',
        defaultValue: '同LineChart.color',
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
        description: '非必需，自定义提示框浮层内容及样式，传递给父组件，参数有params等，具体可参考示例代码',
        type: 'Function',
        defaultValue: 'null',
      },
      {
        parameter: 'onEvents',
        description:
          '非必需，所有的事件交互回调集合，可参考LineChart示例代码；一般为点击事件，参数为params及echart实例；事件类型可参考Echarts.events',
        type: 'Object',
        defaultValue: 'null',
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
        description: '必需，定义y轴数据源及配置，详见下面Table；此组件只支持单Y轴，双Y轴推荐LineBarChart或LineChart',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'title',
        description: '非必需，设置Chart的标题，当有title时，legend会放在右边；推荐在组件外写title',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'subtitle',
        description: '非必需，设置Chart的副标题，当有title时，legend会放在右边；推荐在组件外写subtitle',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'dataZoom',
        description: '非必需，用于x轴区域缩放，并可以看到走势概览，默认显示后70%，在x轴数据量大时使用',
        type: 'Object',
        defaultValue: '{ start: 30, end: 100 }',
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
      {
        parameter: 'dataLable',
        description:
          "非必需，是否在柱子上显示数据；参考示例代码，可定义为{unit:'', position:'', color:''}；" +
          'unit可以在数据后显示单位；position可以规定数据显示的位置，默认为top，另外可取值inside、bottom、insideTop、insideBottom等',
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
      {
        parameter: 'name',
        description: '非必需，定义x轴名称，放于坐标轴右侧',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'rotate',
        description: '非必需，定义x轴名称旋转角度，[-90, 90]取值',
        type: 'Int',
        defaultValue: '0',
      },
      {
        parameter: 'showAll',
        description: '非必需，定义x轴名称是否全显示，默认会在不遮挡的情况下间隔显示',
        type: 'Boolean',
        defaultValue: 'false',
      },
      {
        parameter: 'isXAxisShow',
        description: '非必需，是否显示x轴，在某些情况下也不显示x轴；默认显示',
        type: 'Boolean',
        defaultValue: 'true',
      },
      {
        parameter: 'axisTickShow',
        description: '非必需，是否显示x轴上的小刻度线；默认显示',
        type: 'Boolean',
        defaultValue: 'true',
      },
    ];
    const ySource = [
      {
        parameter: 'data',
        description:
          '必需，定义y轴上的数据，data里面的每个元素都是一个数组，data.length=柱子类型数量，并与legend.length相同；数据中缺省值一般设为null',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'legend',
        description: '非必需，定义此y轴上柱子类型的名称，并与data.length相同，每个元素都为String；当不定义时不显示',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'name',
        description: '非必需，此y轴的名称，可将单位也放于此，放于y轴上方',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'stack',
        description: '非必需，柱子是否累积显示（堆积图）',
        type: 'Boolean',
        defaultValue: 'false',
      },
      {
        parameter: 'min',
        description: '非必需，设置此y轴的最小值，一般是0',
        type: 'Int',
        defaultValue: 'null',
      },
      {
        parameter: 'max',
        description: '非必需，设置此y轴的最大值，一般Chart会自己适应',
        type: 'Int',
        defaultValue: 'null',
      },
      {
        parameter: 'splitLine',
        description: '非必需，此y轴上是否有分割线',
        type: 'Boolean',
        defaultValue: 'false',
      },
      {
        parameter: 'isYAxisShow',
        description: '非必需，是否显示y轴；默认显示',
        type: 'Boolean',
        defaultValue: 'true',
      },
      {
        parameter: 'axisTickShow',
        description: '非必需，是否显示y轴上的刻度；默认显示',
        type: 'Boolean',
        defaultValue: 'true',
      },
      {
        parameter: 'labelShow',
        description: '非必需，是否显示y轴刻度的标签；默认显示',
        type: 'Boolean',
        defaultValue: 'true',
      },
      {
        parameter: 'barGap',
        description: '非必需，不同柱子间非堆积情况的间隙；可为整数或百分比字符串；不推荐使用',
        type: 'Int/String',
        defaultValue: '0',
      },
      {
        parameter: 'barWidth',
        description: '非必需，柱子的宽度，默认会自适应',
        type: 'Int',
        defaultValue: 'null',
      },
      {
        parameter: 'color',
        description:
          '非必需，每个柱子类型的颜色，color.length=data.length；每个元素可以是颜色字符串，也可以是一个数组，' +
          '当每个元素是数组时，会从第1个颜色渐变到第2个颜色',
        type: 'Array',
        defaultValue: 'null',
      },
    ];
    const tableConfig = [
      { title: 'BarChartBasic', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'x: {data: [], name: ""}', subtitle: '', dataSource: xSource },
      {
        title: 'y: {data: [], legend: []...}',
        subtitle: '',
        dataSource: ySource,
      },
    ];
    return (
      <div>
        <p className="container-header">BarChartBasic 基础柱状图</p>
        <p>基础柱状图、极简柱状图、堆积柱状图等各种柱状图都可以使用本组件，支持x轴缩放</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <BarChartBasic
            config={{
              x: { data: barData.date },
              y: {
                data: [barData.y1, barData.y2],
                legend: ['图例1', '图例2'],
                name: '人数/个',
              },
            }}
          />
          <hr />
          <p className="sample-title">
            多图例基础柱状图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">默认颜色，单Y轴上有两组数据，Y轴上有名称及单位，显示图例</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { BarChartBasic } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const barData = { date: [], y1: [], y2: [] };
for (let i = 0; i < 10; i++) {
  barData.y1.push(_.random(50, 100));
  barData.y2.push(_.random(50, 100));
  barData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <BarChartBasic
    config={{
      x: { data: barData.date },
      y: {
        data: [barData.y1, barData.y2],
        legend: ['图例1', '图例2'],
        name: '人数/个',
      },
    }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <BarChartBasic
            config={{
              x: { data: barData.date, rotate: -45, showAll: true },
              y: {
                isYAxisShow: false,
                data: [barData.y1],
                color: [['#06F0FB', '#6D83F1']],
              },
              dataLable: { unit: '%', color: '#0BBEFE' },
              grid: { right: 50, bottom: 60 },
            }}
          />
          <hr />
          <p className="sample-title">
            极简柱状图，颜色渐变
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">
            不显示Y轴和legend，x轴的数据名称在进行一定的旋转后全部显示，这需要适当加大bottom和right的grid； 柱子颜色渐变，从第一个颜色渐变到第二个；
            每个柱子上显示label，并可以附加单位%，自定义颜色； 如想修改默认的tooltip，可以调用onTooltipFormat
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { BarChartBasic } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const barData = { date: [], y1: [] };
for (let i = 0; i < 20; i++) {
  barData.y1.push(_.random(50, 100));
  barData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <BarChartBasic
    config={{
      x: { data: barData.date, rotate: -45, showAll: true },
      y: {
        isYAxisShow: false,
        data: [barData.y1],
        color: [['#06F0FB', '#6D83F1']],
      },
      dataLable: { unit: '%', color: '#0BBEFE' },
      grid: { right: 50, bottom: 60 },
    }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <BarChartBasic
            color={['#2CA51A', '#0BBEFE']}
            config={{
              x: { data: barData.date, showAll: true },
              y: {
                data: [barData.y1, barData.y2],
                legend: ['图例1', '图例2'],
                name: '人数/个',
                stack: true,
                barWidth: 40,
              },
              dataLable: { position: 'inside' },
            }}
          />
          <hr />
          <p className="sample-title">
            堆积柱状图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">单Y轴上有两组数据堆积显示，每个柱子显示数据在中间；控制柱子的宽度为40；x轴lable全部显示</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { BarChartBasic } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const barData = { date: [], y1: [], y2: [] };
for (let i = 0; i < 20; i++) {
  barData.y1.push(_.random(50, 100));
  barData.y2.push(_.random(50, 100));
  barData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <BarChartBasic
    color={['#2CA51A', '#0BBEFE']}
    config={{
      x: { data: barData.date, showAll: true },
      y: {
        data: [barData.y1, barData.y2],
        legend: ['图例1', '图例2'],
        name: '人数/个',
        stack: true,
        barWidth: 40,
      },
      dataLable: { position: 'inside' },
    }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <BarChartBasic
            color={['#EA6C6B', '#8AAAF6']}
            config={{
              x: { data: barData.date },
              y: {
                data: [barData.y1, barData.y2],
                legend: ['图例1', '图例2'],
                name: '人数/个',
                barWidth: 40,
              },
              dataZoom: { start: 50, end: 95 },
              grid: { bottom: 60, right: 30 },
              toolbox: true,
            }}
            style={{ height: 300, width: '100%' }}
            onTooltipFormat={this.onTooltipFormat}
          />
          <hr />
          <p className="sample-title">
            自定义Tooltip，x轴上有dataZoom，显示右上角工具箱
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">
            自定义颜色，提示浮层自定义，圆滑曲线，x轴上有dataZoom可以缩放x轴（显示后50%），并且在dataZoom上可以看到整体的趋势（相应增加grid）；
            onTooltipFormat函数的参数params包含当前点的所有数据，可以console看看；右上角有默认工具箱，具有区域缩放、查看原始数据、保存图片功能
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { BarChartBasic } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const barData = { date: [], y1: [], y2: [] };
for (let i = 0; i < 20; i++) {
  barData.y1.push(_.random(50, 100));
  barData.y2.push(_.random(50, 100));
  barData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

// 自定义tooltip浮层
onTooltipFormat(params) {
  // console.log(params);
  const tips = \`<div class='tooltip-sample'>这是自定义的Tooltip<br/>
    \${params[0].seriesName}数据的第\${params[0].dataIndex}位：\${params[0].data}，同比增长<span>50%</span><br/>
    \${params[1].seriesName}数据的第\${params[1].dataIndex}位：\${params[1].data}，同比减少<span>50%</span><br/>
    \`;
  return tips;
}

ReactDOM.render(
  <BarChartBasic
    color={['#EA6C6B', '#8AAAF6']}
    config={{
      x: { data: barData.date },
      y: {
        data: [barData.y1, barData.y2],
        legend: ['图例1', '图例2'],
        name: '人数/个',
        barWidth: 40,
      },
      dataZoom: { start: 50, end: 95 },
      grid: { bottom: 60, right: 30 },
      toolbox: true,
    }}
    style={{ height: 300, width: '100%' }}
    onTooltipFormat={this.onTooltipFormat}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <BarChartBasic
            config={{
              x: { data: barData.date, rotate: -45, showAll: true },
              y: {
                isYAxisShow: false,
                data: [barData.y1],
                color: [['#06F0FB', '#6D83F1']],
              },
              markPoint: {
                data: [
                  {
                    coord: [barData.date[0], barData.y1[0]],
                  },
                ],
              },
              grid: { top: 50, bottom: 60 },
            }}
          />
          <hr />
          <p className="sample-title">
            支持其他series里的配置项。
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">
            本例展示了怎么给数据高亮打点，加了配置项markPoint。<a href="http://echarts.baidu.com/option.html#series-bar">
              查看其他详细配置
            </a>。
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { BarChartBasic } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const barData = { date: [], y1: [] };
for (let i = 0; i < 20; i++) {
  barData.y1.push(_.random(50, 100));
  barData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <BarChartBasic
    config={{
      x: { data: barData.date, rotate: -45, showAll: true },
      y: {
        isYAxisShow: false,
        data: [barData.y1],
        color: [['#06F0FB', '#6D83F1']],
      },
      markPoint: {
        data: [
          {
            coord: [barData.date[0], barData.y1[0]],
          },
        ],
      },
      grid: { top: 50, bottom: 60 },
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
