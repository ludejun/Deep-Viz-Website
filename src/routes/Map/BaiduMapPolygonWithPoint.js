import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { BaiduMapPolygonWithPoint } from '../../components/src';
import Basic from '../Layout/WDBasic';
import { baseControlTableCfg } from './BaiduMapControlUtil';

export default class BaiduMapPolygonWithPoints extends Basic {
  render() {
    const Source = [{
      parameter: 'style',
      description: '非必需，定义地图组件外层样式',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'point',
      description: '必需，定义中心点的坐标；lng：经度，lat：纬度',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'points',
      description: '非必需，在地图上额外需要展示的poi点',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'circleColor',
      description: '非必需，定义地图上划圈的颜色，默认\'#108EE9\'',
      type: 'Color',
      defaultValue: '#108EE9',
    }, {
      parameter: 'labelColor',
      description: '非必需，定义每个圈说明描述的字体颜色，默认\'#FFFFFF\'',
      type: 'Color',
      defaultValue: '#FFFFFF',
    }, {
      parameter: 'datas',
      description: <span>必需，数据数组，每个item必须包含radius（km），label说明（可以是string或ReactDOM）。</span>,
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'outsideLabel',
      description: '非必需，表示在最多的数据半径外，需要展示的label',
      type: 'String || ReactDOM',
      defaultValue: 'null',
    }, {
      parameter: 'zoomBias',
      description: '非必需，表示允许地图缩放的等级，（初始时会按照最佳比例展示），默认为1，即允许放大或缩小1级',
      type: 'Number',
      defaultValue: '1',
    }];
    const columns = [{
      title: 'Property',
      dataIndex: 'parameter',
      width: 110,
    }, {
      title: '说明',
      dataIndex: 'description',
    }, {
      title: '类型',
      dataIndex: 'type',
      width: 120,
    }, {
      title: '默认值',
      dataIndex: 'defaultValue',
    }];
    const pointsSource = [
      {
        parameter: 'lng',
        description: '必需，坐标经度',
        type: 'Number',
        defaultValue: 'null',
      }, {
        parameter: 'lat',
        description: '必需，坐标纬度',
        type: 'Number',
        defaultValue: 'null',
      },
    ];
    const pointItemSource = [
      {
        parameter: 'name',
        description: '非必需，坐标点mouseover时的提示信息，当为函数是需要返回React虚拟Dom',
        type: 'String || Function',
        defaultValue: 'null',
      },
      {
        parameter: 'location',
        description: '必需，坐标点经纬度信息',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'icon',
        description: '非必需，自定义坐标点的图片',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'radius',
        description: '非必需，定义坐标圆点的半径',
        type: 'Number',
        defaultValue: '12',
      },
    ];
    const iconS = [{
      parameter: 'url',
      description: '定义打点图片链接',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'size',
      description: '定义打点图片大小，width定义图片宽度，height定义图片高度',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'offsetSize',
      description: '定义打点图片相对于坐标的偏移量，width表示x轴偏移大小，height表示y轴偏移大小',
      type: 'Object',
      defaultValue: 'null',
    }];
    const tableConfig = [
      { title: 'BaiduMapPolygonWithPoint', subtitle: '', dataSource: Source },
      { title: 'points[*]:points的数组项', subtitle: '类型：Object', dataSource: pointItemSource, columns },
      { title: 'points[*].location', subtitle: '类型：Object', dataSource: pointsSource },
      { title: 'points[*].icon', subtitle: '类型：Object', dataSource: iconS },
      {
        title: 'datas',
        subtitle: '',
        dataSource: [
          {
            parameter: 'radius',
            description: '必需，半径，单位km',
            type: 'Number',
            defaultValue: 'null',
          }, {
            parameter: 'label',
            description: '必需，描述，可以是String或者ReactDOM',
            type: 'String || ReactDom',
            defaultValue: 'null',
          },
        ],
      },
    ];
    const baseTableConfig = baseControlTableCfg();
    tableConfig.push(baseTableConfig[0]);
    const point = { lng: 116.394226, lat: 39.917988 };
    const datas = [1, 3, 5, 10].map((radius) => {
      const label = (
        <div>
          <p style={{ fontSize: 16, lineHeight: '20px', fontWeight: 300 }}>xx%</p>
          <p style={{ fontSize: 12, lineHeight: '20px', fontWeight: 300 }}>项目xx%的顾客来自于{radius}公里内</p>
        </div>
      );
      // const label = `项目xx%的客源来自于${radius}公里内`;
      return { radius, label };
    });
    const outsideLabel = (
      <div>
        <p style={{ fontSize: 16, lineHeight: '20px', fontWeight: 300 }}>xx%</p>
        <p style={{ fontSize: 12, lineHeight: '20px', fontWeight: 300 }}>项目xx%的顾客来自于10公里外</p>
      </div>
    );

    const pointStyle = {
      background: '#108EE9',
      color: '#FFF',
      fontWeight: 300,
      fontSize: '12px',
      lineHeight: '20px',
      borderRadius: '1px',
      width: '200px',
      maxWidth: '300px',
      padding: '10px',
      position: 'absolute',
      top: -55,
      left: -5,
    };

    const pointList = [
      {
        name: () => (
          <div style={pointStyle}>
            我是一个小房子
          </div>
        ),
        icon: { url: require('../../components/src/assets/imgs/map_pin_residence.png'), size: { width: 25, height: 28 } },
        location: { lng: 116.385243, lat: 39.913063 },
      },
      {
        name: () => (
          <div style={pointStyle}>
            我是一个大房子
          </div>
        ),
        icon: { url: require('../../components/src/assets/imgs/map_pin_residence.png'), size: { width: 25, height: 28 } },
        location: { lng: 116.368243, lat: 39.925063 },
      },
    ];
    return (
      <div>
        <p className="container-header">BaiduMapPolygonWithPoint&nbsp;百度地图辐射区域</p>
        <p>根据坐标和半径在地图上画出圆形区域，并进行展示说明。同时支持在地图上额外展示自定的POI点</p>
        <b><i>*&nbsp;如果同一个页面内需要引入多个地图组件，建议先引入地图js后再引入组件。否则多个地图组件同时初始化会同时加载多次地图js</i></b>
        <p className="container-title">代码示例</p>
        <Card>
          <BaiduMapPolygonWithPoint
            datas={datas}
            point={point}
            points={pointList}
            outsideLabel={outsideLabel}
            style={{ height: 500 }}
            labelColor="#00FF00"
          />
          <p className="sample-title">
            数据展示：自定义地图范围，1-10km，同时展示10km外；示例中同时展示了额外的两个POI点。
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { BaiduMapPolygonWithPoint } from 'deep-viz';
// 创建虚假数据
const point = { lng: 116.394226, lat: 39.917988 };
const datas = [1, 3, 5, 10].map((radius) => {
  const label = (
    <div>
      <p style={{ fontSize: 16, lineHeight: '20px', fontWeight: 300 }}>xx%</p>
      <p style={{ fontSize: 12, lineHeight: '20px', fontWeight: 300 }}>项目xx%的顾客来自于{radius}公里内</p>
    </div>
  );
  return { radius, label };
});
const outsideLabel = (
  <div>
    <p style={{ fontSize: 16, lineHeight: '20px', fontWeight: 300 }}>xx%</p>
    <p style={{ fontSize: 12, lineHeight: '20px', fontWeight: 300 }}>项目xx%的顾客来自于10公里外</p>
  </div>
);
const pointStyle = {
  background: '#108EE9',
  color: '#FFF',
  fontWeight: 300,
  fontSize: '12px',
  lineHeight: '20px',
  borderRadius: '1px',
  width: '200px',
  maxWidth: '300px',
  padding: '10px',
  position: 'absolute',
  top: -55,
  left: -5,
};

const pointList = [
  {
    name: () => (
      <div style={pointStyle}>
        我是一个小房子
      </div>
    ),
    icon: { url: require('../../components/src/assets/imgs/map_pin_residence.png'), size: { width: 25, height: 28 } },
    location: { lng: 116.385243, lat: 39.913063 },
  },
  {
    name: () => (
      <div style={pointStyle}>
        我是一个大房子
      </div>
    ),
    icon: { url: require('../../components/src/assets/imgs/map_pin_residence.png'), size: { width: 25, height: 28 } },
    location: { lng: 116.368243, lat: 39.925063 },
  },
];
ReactDOM.render(
  <BaiduMapPolygonWithPoint
    datas={datas}
    point={point}
    points={pointList}
    outsideLabel={outsideLabel}
    labelColor="#00FF00"
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
