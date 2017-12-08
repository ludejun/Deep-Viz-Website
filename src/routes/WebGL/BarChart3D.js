import React from 'react';
import _ from 'lodash';
import { Card, Icon, Row, Col } from 'antd';
import Highlight from 'react-highlight';
import { BarChart3D } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class BarChart3DShow extends Basic {
  render() {
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
        description: '必需，定义y轴数据源及配置，详见下面Table，类同x',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'z',
        description: '必需，定义z轴数据源及配置，详见下面Table，类同x',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'data',
        description: '必需，定义数据源及配置。',
        type: 'Array',
        defaultValue: '[]',
      },
      {
        parameter: 'title',
        description: '非必需，设置Chart的标题，当有title时，legend会放在右边；推荐在组件外写title',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'box',
        description: '非必需，三维地图上的柱状图属性设置。',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'view',
        description: '非必需，用于鼠标的旋转，缩放等视角控制。',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'light',
        description: '非必需，光照相关的设置，详见下面Table。',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'option',
        description: '非必需，接口预留直接改变或覆盖Chart属性。',
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
        parameter: 'show',
        description: '非必需，是否显示 x 轴。',
        type: 'Boolean',
        defaultValue: 'true',
      },
      {
        parameter: 'axis',
        description: '非必需,坐标轴的其他属性',
        type: 'Object',
        defaultValue: '',
      },
    ];
    const boxSource = [
      {
        parameter: 'width',
        description: '非必需，组件在三维场景中的宽度',
        type: 'Number',
        defaultValue: '100',
      },
      {
        parameter: 'height',
        description: '非必需，组件在三维场景中的高度',
        type: 'Number',
        defaultValue: '非10',
      },
      {
        parameter: 'depth',
        description: '非必需，组件在三维场景中的深度',
        type: 'Number',
        defaultValue: '80',
      },
    ];
    const viewSource = [
      {
        parameter: 'alpha',
        description: '非必需，视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。',
        type: 'Number',
        defaultValue: '0',
      },
      {
        parameter: 'beta',
        description: '非必需，视角绕 y 轴，即左右旋转的角度。',
        type: 'Number',
        defaultValue: '40',
      },
    ];
    const lightSource = [
      {
        parameter: 'alpha',
        description: '非必需，主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。',
        type: 'Number',
        defaultValue: '40',
      },
      {
        parameter: 'beta',
        description: '非必需，主光源绕 y 轴，即左右旋转的角度。',
        type: 'Number',
        defaultValue: '40',
      },
    ];
    const tableConfig = [
      { title: 'BarChart3D', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'x:[data:,name:""]', subtitle: '', dataSource: xSource },
      { title: 'box', subtitle: '', dataSource: boxSource },
      { title: 'view', subtitle: '用于鼠标的旋转，缩放等视角控制', dataSource: viewSource },
      { title: 'light', subtitle: '合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。', dataSource: lightSource },
    ];
    const chartData = {
      x: ['户外', '电影', '停车', '日料', '旅游', '游戏', '休闲', '购物', '健身', '游戏'],
      x1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [0],
      y1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      data: [],
      data1: [],
    };
    const dataTmp = [];
    const dataTmp1 = [];
    for (let i = 0; i < 10; i++) {
      dataTmp.push(_.random(0, 20));
      dataTmp1.push([_.random(0, 9), _.random(0, 9), _.random(0, 20)]);
    }
    chartData.data.push(dataTmp);
    chartData.data1.push(dataTmp1);
    return (
      <div>
        <p className="container-header">BarChart3D 3D柱状图</p>
        <p>将两维或三维数据用3D柱状图展现出来，更为酷炫，有立体感。可改变阴影及柱子颜色，坐标轴方向等。</p>
        <p className="container-title">代码示例</p>
        <Card>
          <BarChart3D
            config={{
              box: { height: 100, width: 300, depth: 30 },
              x: {
                type: 'category',
                data: chartData.x,
                axisLabel: {
                  interval: 0,
                },
              },
              y: { type: 'category', data: chartData.y, axisLabel: { show: false } },
              view: { alpha: 0, beta: 0 },
              light: { alpha: 0, beta: 0 },
              data: chartData.data,
              title: { text: '某个广场会员相应消费水平分布' },
            }}
            // color={['#ED504E', '#1D7CDE']}
          />
          <hr />
          <p className="sample-title">
            三维立体柱状图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">二维数据的3D柱状图展示，可以为复杂酷炫图表打底</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import {BarChart3D} from 'deep-viz';
const chartData = {
  x: ['户外', '电影', '停车', '日料', '旅游', '游戏', '休闲', '购物', '健身', '游戏'],
  y: [0],
  data: [],
};
const dataTmp = [];
for (let i = 0; i < 10; i++) {
  dataTmp.push(_.random(0, 20));

}
chartData.data.push(dataTmp);
ReactDOM.render(
  <BarChart3D
    config={{
      box: { height: 100, width: 300, depth: 30 },
      x: {
        type: 'category',
        data: chartData.x,
        axisLabel: {
          interval: 0,
        },
      },
      y: { type: 'category', data: chartData.y ,axisLabel: { show: false },},
      view: { alpha: 0, beta: 0 },
      light: { alpha: 0, beta: 0 },
      data: chartData.data,
      title: { text: '某个广场会员相应消费水平分布' },
    }}
  />
, mountNode);`}
            </Highlight>
          </div>
        </Card>
        <Card>
          <Row>
            <Col span={12}>
              <BarChart3D
                config={{
                  box: { height: 80, width: 100, depth: 100 },
                  x: { type: 'category', data: chartData.x1 },
                  y: { type: 'category', data: chartData.y1 },
                  data: chartData.data1,
                }}
              />
              <hr />
              <p className="sample-title">
                三维立体柱状图,视角alpha=0,beta=40
                <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
              </p>
              <p className="sample-desc">尺寸可调整</p>
              <div className="code-container">
                <Highlight className="JavaScript">
                  {`import {BarChart3D} from 'deep-viz';
const chartData = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  data: [],
};
for (let i = 0; i < 10; i++) {
  chartData.data.push([_.random(0, 9), _.random(0, 9), _.random(0, 20)]);
}
ReactDOM.render(
  <BarChart3D
    config={{
      box: { height: 80, width: 100, depth: 100 },
      x: { type: 'category', data: chartData.x },
      y: { type: 'category', data: chartData.y },
      data: chartData.data,
    }}
  />
, mountNode);`}
                </Highlight>
              </div>
            </Col>
            <Col span={12}>
              <BarChart3D
                config={{
                  box: { height: 80, width: 100, depth: 100 },
                  x: { type: 'category', data: chartData.x1 },
                  y: { type: 'category', data: chartData.y1 },
                  data: chartData.data1,
                  view: { alpha: 40, beta: 0 },
                }}
              />
              <hr />
              <p className="sample-title">
                三维立体柱状图，视角alpha=40,beta=0
                <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
              </p>
              <p className="sample-desc">尺寸可调整</p>
              <div className="code-container">
                <Highlight className="JavaScript">
                  {`import {BarChart3D} from 'deep-viz';
