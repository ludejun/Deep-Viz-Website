import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { GlobePointLine } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class GlobeShow extends Basic {
  render() {
    const chartSource = [
      {
        parameter: 'config',
        description: '必需，配置折线图的数据源等，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'style',
        description: '非必需，设置地球的宽高等，最好保持宽高比例为1:1',
        type: 'Object',
        defaultValue: '{ height: 400, width: 400 }',
      },
    ];
    const configSource = [
      {
        parameter: 'baseTexture',
        description: '非必需，地球的纹理。支持图片路径字符串，图片或者Canvas的对象。',
        type: 'String',
        defaultValue: '默认皮肤',
      },
      {
        parameter: 'heightTexture',
        description: '非必需，地球的高度纹理，{text:"",show:true}，默认显示，text为高度纹理用于凹凸贴图表现地球表面的明暗细节。',
        type: 'Object',
        defaultValue: '默认皮肤',
      },
      {
        parameter: 'overlay',
        description: '非必需，地球表面层的配置，可使用该配置项加入云层，格式同heightTexture。',
        type: 'Object',
        defaultValue: '默认皮肤',
      },
      {
        parameter: 'blend',
        description: '非必需，跟baseTexture混合使用，格式同heightTexture。',
        type: 'Object',
        defaultValue: '默认皮肤',
      },
      {
        parameter: 'data',
        description: '必需，系列列表，每个系列通过type决定自己的图表类型。详见下面table',
        type: 'Array',
        defaultValue: '[]',
      },
    ];

    const dataTable = [
      {
        parameter: 'typeData',
        description:
          '必需，type为里lines3D通常数据的每一项是一个包含起点和终点的坐标集,每个点分别数据分别表示经纬度和海拔,type为scatter3D时数据项分别表示经纬度。',
        type: 'Array',
        defaultValue: '[]',
      },
      {
        parameter: 'type',
        description: '必需，可选scatter3D散点气泡图或者lines3D三维飞线图',
        type: 'String',
        defaultValue: '',
      },
      {
        parameter: 'color',
        description: '非必需，定义线或者点的颜色。',
        type: 'String',
        defaultValue: '',
      },
      {
        parameter: 'width',
        description: '非必需，只对lines3D有用',
        type: 'Number',
        defaultValue: 1,
      },
      {
        parameter: 'symbol',
        description:
          "非必需，定义散点的形状，类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'，只对scatter3D有用。",
        type: 'String',
        defaultValue: 'circle',
      },
      {
        parameter: 'symbolSize',
        description: '非必需，标记的大小，只对scatter3D有用。',
        type: 'Number',
        defaultValue: 10,
      },
      {
        parameter: 'option',
        description: '非必需，系列的其他属性，预留接口',
        type: 'Object',
        defaultValue: '',
      },
    ];

    const itemSource = [
      {
        parameter: 'color',
        description: '非必需，文字的颜色。',
        type: 'String',
        defaultValue: '#000',
      },
      {
        parameter: 'fontSize',
        description: '文字的字体大小。',
        type: 'number',
        defaultValue: 14,
      },
      {
        parameter: 'formatter',
        description: '非必需，标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \\n 换行。',
        type: 'String',
        defaultValue: '',
      },
      {
        parameter: 'position',
        description: '非必需，标签的位置，可选 top、left、right和bottom。',
        type: 'String',
        defaultValue: 'right',
      },
    ];
    const tableConfig = [
      { title: 'GlobePointLine', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'data', subtitle: '', dataSource: dataTable },
      { title: 'itemStyle', subtitle: '', dataSource: itemSource },
    ];

    const chartData = {};
    chartData.data = [
      {
        type: 'lines3D',
        color: 'red',
        width: 1,
        typeData: [
          [[116.47808, 39.914882, 1], [-3.638449, 40.444948, 1]],
          [[116.47808, 39.914882, 1], [-87.799533, 41.891813, 1]],
          [[116.47808, 39.914882, 1], [-118.253459, 34.05678, 1]],
          [[116.47808, 39.914882, 1], [-94.810595, 38.6411, 1]],
          [[116.47808, 39.914882, 1], [-118.253459, 34.05678, 1]],
          [[116.47808, 39.914882, 1], [-122.326056, 47.604969, 1]],
          [[116.47808, 39.914882, 1], [-122.413091, 37.774702, 1]],
          [[116.47808, 39.914882, 1], [-104.972429, 39.739902, 1]],
          [[116.47808, 39.914882, 1], [-93.983819, 41.60704, 1]],
          [[116.47808, 39.914882, 1], [-87.799533, 41.891813, 1]],
          [[116.47808, 39.914882, 1], [-91.562727, 43.753924, 1]],
        ],
      },
      {
        type: 'scatter3D',
        itemStyle: {
          formatter: '万达集团',
        },
        color: 'red',
        symbolSize: 10,
        typeData: [[116.47808, 39.914882]],
      },
    ];
    return (
      <div>
        <p className="container-header">GlobePointLine 3D地球点线图</p>
        <p>可在立体的地球上，打出不同大小颜色的pointer，和不同起始点的飞行线。地球可以拖动调整不同视角，地图的图层纹理也可以调整。地球的亮暗根据实时显示。</p>
        <p className="container-title">代码示例</p>
        <Card>
          <GlobePointLine
            config={{
              data: chartData.data,
            }}
            style={{ width: 400, height: 400 }}
          />
          <hr />
          <p className="sample-title">
            飞线图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">尺寸可调整</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { GlobePointLine } from 'deep-viz';

const chartData = {};
chartData.data = [
  {
    type: 'lines3D',
    color: 'red',
    width: 1,
    typeData: [
      [[116.47808, 39.914882, 10], [-3.638449, 40.444948, 10]],
      [[116.47808, 39.914882, 1], [-87.799533, 41.891813, 1]],
      [[116.47808, 39.914882, 1], [-118.253459, 34.05678, 1]],
      [[116.47808, 39.914882, 1], [-94.810595, 38.6411, 1]],
      [[116.47808, 39.914882, 1], [-118.253459, 34.05678, 1]],
      [[116.47808, 39.914882, 1], [-122.326056, 47.604969, 1]],
      [[116.47808, 39.914882, 1], [-122.413091, 37.774702, 1]],
      [[116.47808, 39.914882, 1], [-104.972429, 39.739902, 1]],
      [[116.47808, 39.914882, 1], [-93.983819, 41.60704, 1]],
      [[116.47808, 39.914882, 1], [-87.799533, 41.891813, 1]],
      [[116.47808, 39.914882, 1], [-91.562727, 43.753924, 1]],
    ],
  },
  {
    type: 'scatter3D',
    itemStyle: {
      formatter: '万达集团',
    },
    color: 'red',
    symbolSize: 10,
    typeData: [[116.47808, 39.914882, 0]],
  },
];

ReactDOM.render(
  <GlobePointLine
    config={{
      data: chartData.data,
    }}
    style={{ width: 400, height: 400 }}
  />
, mountNode);`}
            </Highlight>
          </div>
        </Card>
        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}
