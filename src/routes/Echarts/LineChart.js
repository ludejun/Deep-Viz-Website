import React from 'react';
import { Card, Icon } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import Highlight from 'react-highlight';
import { LineChart } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class LineChartShow extends Basic {
  onTooltipFormat(params) {
    // console.log(params);
    const tips = `<div class='tooltip-sample'>这是自定义的Tooltip<br/>
      ${params[0].seriesName}数据的第${params[0].dataIndex}位：${params[0].data}，同比增长<span>50%</span><br/>
      ${params[1].seriesName}数据的第${params[1].dataIndex}位：${params[1].data}，同比减少<span>50%</span><br/>
    `;
    return tips;
  }

  onChartClick(params, echart) {
    console.log(params, echart);
  }

  render() {
    const lineData = { date: [], y1: [], y2: [] };
    for (let i = 0; i < 20; i++) {
      lineData.y1.push(_.random(50, 100));
      lineData.y2.push(_.random(50, 100));
      lineData.date.push(
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
        defaultValue:
          "['#2CA51A', '#0BBEFE', '#F8B853', '#EA6C6B', '#8AAAF6', '#4F76D1', '#C1DFFF', '#F7F7F7']",
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
        parameter: 'x',
        description: '必需，定义x轴数据源，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'y',
        description: '必需，定义y轴数据源及配置，详见下面Table；此数组的长度=y轴数量',
        type: 'Array',
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
        defaultValue: 'null | { start: 30, end: 100 }',
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
        parameter: 'showTooltip',
        description: '非必需，是否显示提示框组件',
        type: 'Boolean',
        defaultValue: 'true',
      },
      {
        parameter: 'isLegendShow',
        description: '非必需，是否显示legend',
        type: 'Boolean',
        defaultValue: 'true',
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
        description: '非必需，定义x轴label旋转角度，[-90, 90]取值',
        type: 'Int',
        defaultValue: '0',
      },
      {
        parameter: 'showAll',
        description: '非必需，定义x轴label是否全显示，默认会在不遮挡的情况下间隔显示',
        type: 'Boolean',
        defaultValue: 'false',
      },
      {
        parameter: 'isXAxisShow',
        description: '非必需，定义x轴是否显示',
        type: 'Boolean',
        defaultValue: 'true',
      },
    ];
    const ySource = [
      {
        parameter: 'data',
        description:
          '必需，定义此y轴上的数据，data里面的每个元素都是一个数组，data.length=此y轴上折线数量，并与legend.length相同；数据中缺省值一般设为null',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'legend',
        description: '必需，定义此y轴上折线的名称，并与data.length相同，每个元素都为String',
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
        parameter: 'smooth',
        description: '非必需，此y轴上所有的折线是否做圆滑处理',
        type: 'Boolean',
        defaultValue: 'false',
      },
      {
        parameter: 'areaStyle',
        description: '非必需，折线下方的颜色填充，数组的每个元素为Object，主要可用于堆积图，可参考示例及Echarts.series.line.areaStyle',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'lineStyle',
        description:
          '非必需，自定义折线的样式（主要为color、width、type等），数组的每个元素为Object，可参考示例及Echarts.series.line.lineStyle',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'showSymbol',
        description: '非必需，是否显示标记的图形',
        type: 'Boolean',
        defaultValue: 'true',
      },
      {
        parameter: 'stack',
        description: '非必需，此y轴的数据是否累积显示（堆积图）；当两个坐标轴都需要分别堆积时，请使用不一样的String，否则数据都会堆到一块',
        type: 'Boolean/String',
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
        description: '非必需，定义y轴是否显示',
        type: 'Boolean',
        defaultValue: 'true',
      },
    ];
    const tableConfig = [
      { title: 'LineChart', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'x: {data: [], name: ""}', subtitle: '', dataSource: xSource },
      {
        title: 'y: [{data: [], legend: []...}...]',
        subtitle: 'config.y是一个长度等于y轴数量的数组，每个数组元素是一个Object，以下为每个Object的API',
        dataSource: ySource,
      },
    ];
    return (
      <div>
        <p className="container-header">LineChart 折线图</p>
        <p>基础折线图、折线堆积图、双Y坐标轴折线图、圆滑曲线图，极简曲线图等都可以使用本组件，并支持x轴缩放</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <LineChart
            config={{
              x: { data: lineData.date },
              y: [
                {
                  data: [lineData.y1, lineData.y2],
                  legend: ['图例1', '图例2'],
                  name: '人数/个',
                },
              ],
            }}
            style={{ height: 200, width: '100%' }}
          />
          <hr />
          <p className="sample-title">
            单Y轴、多图例基础折线图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">默认颜色，单Y轴上有两组数据，Y轴上没有分割线、有名称及单位</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { LineChart } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const lineData = { date: [], y1: [], y2: [] };
for (let i = 0; i < 20; i++) {
  lineData.y1.push(_.random(50, 100));
  lineData.y2.push(_.random(50, 100));
  lineData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <LineChart
    config={{
      x: { data: lineData.date },
      y: [{
        data: [lineData.y1, lineData.y2],
        legend: ['图例1', '图例2'],
        splitLine: false,
        name: '人数/个',
      }],
    }}
    style={{ height: 200, width: '100%' }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <LineChart
            config={{
              title: '未来日期各图例的人数累积图',
              x: { data: lineData.date, name: '日期' },
              y: [
                {
                  data: [lineData.y1, lineData.y2],
                  legend: ['图例1', '图例2'],
                  toolbox: true,
                  splitLine: true,
                  name: '人数/个',
                  stack: true,
                  areaStyle: [{ normal: { color: '#90EE90' } }, { normal: { color: '#ADD8E6' } }],
                },
              ],
              grid: { top: 50, right: 40 },
            }}
            style={{ height: 250, width: '100%' }}
          />
          <hr />
          <p className="sample-title">
            单Y轴、多图例堆积折线图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">
            单Y轴上有两组数据，Y轴上有分割线；x轴有右侧名称，相应的grid.right要加大；Chart有title，相应的grid.top要加大；
            给两条线的堆积区域加上areaStyle填充颜色
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { LineChart } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const lineData = { date: [], y1: [], y2: [] };
for (let i = 0; i < 20; i++) {
  lineData.y1.push(_.random(50, 100));
  lineData.y2.push(_.random(50, 100));
  lineData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <LineChart
    config={{
      title: '未来日期各图例的人数累积图',
      x: { data: lineData.date },
      y: [{
        data: [lineData.y1, lineData.y2],
        legend: ['图例1', '图例2'],
        toolbox: true,
        splitLine: true,
        name: '人数/个',
        stack: true,
        areaStyle: [{ normal: { color: '#90EE90' } }, { normal: { color: '#ADD8E6' } }],
      }],
      grid: { top: 50, right: 40 },
    }}
    style={{ height: 250, width: '100%' }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <LineChart
            color={['#108EE9', '#C96DD8']}
            config={{
              x: { data: lineData.date },
              y: [
                {
                  data: [lineData.y1],
                  legend: ['图例1'],
                  name: '人数/个',
                  smooth: true,
                },
                {
                  data: [lineData.y2],
                  legend: ['图例2'],
                  smooth: true,
                  min: 30,
                },
              ],
              grid: { right: 10 },
            }}
            style={{ height: 250, width: '100%' }}
          />
          <hr />
          <p className="sample-title">
            双Y轴、多图例圆滑曲线图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">自定义颜色，双Y轴上有两组数据，对每个Y轴上的折线做圆滑处理，其中右坐标轴最小值设为30</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { LineChart } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const lineData = { date: [], y1: [], y2: [] };
for (let i = 0; i < 20; i++) {
  lineData.y1.push(_.random(50, 100));
  lineData.y2.push(_.random(50, 100));
  lineData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <LineChart
    color={['#108EE9', '#C96DD8']}
    config={{
      x: { data: lineData.date },
      y: [{
        data: [lineData.y1],
        legend: ['图例1'],
        name: '人数/个',
        smooth: true,
      }, {
        data: [lineData.y2],
        legend: ['图例2'],
        smooth: true,
        min: 30,
      }],
     grid: { right: 10 },
    }}
    style={{ height: 250, width: '100%' }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <LineChart
            color={['#2CA51A', '#0BBEFE']}
            config={{
              x: { data: lineData.date },
              y: [
                {
                  data: [lineData.y1, lineData.y2],
                  legend: ['图例1', '图例2'],
                  name: '人数/个',
                  smooth: true,
                },
              ],
              dataZoom: { start: 50, end: 95 },
              grid: { bottom: 60, right: 30 },
              toolbox: true,
            }}
            style={{ height: 250, width: '100%' }}
            onTooltipFormat={this.onTooltipFormat}
            onEvents={{ click: this.onChartClick }}
          />
          <hr />
          <p className="sample-title">
            自定义Tooltip，x轴上有dataZoom，显示右上角工具箱，有点击回调函数
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">
            自定义颜色，提示浮层自定义，圆滑曲线，x轴上有dataZoom可以缩放x轴（显示后50%），并且在dataZoom上可以看到整体的趋势（相应增加grid）；
            onTooltipFormat函数的参数params包含当前点的所有数据，可以console看看；右上角有默认工具箱，具有区域缩放、查看原始数据、保存图片功能
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { LineChart } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const lineData = { date: [], y1: [], y2: [] };
for (let i = 0; i < 20; i++) {
  lineData.y1.push(_.random(50, 100));
  lineData.y2.push(_.random(50, 100));
  lineData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
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

// 事件交互回调
onChartClick(params, echart) {
  console.log(params, echart);
}

ReactDOM.render(
  <LineChart
    color={['#2CA51A', '#0BBEFE']}
    config={{
      x: { data: lineData.date },
      y: [{
        data: [lineData.y1, lineData.y2],
        legend: ['图例1', '图例2'],
        splitLine: false,
        name: '人数/个',
        smooth: true,
      }],
      dataZoom: { start: 50, end: 95 },
      grid: { bottom: 60, right: 30 },
      toolbox: true,
    }}
    style={{ height: 200, width: '100%' }}
    onTooltipFormat={this.onTooltipFormat}
    onEvents={{ click: this.onChartClick }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <LineChart
            config={{
              x: { data: lineData.date, isXAxisShow: false },
              y: [
                {
                  data: [lineData.y1],
                  legend: ['图例1'],
                  isYAxisShow: false,
                  smooth: true,
                  areaStyle: [{ normal: { color: '#90EE90' } }],
                },
              ],
              isLegendShow: false,
            }}
            style={{ height: 150, width: '100%' }}
          />
          <hr />
          <p className="sample-title">
            极简曲线图，常用于Dashborad总览
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">不显示坐标轴及legend，有填充颜色，线条圆滑</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { LineChart } from 'deep-viz';
import _ from 'lodash';
import moment from 'moment';

// 创建虚假数据
const lineData = { date: [], y1: [] };
for (let i = 0; i < 20; i++) {
  lineData.y1.push(_.random(50, 100));
  lineData.date.push(moment().add(i, 'days').format('YYYY/MM/DD'));
}

ReactDOM.render(
  <LineChart
    config={{
      x: { data: lineData.date, isXAxisShow: false },
      y: [
        {
          data: [lineData.y1],
          legend: ['图例1'],
          isYAxisShow: false,
          smooth: true,
          areaStyle: [{ normal: { color: '#90EE90' } }],
        },
      ],
      isLegendShow: false,
    }}
    style={{ height: 150, width: '100%' }}
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
