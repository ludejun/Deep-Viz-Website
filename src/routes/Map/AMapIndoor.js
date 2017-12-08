import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { AMapIndoor } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class AMapIndoors extends Basic {
  render() {
    const Source = [{
      parameter: 'style',
      description: '非必需，定义地图组件外层样式',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'point',
      description: '必须。实际坐标（合适的坐标会展示室内图，默认室内图）。lng：经度，lat：纬度',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'dragEnable',
      description: '非必须。是否允许拖拽',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'zoomEnable',
      description: '非必须。是否允许缩放',
      type: 'Boolean',
      defaultValue: 'true',
    }];
    const tableConfig = [
      { title: 'AMapIndoor', subtitle: '', dataSource: Source },
      {
        title: 'point',
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
          },
        ],
      },
    ];
    const point = {
      lng: 112.971019,
      lat: 28.198715,
    };
    return (
      <div>
        <p className="container-header">AMapIndoor&nbsp;高德地图室内图</p>
        <p>根据实际建筑坐标展示建筑室内图。</p>
        <b><i>*&nbsp;如果同一个页面内需要引入多个地图组件，建议先引入地图js后再引入组件。否则多个地图组件同时初始化会同时加载多次地图js</i></b>
        <p className="container-title">代码示例</p>
        <Card>
          <AMapIndoor
            point={point}
            style={{ height: 500 }}
          />
          <p className="sample-title">
            数据展示：室内地图（长沙开福万达广场）
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { AMapIndoor } from 'deep-viz';
ReactDOM.render(
  <AMapIndoor
    datas={datas}
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
