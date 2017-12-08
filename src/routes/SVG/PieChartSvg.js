import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { PieChartSvg } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ChartSample extends Basic {
  constructor() {
    super();
    this.list = [
      { name: '广场', value: 23 },
      { name: '优惠券', value: 20 },
      { name: '电影', value: 17 },
      { name: '闪购', value: 14 },
      { name: '门店', value: 12 },
      { name: '其它', value: 14 },
    ];

    const configSource = [
      [
        {
          parameter: 'data',
          description: '必需。定义展示数据',
          type: 'Array',
          defaultValue: '[]',
        },
        {
          parameter: 'color',
          description: '可空。定义颜色，将循环color数组给数据赋值',
          type: 'Array',
          defaultValue: '["#0073CC"]',
        },
        {
          parameter: 'unit',
          description: '可空。数据单位。空字符串可用来增加标签宽度。',
          type: 'String',
          defaultValue: '""',
        },
        {
          parameter: 'height',
          description: '可空。svg的viewBox的高',
          type: 'Number',
          defaultValue: '580',
        },
        {
          parameter: 'width',
          description: '可空。svg的viewBox的宽',
          type: 'Number',
          defaultValue: '1000',
        },
        {
          parameter: 'loop',
          description: '待实现。循环显示动画',
          type: '待实现',
          defaultValue: '待实现',
        },
      ],
      [
        {
          parameter: 'value',
          description: '必需。每个数据显示的数值',
          type: 'Number',
          defaultValue: '无',
        },
        {
          parameter: 'name',
          description: '可空。每个数据显示的纬度名称',
          type: 'String',
          defaultValue: '""',
        },
      ],
    ];

    this.tableConfig = [
      { title: 'PieChartSvg', subtitle: '', dataSource: configSource[0] },
      { title: 'data', subtitle: '', dataSource: configSource[1] },
    ];
  }
  render() {
    return (
      <div>
        <p className="container-header">PieChartSvg SVG饼图</p>
        <p>使用svg画出的piechart，包括进场动画</p>
        <p className="container-title">代码示例</p>
        <Card>
          <PieChartSvg data={[{ value: 20 }, { value: 10 }]} unit=" " />
          <hr />
          <p className="sample-title">
            最简形式，只传数据
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc" />
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import {PieChartSvg} from 'deep-viz';

ReactDOM.render(
  <PieChartSvg
    data={[
      { value: 20 },
      { value: 10 },
    ]}
    unit=" "
  />
  , mountNode);`}
            </Highlight>
          </div>
        </Card>

        <Card>
          <PieChartSvg data={this.list} color={['#0073CC', '#20CFAF']} unit="% " />
          <hr />
          <p className="sample-title">
            最复杂形式，自定义各类颜色，单位，viewbox宽高和svg大小
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc" />
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import {PieChartSvg} from 'deep-viz';

const list = ${JSON.stringify(this.list)};

ReactDOM.render(
  <PieChartSvg data={list} color={['#0073CC', '#20CFAF']} unit="% " height={1000} width={580} />
, mountNode);`}
            </Highlight>
          </div>
        </Card>
        <p className="container-title">API</p>
        {this._renderAPI(this.tableConfig)}
      </div>
    );
  }
}
