import React from 'react';
import { Icon, Button, Card } from 'antd';
import Highlight from 'react-highlight';
import { BaiduMapCrossCurve } from '../../components/src';
import Basic from '../Layout/WDBasic';
import { baseControlTableCfg } from './BaiduMapControlUtil';

export default class BaiduMapCrossCurves extends Basic {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'in',
    };
    this.changeDirection = this.changeDirection.bind(this);
  }

  changeDirection() {
    const direction = this.state.direction === 'in' ? 'out' : 'in';
    this.setState({ direction });
  }

  render() {
    const Source = [{
      parameter: 'style',
      description: '非必需，定义地图组件外层样式',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'point',
      description: '必需。定义中心迁徙点的坐标；lng：经度，lat：纬度，name：名称',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'datas',
      description: '必需，定义地图上迁徙流入或流出的其他数据点，参考下表中datas配置',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'radiusGradients',
      description: '非必需，迁徙半径标示，整型数组，如[2000, 5000, 10000]，单位：米。不设置表示不展示半径标示',
      type: 'Array',
      defaultValue: '[]',
    }, {
      parameter: 'direction',
      description: '必需，枚举值：in, out，分别标示流入流出',
      type: 'Enum(String)',
      defaultValue: '',
    }, {
      parameter: 'tooltipFormat',
      description: '非必需，流出终点或流入起点位置的鼠标停留后展示的信息的format函数。',
      type: 'Function',
      defaultValue: 'null',
    }, {
      parameter: 'labelFormat',
      description: '非必需，迁徙路径上的鼠标停留后展示的信息的format函数。',
      type: 'Function',
      defaultValue: 'null',
    }];
    const tableConfig = [
      { title: 'BaiduMapCrossCurve', subtitle: '', dataSource: Source },
      {
        title: 'datas',
        subtitle: '',
        dataSource: [
          {
            parameter: 'lng',
            description: '必需，经度',
            type: 'Number',
            defaultValue: 'null',
          }, {
            parameter: 'lat',
            description: '必需，纬度',
            type: 'Number',
            defaultValue: 'null',
          }, {
            parameter: 'name',
            description: '非必需，名称',
            type: 'String',
            defaultValue: 'null',
          }, {
            parameter: 'value',
            description: '非必需，值',
            type: 'Number',
            defaultValue: 'null',
          }, {
            parameter: 'color',
            description: '非必需，颜色值，默认按照系统初始颜色分配',
            type: 'String',
            defaultValue: 'null',
          },
        ],
      },
    ];
    const baseTableConfig = baseControlTableCfg();
    tableConfig.push(baseTableConfig[0]);
    const datas = [
      {
        lng: 114.174725,
        lat: 30.503966,
        value: 0.3451,
        name: '湘隆时代广场',
      },
      {
        lng: 114.202543,
        lat: 30.542032,
        value: 0.2556,
        name: '武汉欧亚达汉阳国际广场',
      },
      {
        lng: 114.070288,
        lat: 30.342536,
        value: 0.2041,
        name: '武汉汉南绿地城奥特莱斯',
      },
      {
        lng: 114.212544,
        lat: 30.510791,
        value: 0.1879,
        name: '永旺梦乐城(经开店)',
      },
      {
        lng: 114.211643,
        lat: 30.558277,
        value: 0.1661,
        name: '武汉汉阳人信汇',
      },
      {
        lng: 114.359448,
        lat: 30.588281,
        value: 0.1473,
        name: '武汉联发国际',
      },
      {
        lng: 114.359683,
        lat: 30.587324,
        value: 0.1337,
        name: '武汉福星惠誉·国际城',
      },
      {
        lng: 114.218241,
        lat: 30.571169,
        value: 0.1333,
        name: '武汉海天欢乐购',
      },
      {
        lng: 114.070284,
        lat: 30.34252,
        value: 0.1328,
        name: '武汉欧镇奥特莱斯',
      },
      {
        lng: 114.217584,
        lat: 30.606261,
        value: 0.1298,
        name: '武汉江城壹号',
      },
    ];
    const point = {
      lng: 114.180308,
      lat: 30.512584,
      name: '武汉经开万达广场',
    };
    const tooltipFormat = (p) => {
      return `交叉客流到${p.name}为${(p.data.value[2] * 100).toFixed(2)}%`;
    };

    const labelFormat = (value) => {
      return `${(value.value[2] * 100).toFixed(2)}%`;
    };

    return (
      <div>
        <p className="container-header">BaiduMapCrossCurve&nbsp;百度地图Echarts模拟迁徙</p>
        <p>根据迁徙数据在地图上展示迁徙流向和数据。线终点圆圈的大小会根据数值大小而变化。</p>
        <b><i>*&nbsp;如果同一个页面内需要引入多个地图组件或热力图组件，建议先引入地图js后再引入组件。否则多个地图组件同时初始化会同时加载多次地图js</i></b>
        <p className="container-title">代码示例</p>
        <Card>
          <BaiduMapCrossCurve
            datas={datas}
            point={point}
            direction={this.state.direction}
            tooltipFormat={tooltipFormat}
            labelFormat={labelFormat}
            radiusGradients={[2000, 5000, 10000]}
            mapStyle="pink"
            radiusColor="#000000"
            style={{ height: 500 }}
          />
          <Button type="primary" ghost onClick={this.changeDirection}>点我交换流入流出</Button>
          <p className="sample-title">
            数据展示：自定义迁徙数据
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { BaiduMapCrossCurve } from 'deep-viz';
// 创建虚假数据
const datas = [
  {
    lng: 114.174725,
    lat: 30.503966,
    value: 0.3451,
    name: '湘隆时代广场',
  },
  {
    lng: 114.202543,
    lat: 30.542032,
    value: 0.2556,
    name: '武汉欧亚达汉阳国际广场',
  },
  {
    lng: 114.070288,
    lat: 30.342536,
    value: 0.2041,
    name: '武汉汉南绿地城奥特莱斯',
  },
  {
    lng: 114.212544,
    lat: 30.510791,
    value: 0.1879,
    name: '永旺梦乐城(经开店)',
  },
  {
    lng: 114.211643,
    lat: 30.558277,
    value: 0.1661,
    name: '武汉汉阳人信汇',
  },
  {
    lng: 114.359448,
    lat: 30.588281,
    value: 0.1473,
    name: '武汉联发国际',
  },
  {
    lng: 114.359683,
    lat: 30.587324,
    value: 0.1337,
    name: '武汉福星惠誉·国际城',
  },
  {
    lng: 114.218241,
    lat: 30.571169,
    value: 0.1333,
    name: '武汉海天欢乐购',
  },
  {
    lng: 114.070284,
    lat: 30.34252,
    value: 0.1328,
    name: '武汉欧镇奥特莱斯',
  },
  {
    lng: 114.217584,
    lat: 30.606261,
    value: 0.1298,
    name: '武汉江城壹号',
  }
];
const point = {
  lng: 114.180308,
  lat: 30.512584,
  name: '武汉经开万达广场',
};
const tooltipFormat = (p) => {
  return \`交叉客流到\${p.name}为\${(p.data.value[2] * 100).toFixed(2)}%\`;
};
const labelFormat = (value) => {
  return \`\${(value.value[2] * 100).toFixed(2)}%\`;
};

ReactDOM.render(
  <BaiduMapCrossCurve
     datas={datas}
     point={point}
     direction="in"
     tooltipFormat={tooltipFormat}
     labelFormat={labelFormat}
     radiusGradients={[2000, 5000, 10000]}
     mapStyle="pink"
     radiusColor="#000000"
     style={{ height: 500 }}
  />,
  mountNode
);`}
              </div>
            </Highlight>
          </div>
        </Card>
        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}
