import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { AMapCluster } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class AMapMarkerShow extends Basic {
  render() {
    const points = [
      { lnglat: [113.864691, 22.942327] },
      { lnglat: [113.370643, 22.938827] },
      { lnglat: [112.985037, 23.15046] },
      { lnglat: [110.361899, 20.026695] },
      { lnglat: [121.434529, 31.215641] },
      { lnglat: [120.682502, 28.011099] },
      { lnglat: [126.687123, 45.787618] },
      { lnglat: [103.970724, 30.397931] },
      { lnglat: [117.212164, 31.831641] },
      { lnglat: [121.411101, 31.059407] },
      { lnglat: [104.137953, 30.784276] },
      { lnglat: [120.499683, 30.042305] },
      { lnglat: [108.94686, 34.362975] },
      { lnglat: [112.873295, 22.920901] },
      { lnglat: [113.373916, 23.086728] },
      { lnglat: [113.250159, 23.075847] },
      { lnglat: [116.675933, 39.986343] },
      { lnglat: [120.75997, 31.734934] },
      { lnglat: [118.314741, 32.26999] },
      { lnglat: [111.723311, 34.771838] },
      { lnglat: [119.537126, 26.200017] },
      { lnglat: [113.830123, 23.00734] },
      { lnglat: [119.273795, 26.060002] },
      { lnglat: [116.466752, 39.951042] },
      { lnglat: [114.20716, 22.777829] },
      { lnglat: [126.118338, 45.11481] },
      { lnglat: [116.366324, 39.781077] },
      { lnglat: [120.377998, 31.578216] },
      { lnglat: [116.611935, 23.66941] },
      { lnglat: [103.787344, 30.940037] },
      { lnglat: [112.911223, 23.164952] },
      { lnglat: [121.946335, 39.403784] },
      { lnglat: [120.172545, 36.009391] },
    ];
    const Source = [{
      parameter: 'style',
      description: '非必需，定义地图组件外层样式',
      type: 'Object',
      defaultValue: '{width: "100%", height: 500}',
    }, {
      parameter: 'points',
      description: '必需,定义数据源，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'dragEnable',
      description: '非必需。是否允许拖拽',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'zoomEnable',
      description: '非必需。是否允许缩放',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'bgColor',
      description: '非必需，定义Marker的背景色',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'fontColor',
      description: '非必需，定义Marker的背字体颜色',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'borderColor',
      description: '非必需，定义Marker的边框颜色',
      type: 'String',
      defaultValue: 'true',
    }, {
      parameter: 'width',
      description: '非必需，定义Marker的大小',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'borderRadius',
      description: '非必需，定义Marker的圆角边框',
      type: 'String',
      defaultValue: '50%',
    }, {
      parameter: 'boxShadow',
      description: '非必需，定义Marker阴影样式',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'innerHTML',
      description: '非必需，定义Marker的内容',
      type: 'String',
      defaultValue: 'null',
    }];

    const tableDataConfig = [{
      parameter: 'lnglat',
      description: '必需，经度和纬度',
      type: 'Arrary',
      defaultValue: 'null',
    }];

    const tableConfig = [
      { title: 'AMapCluster', subtitle: '', dataSource: Source },
      { title: 'points', subtitle: '[{"lnglat":["经度坐标","纬度坐标"]}]', dataSource: tableDataConfig },
    ];

    return (
      <div>
        <p className="container-header">AMapCluster&nbsp;高德地图点聚合</p>
        <p>根据地图大小实现的点的聚合与扩散，按照就近原则进行聚合，可通过点击圆或放大地图进行下钻</p>
        <b><i>*&nbsp;如果同一个页面内需要引入多个地图组件，建议先引入地图js后再引入组件。否则多个地图组件同时初始化会同时加载多次地图js</i></b>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <AMapCluster
            point={points}
          />
          <hr />
          <p className="sample-title">
            数据展示：随机数据
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { AMapCluster } from 'deep-viz';
// 创建虚假数据
const points = [
  { lnglat: [113.864691, 22.942327] },
  { lnglat: [113.370643, 22.938827] },
  { lnglat: [112.985037, 23.15046] },
  { lnglat: [110.361899, 20.026695] },
  { lnglat: [121.434529, 31.215641] },
  { lnglat: [120.682502, 28.011099] },
  { lnglat: [126.687123, 45.787618] },
  { lnglat: [103.970724, 30.397931] },
  { lnglat: [117.212164, 31.831641] },
  { lnglat: [121.411101, 31.059407] },
  { lnglat: [104.137953, 30.784276] },
  { lnglat: [120.499683, 30.042305] },
  { lnglat: [108.94686, 34.362975] },
  { lnglat: [112.873295, 22.920901] },
  { lnglat: [113.373916, 23.086728] },
  { lnglat: [113.250159, 23.075847] },
  { lnglat: [116.675933, 39.986343] },
  { lnglat: [120.75997, 31.734934] },
  { lnglat: [118.314741, 32.26999] },
  { lnglat: [111.723311, 34.771838] },
  { lnglat: [119.537126, 26.200017] },
  { lnglat: [113.830123, 23.00734] },
  { lnglat: [119.273795, 26.060002] },
  { lnglat: [116.466752, 39.951042] },
  { lnglat: [114.20716, 22.777829] },
  { lnglat: [126.118338, 45.11481] },
  { lnglat: [116.366324, 39.781077] },
  { lnglat: [120.377998, 31.578216] },
  { lnglat: [116.611935, 23.66941] },
  { lnglat: [103.787344, 30.940037] },
  { lnglat: [112.911223, 23.164952] },
  { lnglat: [121.946335, 39.403784] },
  { lnglat: [120.172545, 36.009391] },
];

ReactDOM.render(
  <AMapCluster
    point= {points}
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
