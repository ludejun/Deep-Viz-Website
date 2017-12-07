import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { BaiduMapPoint } from '../../components/src';
import Basic from '../Layout/WDBasic';
import { baseControlTableCfg } from './BaiduMapControlUtil';

export default class BaiduMapPoints extends Basic {
  render() {
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
    const Source = [{
      parameter: 'centerPoint',
      description: '非必需，定义地图的中心点位置；默认为points数组中第一个点的坐标',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'points',
      description: '必需，定义需要打点的坐标数组；每个数组项为Object',
      type: 'Array',
      defaultValue: '[]',
    }, {
      parameter: 'initZoom',
      description: '非必需，定义地图初始的缩放比例，默认5',
      type: 'number',
      defaultValue: 'null',
    }, {
      parameter: 'style',
      description: '非必需，自定义地图组件外围样式',
      type: 'object',
      defaultValue: 'null',
    }];
    const centerSource = [{
      parameter: 'lng',
      description: '必需，坐标经度',
      type: 'Number',
      defaultValue: '{}',
    }, {
      parameter: 'lat',
      description: '必需，坐标纬度',
      type: 'Number',
      defaultValue: 'null',
    }];
    const pointsSource = [{
      parameter: 'lng',
      description: '必需，坐标经度',
      type: 'Number',
      defaultValue: 'null',
    }, {
      parameter: 'lat',
      description: '必需，坐标纬度',
      type: 'Number',
      defaultValue: 'null',
    }];
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
      { title: 'BaiduMapPoint', subtitle: '', dataSource: Source },
      { title: 'centerPoint', subtitle: '类型：Object', dataSource: centerSource, columns },
      { title: 'points[*]:points的数组项', subtitle: '类型：Object', dataSource: pointItemSource, columns },
      { title: 'points[*].location', subtitle: '类型：Object', dataSource: pointsSource },
      { title: 'points[*].icon', subtitle: '类型：Object', dataSource: iconS },
    ];
    const baseTableConfig = baseControlTableCfg();
    tableConfig.push(baseTableConfig[0]);

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
      { name: '上海', location: { lng: 121.48, lat: 31.41 }, color: 'red' },
      {
        name: '北京',
        icon: { url: 'http://placehold.it/30x30', size: { width: 30, height: 30 } },
        location: { lng: 116.385243, lat: 39.913063 },
        color: 'blue',
        radius: 20,
      },
      {
        name: () => (
          <div style={{ width: 30, height: 30, background: '#fff', position: 'absolute', top: -30, left: -30 }}>西安</div>
        ),
        location: { lng: 108.95, lat: 34.27 },
        color: 'yellow',
      },
      {
        name: () => (
          <div style={pointStyle}>
            我是一个大房子
          </div>
        ),
        icon: { url: require('../../components/src/assets/imgs/map_pin_work.png'), size: { width: 25, height: 28 } },
        location: { lng: 109.954234, lat: 38.27543 },
      },
    ];
    return (
      <div>
        <p className="container-header">BaiduMapPoint 百度地图散点图</p>
        <p>该组件可以根据传入的坐标在百度地图上打上圆形或自定义图片的点，常用于在地图上打上大量的logo之类，并支持自定义的Tooltip</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <BaiduMapPoint
            centerPoint={{ lng: 116.385243, lat: 39.913063 }}
            points={pointList}
            style={{ height: 500 }}
          />
          <p className="sample-title">
            自定义颜色，自定义文本的点
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">在地图上打上三个点，北京为自定义图片，上海西安为不同颜色大小的点；西安上的Tooltip为自定义；缩放、移动、地图类型等控件都可以在options.addControl中添加</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { BaiduMapPoint } from 'deep-viz';

// 创建虚假数据
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
  { name: '上海', location: { lng: 121.48, lat: 31.41 }, color: 'red' },
  {
    name: '北京',
    icon: { url: 'http://www.dafeiguo.com/LOGO.png', size: { width: 30, height: 30 } },
    location: { lng: 116.385243, lat: 39.913063 },
    color: 'blue',
    radius: 20,
  },
  {
    name: () => (
      <div style={{ width: 30, height: 30, background: '#fff', position: 'absolute', top: -30, left: -30 }}>西安</div>
    ),
    location: { lng: 108.95, lat: 34.27 },
    color: 'yellow',
  },
  {
    name: () => (
      <div style={pointStyle}>
        我是一个大房子
      </div>
    ),
    icon: { url: require('../../components/src/assets/imgs/map_pin_work.png'), size: { width: 25, height: 28 } },
    location: { lng: 109.954234, lat: 38.27543 },
  },
];

ReactDOM.render(
  <BaiduMapPoint
    centerPoint={{ lng: 116.385243, lat: 39.913063 }}
    points={pointList}
    style={{ height: 500 }}
  />
, mountNode);`}
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

// BaiduMapPoints.PropTypes = {
//   points: PropTypes.array.isRequired,
//   options: PropTypes.object,
// };

