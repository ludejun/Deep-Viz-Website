import React from 'react';
import { Card, Icon } from 'antd';
import _ from 'lodash';
import Highlight from 'react-highlight';
import { BarHorizontal } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class BarHorizontalShow extends Basic {
  render() {
    const barData = { category: ['上海市', '内蒙古自治区', '北京市', '广西壮族自治区', '香港特别行政区', '江苏省', '山东省'], y1: [], y2: [] };
    for (let i = 0; i < 7; i++) {
      barData.y1.push(_.random(50, 100));
      barData.y2.push(_.random(50, 100));
    }
    // let chartWidth = this.refs.barHorizontalSample && this.refs.barHorizontalSample.clientWidth;
    // console.log(chartWidth);
    const chartSource = [{
      parameter: 'color',
      description: '非必需，自定义折线的颜色数组，按顺序取色',
      type: 'Array',
      defaultValue: '同LineChart.color',
    }, {
      parameter: 'config',
      description: '必需，配置Chart的数据源等，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'style',
      description: '非必需，设置Chart的宽高等，一般格式{ height: 高度, width: 宽度 }',
      type: 'Object',
      defaultValue: '{ height: 250, width: \'100%\' }',
    }, {
      parameter: 'onEvents',
      description: '非必需，所有的事件交互回调集合，可参考LineChart示例代码；一般为点击事件，参数为params及echart实例；事件类型可参考Echarts.events',
      type: 'Object',
      defaultValue: 'null',
    }];
    const configSource = [{
      parameter: 'x',
      description: '必需，定义x轴数据源及配置，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'y',
      description: '必需，定义y轴数据源，详见下面Table；此组件只支持单Y轴',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'title',
      description: '非必需，设置Chart的标题，当有title时，legend会放在右边；推荐在组件外写title',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'subtitle',
      description: '非必需，设置Chart的副标题，当有title时，legend会放在右边；推荐在组件外写subtitle',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'grid',
      description: '非必需，控制直角坐标系上下左右的留白空间，当有右侧y轴、x轴name、y轴name、config.title、dataZoom等时，应适当加大',
      type: 'Object',
      defaultValue: '{ left: 10, right: 0, top: 30, bottom: 10 }',
    }, {
      parameter: 'toolbox',
      description: '非必需，是否显示工具箱',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'dataLable',
      description: '非必需，是否在柱子上显示数据；参考示例代码，可定义为{unit:\'\', position:\'\', color:\'\'}；' +
      'unit可以在数据后显示单位；position可以规定数据显示的位置，默认为right，另外可取值inside、bottom、insideTop、insideBottom等，可以定义为[x,y]相对坐标点',
      type: 'Object',
      defaultValue: 'right',
    }, {
      parameter: 'shadowBar',
      description: '非必需，是否显示柱子后面的阴影；当只有一条柱子或堆积时有效，可配置{color:\'\', value:}；' +
      'color默认为rgba(0,0,0,0.05)，value默认为x.data[0]的最大值，可以自己指定阴影的长度',
      type: 'Object',
      defaultValue: 'null',
    }];
    const xSource = [{
      parameter: 'data',
      description: '必需，定义x轴上的数据，data里面的每个元素都是一个数组，data.length=柱子类型数量，并与legend.length相同；数据中缺省值一般设为null',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'name',
      description: '非必需，定义x轴名称，放于坐标轴右侧',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'legend',
      description: '非必需，定义x轴上柱子类型的名称，并与data.length相同，每个元素都为String；当不定义时不显示',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'axisShow',
      description: '非必需，是否显示x轴，在某些情况下也不显示x轴；默认不显示',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'stack',
      description: '非必需，柱子是否累积显示（堆积图）',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'min',
      description: '非必需，设置x轴的最小值，一般是0',
      type: 'Int',
      defaultValue: 'null',
    }, {
      parameter: 'max',
      description: '非必需，设置x轴的最大值，一般Chart会自己适应',
      type: 'Int',
      defaultValue: 'null',
    }, {
      parameter: 'splitLine',
      description: '非必需，x轴上是否有分割线，当x.axisShow为true时有效',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'barGap',
      description: '非必需，不同柱子间非堆积情况的间隙；可为整数或百分比字符串；不推荐使用',
      type: 'Int/String',
      defaultValue: '0',
    }, {
      parameter: 'barWidth',
      description: '非必需，柱子的宽度，默认会自适应',
      type: 'Int',
      defaultValue: 'null',
    }, {
      parameter: 'color',
      description: '非必需，每个柱子类型的颜色，color.length=data.length；每个元素可以是颜色字符串，也可以是一个数组，' +
      '当每个元素是数组时，会从第1个颜色渐变到第2个颜色',
      type: 'Array',
      defaultValue: 'null',
    }];
    const ySource = [{
      parameter: 'data',
      description: '必需，定义y轴数据源，一般是组String',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'name',
      description: '非必需，此y轴的名称，可将单位也放于此，放于y轴上方',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'axisShow',
      description: '非必需，是否显示y轴；默认显示',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'axisTickShow',
      description: '非必需，是否显示y轴上的刻度；默认不显示',
      type: 'Boolean',
      defaultValue: 'false',
    }, {
      parameter: 'axisLine',
      description: '非必需，是否显示y轴那根坐标线',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'labelShow',
      description: '非必需，是否显示y轴刻度的标签；默认显示',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'labelColor',
      description: '非必需，y轴刻度的标签颜色；默认#999999',
      type: 'String',
      defaultValue: '#999999',
    }, {
      parameter: 'labelSize',
      description: '非必需，y轴刻度的标签字体大小；默认12',
      type: 'Int',
      defaultValue: '12',
    }];
    const tableConfig = [
      { title: 'BarHorizontal', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'x: {data: [], name: "", legend: [], color: []...}', subtitle: '', dataSource: xSource },
      {
        title: 'y: {data: [], name: ""...}',
        subtitle: '',
        dataSource: ySource,
      },
    ];
    return (
      <div>
        <p className="container-header">BarHorizontal 横向柱状图</p>
        <p>一般用于商业数据分析，从大到小排序；或者是每项名字过长横向显示的柱状图；和普通坐标系不同，此组件的x、y会颠倒；支持颜色渐变</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <BarHorizontal
            config={{
              x: { data: [barData.y1.sort()] },
              y: { data: barData.category },
            }}
          />
          <hr />
          <p className="sample-title">
            基本横向柱状图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">默认颜色；默认不显示x轴，数据会标在柱子右侧；y轴上默认没有刻度</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { BarHorizontal } from 'deep-viz';
import _ from 'lodash';

// 创建虚假数据
const barData = { category: ['上海市', '内蒙古自治区', '北京市', '广西壮族自治区', '香港特别行政区', '江苏省', '山东省'], y1: [], y2: [] };
for (let i = 0; i < 7; i++) {
  barData.y1.push(_.random(50, 100));
}

ReactDOM.render(
  <BarHorizontal
    config={{
      x: { data: [barData.y1.sort()] },
      y: { data: barData.category },
    }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card ref={() => 'barHorizontalSample'}>
          <BarHorizontal
            config={{
              x: {
                data: [barData.y1.sort()],
                barWidth: 20,
                max: 100,
                color: [['#06F0FB', '#6D83F1']],
              },
              y: { data: barData.category, axisLine: false },
              shadowBar: {},
              dataLable: { position: [450, 5], color: '#0BBEFE' },
            }}
            style={{ height: 300, width: 600 }}
          />
          <hr />
          <p className="sample-title">
            简洁、有阴影、颜色渐变、数据Lable固定的横向柱状图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">
            x轴默认不显示，固定柱子的宽度为20；y轴坐标线不显示；显示后面灰色阴影（shadowBar），可以修改颜色、长度等（参考API）；
            柱子颜色渐变，从第一个颜色渐变到第二个；
            固定数据Label在每根柱子的[430,5]位置上，不设置position则默认如上个示例，并修改默认颜色
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { BarHorizontal } from 'deep-viz';
import _ from 'lodash';

// 创建虚假数据
const barData = { category: ['上海市', '内蒙古自治区', '北京市', '广西壮族自治区', '香港特别行政区', '江苏省', '山东省'], y1: [], y2: [] };
for (let i = 0; i < 7; i++) {
  barData.y1.push(_.random(50, 100));
}

ReactDOM.render(
  <BarHorizontal
    config={{
      x: {
        data: [barData.y1.sort()],
        barWidth: 20,
        max: 100,
        color: [['#06F0FB', '#6D83F1']],
      },
      y: { data: barData.category, axisLine: false },
      shadowBar: {},
      dataLable: { position: [450, 5], color: '#0BBEFE' },
    }}
    style={{ height: 300, width: 600 }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <BarHorizontal
            color={['#2CA51A', '#0BBEFE']}
            config={{
              x: {
                data: [barData.y1, barData.y2],
                stack: true,
                legend: ['图例1', '图例2'],
              },
              y: { data: barData.category, axisTickShow: true, labelColor: '#000' },
              dataLable: { position: 'inside' },
              shadowBar: { value: 200 },
              grid: { top: 30 },
            }}
          />
          <hr />
          <p className="sample-title">
            堆积横向柱状图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">x轴上两组数据堆积，stack不设置为并排两列柱子；显示图例；y轴显示刻度，更改了y轴标签的默认颜色；
            数据Label放在每个柱子中间；有图例需适当加大grid.top的大小</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { LineChart } from 'deep-viz';
import _ from 'lodash';

// 创建虚假数据
const barData = { category: ['上海市', '内蒙古自治区', '北京市', '广西壮族自治区', '香港特别行政区', '江苏省', '山东省'], y1: [], y2: [] };
for (let i = 0; i < 20; i++) {
  barData.y1.push(_.random(50, 100));
  barData.y2.push(_.random(50, 100));
}

ReactDOM.render(
  <BarHorizontal
    color={['#2CA51A', '#0BBEFE']}
    config={{
      x: {
        data: [barData.y1, barData.y2],
        stack: true,
        legend: ['图例1', '图例2'],
      },
      y: { data: barData.category, axisTickShow: true, labelColor: '#000' },
      dataLable: { position: 'inside' },
      shadowBar: { value: 200 },
      grid: { top: 30 },
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
