import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { BaiduMapPolygon } from '../../components/src';
import Basic from '../Layout/WDBasic';
import { baseControlTableCfg } from './BaiduMapControlUtil';

export default class BaiduMapPolygons extends Basic {
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
    const tableConfig = [
      { title: 'BaiduMapPolygon', subtitle: '', dataSource: Source },
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
    return (
      <div>
        <p className="container-header">BaiduMapPolygon&nbsp;百度地图辐射区域</p>
        <p>根据坐标和半径在地图上画出圆形区域，并进行展示说明。</p>
        <b><i>*&nbsp;如果同一个页面内需要引入多个地图组件，建议先引入地图js后再引入组件。否则多个地图组件同时初始化会同时加载多次地图js</i></b>
        <p className="container-title">代码示例</p>
        <Card>
          <BaiduMapPolygon
            datas={datas}
            point={point}
            outsideLabel={outsideLabel}
            style={{ height: 500 }}
            labelColor="#00FF00"
          />
          <p className="sample-title">
            数据展示：自定义地图范围，1-10km，同时展示10km外
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { BaiduMapPolygon } from 'deep-viz';
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
ReactDOM.render(
  <BaiduMapPolygon
    datas={datas}
    point={point}
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
