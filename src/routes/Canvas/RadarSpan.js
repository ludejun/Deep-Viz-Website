import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { RadarSpan, ScatterCurveMap } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class GaugePans extends Basic {

  render() {
    const Source = [{
      parameter: 'theme',
      description: '非必需，定义雷达扫描主题，可取两个值"blue"和"green"',
      type: 'String',
      defaultValue: 'blue',
    }];
    const tableConfig = [
      { title: 'RadarSpan', subtitle: '', dataSource: Source },
    ];
    return (
      <div>
        <p className="container-header">雷达扫描</p>
        <p>该组件可以根据传入的主题展现出扫描动画</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card noHovering>
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
                travelDirection: 'none',
                travelType: '',
              }}
            />
          </div>
          <div style={{ height: 500, top: 23, position: 'absolute', width: '94%', zIndex: 99 }}>
            <RadarSpan theme={'blue'} />
          </div>
          <hr />
          <p className="sample-title">
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">定义蓝色主题扫描雷达</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { RadarSpan } from 'deep-viz';

ReactDOM.render(
    <RadarSpan theme={'blue'} />
, mountNode);`}
              </div>
            </Highlight>
          </div>
        </Card>
        <Card noHovering>
          <div style={{ height: 500, width: 500 }}>
            <RadarSpan theme={'green'} />
          </div>
          <hr />
          <p className="sample-title">
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">定义绿色主题扫描雷达</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { RadarSpan } from 'deep-viz';

ReactDOM.render(
    <RadarSpan theme={'green'} />
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