const chartData = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  data: [],
};
for (let i = 0; i < 10; i++) {
  chartData.data.push([_.random(0, 9), _.random(0, 9), _.random(0, 20)]);
}
ReactDOM.render(
  <BarChart3D
    config={{
      box: { height: 80, width: 100, depth: 160 },
      x: { type: 'category', data: chartData.x },
      y: { type: 'category', data: chartData.y },
      data:chartData.data,
      view:{alpha:40,beta:0}
    }}
  />
, mountNode);`}
                </Highlight>
              </div>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row>
            <Col span={12}>
              <BarChart3D
                config={{
                  box: { height: 80, width: 100, depth: 160 },
                  x: { type: 'category', data: chartData.x1 },
                  y: { type: 'category', data: chartData.y1 },
                  data: chartData.data1,
                }}
              />
              <hr />
              <p className="sample-title">
                三维立体柱状图,光照角度alpha=40,beta=40
                <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
              </p>
              <p className="sample-desc">尺寸可调整</p>
              <div className="code-container">
                <Highlight className="JavaScript">
                  {`import {BarChart3D} from 'deep-viz';
const chartData = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  data: [],
};
for (let i = 0; i < 10; i++) {
  chartData.data.push([_.random(0, 9), _.random(0, 9), _.random(0, 20)]);
}
ReactDOM.render(
  <BarChart3D
    config={{
      box: { height: 80, width: 100, depth: 160 },
      x: { type: 'category', data: chartData.x },
      y: { type: 'category', data: chartData.y },
      data: chartData.data,
    }}
  />
, mountNode);`}
                </Highlight>
              </div>
            </Col>
            <Col span={12}>
              <BarChart3D
                config={{
                  box: { height: 80, width: 100, depth: 160 },
                  x: { type: 'category', data: chartData.x1 },
                  y: { type: 'category', data: chartData.y1 },
                  data: chartData.data1,
                  light: { alpha: 40, beta: 0 },
                }}
              />
              <hr />
              <p className="sample-title">
                三维立体柱状图，光照角度alpha=40,beta=0
                <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
              </p>
              <p className="sample-desc">尺寸可调整</p>
              <div className="code-container">
                <Highlight className="JavaScript">
                  {`import {BarChart3D} from 'deep-viz';
const chartData = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  data: [],
};
for (let i = 0; i < 10; i++) {
  chartData.data.push([_.random(0, 9), _.random(0, 9), _.random(0, 20)]);
}
ReactDOM.render(
  <BarChart3D
    config={{
      box: { height: 80, width: 100, depth: 160 },
      x: { type: 'category', data: chartData.x },
      y: { type: 'category', data: chartData.y },
      data: chartData.data,
      light:{alpha=40,beta:0}
    }}
  />
, mountNode);`}
                </Highlight>
              </div>
            </Col>
          </Row>
        </Card>
        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}
