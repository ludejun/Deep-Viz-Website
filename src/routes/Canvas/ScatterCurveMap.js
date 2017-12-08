import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { ScatterCurveMap } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ScatterCurve extends Basic {
  constructor(props) {
    super(props);
    this.state = { number: 45 };
    const script = document.createElement('script');
    script.src =
      'https://api.map.baidu.com/api?v=2.0&ak=C4f54f1b740bc62107184968edbb64fb&callback=mapLoad';
    document.body.appendChild(script);
  }

  componentDidMount() {
  }

  render() {
    const Source = [{
      parameter: 'map',
      description: '必需，定义地图类型、地图背景颜色，地图区域描边颜色，地图区域填充颜色',
      type: 'Object',
      defaultValue: '',
    }, {
      parameter: 'fromPoint',
      description: '必需，定义初始始发地坐标',
      type: 'Array',
      defaultValue: '',
    }, {
      parameter: 'toPoints',
      description: '必需，定义迁徙到的目的地坐标',
      type: 'Array',
      defaultValue: '',
    }, {
      parameter: 'travelDirection',
      description: '非必需，定义迁徙方向;to-from为从目的地到始发地迁徙，fom-to为从事发地到目的地迁徙, none为不画迁徙线',
      type: 'String',
      defaultValue: 'from-to',
    }, {
      parameter: 'travelType',
      description: '非必需，定义迁徙样式，当样式为circle时没有迁徙线路，其他值时存在迁徙线条',
      type: 'String',
      defaultValue: '非circle',
    }];
    const mapSource = [{
      parameter: 'type',
      description: '必需，定义地图类型为世界地图（world）、省份地图(province)、区县地图(district)',
      type: 'String',
      defaultValue: '',
    }, {
      parameter: 'name',
      description: '非必需，定义当地图为省份或区县地图时，要展示的区域，省份请输入省份拼音，区县请输入汉字',
      type: 'String',
      defaultValue: '',
    }, {
      parameter: 'mapBackgroundColor',
      description: '非必需，地图背景颜色',
      type: 'Color',
      defaultValue: '#020B22',
    }, {
      parameter: 'areaBackgroundColor',
      description: '非必需，定义地图行政区域填充',
      type: 'Color',
      defaultValue: 'rgba(3,23,60,0.8)',
    }, {
      parameter: 'areaLineColor',
      description: '非必需，定义行政区域描边颜色',
      type: 'Color',
      defaultValue: '#2268A0',
    }];
    const tableConfig = [
      { title: 'ScatterCurve', subtitle: '', dataSource: Source },
      { title: 'map', subtitle: 'Object', dataSource: mapSource },
    ];
    return (
      <div>
        <p className="container-header">ScatterCurveMap 多样迁徙地图</p>
        <p>可模拟显示世界、中国、各级别行政区的迁徙地图</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <div style={{ height: 500, marginBottom: 20 }}>
            <ScatterCurveMap
              mapConfig={{
                map: {
                  type: 'world',
                  name: '',
                  mapBackgroundColor: null,
                  areaBackgroundColor: null,
                  areaLineColor: null },
                fromPoint: [116.400244, 39.918698],
                toPoints: [
                  [24.703518, 79.847129],
                  [-45.647746, 73.536916],
                  [9.396967, 61.701868],
                  [-113.644155, 41.212088],
                  [35.153182, 5.563785],
                  [102.266521, -1.243576],
                  [141.121612, 39.807932],
                ],
                travelDirection: 'from-to',
                travelType: '',
              }}
            />
          </div>
          <hr />
          <p className="sample-title">
            世界范围内的地图绘制，迁徙图为线性迁徙
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { ScatterCurveMap  } from 'deep-viz';

ReactDOM.render(
  <ScatterCurveMap
  mapConfig={{
    map: {
      type: 'world',
      name: '',
      mapBackgroundColor: null,
      areaBackgroundColor: null,
      areaLineColor: null },
    fromPoint: [116.400244, 39.918698],
    toPoints: [
      [24.703518, 79.847129],
      [-45.647746, 73.536916],
      [9.396967, 61.701868],
      [-113.644155, 41.212088],
      [35.153182, 5.563785],
      [102.266521, -1.243576],
      [141.121612, 39.807932],
    ],
    travelDirection: 'from-to',
    travelType: '',
  }}
/>
, mountNode);`}
              </div>
            </Highlight>
          </div>
        </Card>
        <Card>
          <div style={{ height: 500, marginBottom: 20 }}>
            <ScatterCurveMap
              mapConfig={{
                map: {
                  type: 'world',
                  mapBackgroundColor: null,
                  areaBackgroundColor: null,
                  areaLineColor: null },
                fromPoint: [116.400244, 39.918698],
                toPoints: [
                  [24.703518, 79.847129],
                  [-45.647746, 73.536916],
                  [9.396967, 61.701868],
                  [-113.644155, 41.212088],
                  [35.153182, 5.563785],
                  [102.266521, -1.243576],
                  [141.121612, 39.807932],
                ],
                travelDirection: 'to-from',
                travelType: 'circle',
              }}
            />
          </div>
          <hr />
          <p className="sample-title">
          世界范围内的地图绘制，迁徙图为圆球迁徙
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { ScatterCurveMap  } from 'deep-viz';

ReactDOM.render(
  <ScatterCurveMap
  mapConfig={{
    map: {
      type: 'world',
      name: '江苏',
      mapBackgroundColor: null,
      areaBackgroundColor: null,
      areaLineColor: null },
    fromPoint: [116.400244, 39.918698],
    toPoints: [
      [24.703518, 79.847129],
      [-45.647746, 73.536916],
      [9.396967, 61.701868],
      [-113.644155, 41.212088],
      [35.153182, 5.563785],
      [102.266521, -1.243576],
      [141.121612, 39.807932],
    ],
    travelDirection: 'to-from',
    travelType: 'circle',
  }}
/>
, mountNode);`}
              </div>
            </Highlight>
          </div>
        </Card>
        <Card>
          <div style={{ height: 500, marginBottom: 20 }}>
            <ScatterCurveMap
              mapConfig={{
                map: {
                  type: 'province',
                  name: 'guangdong',
                  mapBackgroundColor: null,
                  areaBackgroundColor: null,
                  areaLineColor: null },
                fromPoint: [113.323296, 23.117758],
                toPoints: [
                  [113.415283, 22.499449],
                  [113.608455, 24.820991],
                  [116.63481, 23.656958],
                  [110.425722, 21.39238],
                  [113.295701, 25.198217],
                ],
                travelDirection: 'from-to',
                travelType: '',
              }}
            />
          </div>
          <hr />
          <p className="sample-title">
            省份的地图绘制（图例为广东省）
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { ScatterCurveMap  } from 'deep-viz';

ReactDOM.render(
  <ScatterCurveMap
  mapConfig={{
    map: {
      type: 'province',
      name: 'guangdong',
      mapBackgroundColor: null,
      areaBackgroundColor: null,
      areaLineColor: null },
    fromPoint: [113.323296, 23.117758],
    toPoints: [
        [113.415283, 22.499449],
        [113.608455, 24.820991],
        [116.63481, 23.656958],
        [110.425722, 21.39238],
        [113.295701, 25.198217],
    ],
    travelDirection: 'from-to',
    travelType: '',
  }}
/>
, mountNode);`}
              </div>
            </Highlight>
          </div>
        </Card>
        <Card>
          <div style={{ height: 500, marginBottom: 20 }}>
            <ScatterCurveMap
              mapConfig={{
                map: {
                  type: 'district',
                  name: '徐汇区',
                  mapBackgroundColor: null,
                  areaBackgroundColor: 'lightblue',
                  areaLineColor: null },
                fromPoint: [121.439372, 31.2056777],
                toPoints: [
                  [121.422124, 31.141905],
                  [121.445696, 31.13696],
                ],
                travelDirection: 'from-to',
                travelType: '',
              }}
            />
          </div>
          <hr />
          <p className="sample-title">
            区县的地图（图例为徐汇区）
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {` import { ScatterCurveMap  } from 'deep-viz';
            ReactDOM.render(
              <ScatterCurveMap
              mapConfig={{
                map: {
                  type: 'district',
                  name: '徐汇区',
                  mapBackgroundColor: null,
                  areaBackgroundColor: null,
                  areaLineColor: null },
                fromPoint: [116.400244, 39.918698],
                toPoints: [
                  [99.371246, 37.56617],
                  [88.480047, 31.354546],
                  [100.990209, 29.698186],
                  [116.002403, 29.311931],
                  [128.07103, 44.572632],
                ],
                travelDirection: 'from-to',
                travelType: '',
              }}
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
