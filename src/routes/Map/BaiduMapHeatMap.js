import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { BaiduMapHeatMap } from '../../components/src';
import Basic from '../Layout/WDBasic';
import { baseControlTableCfg } from './BaiduMapControlUtil';

export default class BaiduMapHeatMaps extends Basic {
  render() {
    const Source = [{
      parameter: 'style',
      description: '非必需，定义地图组件外层样式',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'point',
      description: '非必需。定义中心点的坐标；lng：经度，lat：纬度；如果未定义中心点，根据热力点自动设置',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'datas',
      description: '必需，定义地图上热力点数据，参考下表中datas配置',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'opacity',
      description: '非必需，热力图透明度0-100',
      type: 'Number',
      defaultValue: '0',
    }, {
      parameter: 'radius',
      description: '非必需，热力图点区域半径',
      type: 'Number',
      defaultValue: '20',
    }, {
      parameter: 'gradient',
      description: '非必需，热力图渐变区间',
      type: 'Object',
      defaultValue: '{0.45: "rgb(0,0,255)", 0.55: "rgb(0,255,255)", 0.65: "rgb(0,255,0)", 0.95: "yellow",1.0: "rgb(255,0,0)",}',
    }];
    const tableConfig = [
      { title: 'BaiduMapHeatMap', subtitle: '', dataSource: Source },
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
            parameter: 'count',
            description: '必需，热力值，最高100',
            type: 'Number',
            defaultValue: 'null',
          },
        ],
      },
    ];
    const baseTableConfig = baseControlTableCfg();
    tableConfig.push(baseTableConfig[0]);
    const datas = [
  { lng: 116.418261, lat: 39.921984, count: 50 },
  { lng: 116.423332, lat: 39.916532, count: 51 },
  { lng: 116.419787, lat: 39.930658, count: 15 },
  { lng: 116.418455, lat: 39.920921, count: 40 },
  { lng: 116.418843, lat: 39.915516, count: 100 },
  { lng: 116.42546, lat: 39.918503, count: 6 },
  { lng: 116.423289, lat: 39.919989, count: 18 },
  { lng: 116.418162, lat: 39.915051, count: 80 },
  { lng: 116.422039, lat: 39.91782, count: 11 },
  { lng: 116.41387, lat: 39.917253, count: 7 },
  { lng: 116.41773, lat: 39.919426, count: 42 },
  { lng: 116.421107, lat: 39.916445, count: 4 },
  { lng: 116.417521, lat: 39.917943, count: 27 },
  { lng: 116.419812, lat: 39.920836, count: 23 },
  { lng: 116.420682, lat: 39.91463, count: 60 },
  { lng: 116.415424, lat: 39.924675, count: 8 },
  { lng: 116.419242, lat: 39.914509, count: 15 },
  { lng: 116.422766, lat: 39.921408, count: 25 },
  { lng: 116.421674, lat: 39.924396, count: 21 },
  { lng: 116.427268, lat: 39.92267, count: 1 },
  { lng: 116.417721, lat: 39.920034, count: 51 },
  { lng: 116.412456, lat: 39.92667, count: 7 },
  { lng: 116.420432, lat: 39.919114, count: 11 },
  { lng: 116.425013, lat: 39.921611, count: 35 },
  { lng: 116.418733, lat: 39.931037, count: 22 },
  { lng: 116.419336, lat: 39.931134, count: 4 },
  { lng: 116.413557, lat: 39.923254, count: 5 },
  { lng: 116.418367, lat: 39.92943, count: 3 },
  { lng: 116.424312, lat: 39.919621, count: 100 },
  { lng: 116.423874, lat: 39.919447, count: 87 },
  { lng: 116.424225, lat: 39.923091, count: 32 },
  { lng: 116.417801, lat: 39.921854, count: 44 },
  { lng: 116.417129, lat: 39.928227, count: 21 },
  { lng: 116.426426, lat: 39.922286, count: 80 },
  { lng: 116.421597, lat: 39.91948, count: 32 },
  { lng: 116.423895, lat: 39.920787, count: 26 },
  { lng: 116.423563, lat: 39.921197, count: 17 },
  { lng: 116.417982, lat: 39.922547, count: 17 },
  { lng: 116.426126, lat: 39.921938, count: 25 },
  { lng: 116.42326, lat: 39.915782, count: 100 },
  { lng: 116.419239, lat: 39.916759, count: 39 },
  { lng: 116.417185, lat: 39.929123, count: 11 },
  { lng: 116.417237, lat: 39.927518, count: 9 },
  { lng: 116.417784, lat: 39.915754, count: 47 },
  { lng: 116.420193, lat: 39.917061, count: 52 },
  { lng: 116.422735, lat: 39.915619, count: 100 },
  { lng: 116.418495, lat: 39.915958, count: 46 },
  { lng: 116.416292, lat: 39.931166, count: 9 },
  { lng: 116.419916, lat: 39.924055, count: 8 },
  { lng: 116.42189, lat: 39.921308, count: 11 },
  { lng: 116.413765, lat: 39.929376, count: 3 },
  { lng: 116.418232, lat: 39.920348, count: 50 },
  { lng: 116.417554, lat: 39.930511, count: 15 },
  { lng: 116.418568, lat: 39.918161, count: 23 },
  { lng: 116.413461, lat: 39.926306, count: 3 },
  { lng: 116.42232, lat: 39.92161, count: 13 },
  { lng: 116.4174, lat: 39.928616, count: 6 },
  { lng: 116.424679, lat: 39.915499, count: 21 },
  { lng: 116.42171, lat: 39.915738, count: 29 },
  { lng: 116.417836, lat: 39.916998, count: 99 },
  { lng: 116.420755, lat: 39.928001, count: 10 },
  { lng: 116.414077, lat: 39.930655, count: 14 },
  { lng: 116.426092, lat: 39.922995, count: 16 },
  { lng: 116.41535, lat: 39.931054, count: 15 },
  { lng: 116.413022, lat: 39.921895, count: 13 },
  { lng: 116.415551, lat: 39.913373, count: 17 },
  { lng: 116.421191, lat: 39.926572, count: 1 },
  { lng: 116.419612, lat: 39.917119, count: 9 },
  { lng: 116.418237, lat: 39.921337, count: 54 },
  { lng: 116.423776, lat: 39.921919, count: 26 },
  { lng: 116.417694, lat: 39.92536, count: 17 },
  { lng: 116.415377, lat: 39.914137, count: 19 },
  { lng: 116.417434, lat: 39.914394, count: 43 },
  { lng: 116.42588, lat: 39.922622, count: 27 },
  { lng: 116.418345, lat: 39.919467, count: 8 },
  { lng: 116.426883, lat: 39.917171, count: 3 },
  { lng: 116.423877, lat: 39.916659, count: 34 },
  { lng: 116.415712, lat: 39.915613, count: 14 },
  { lng: 116.419869, lat: 39.931416, count: 12 },
  { lng: 116.416956, lat: 39.925377, count: 11 },
  { lng: 116.42066, lat: 39.925017, count: 38 },
  { lng: 116.416244, lat: 39.920215, count: 91 },
  { lng: 116.41929, lat: 39.915908, count: 54 },
  { lng: 116.422116, lat: 39.919658, count: 21 },
  { lng: 116.4183, lat: 39.925015, count: 15 },
  { lng: 116.421969, lat: 39.913527, count: 3 },
  { lng: 116.422936, lat: 39.921854, count: 24 },
  { lng: 116.41905, lat: 39.929217, count: 12 },
  { lng: 116.424579, lat: 39.914987, count: 57 },
  { lng: 116.42076, lat: 39.915251, count: 70 },
  { lng: 116.425867, lat: 39.918989, count: 8 },
    ];
    return (
      <div>
        <p className="container-header">BaiduMapHeatMap&nbsp;百度地图热力图</p>
        <p>根据热力数据在地图上展示热力图。</p>
        <b><i>*&nbsp;如果同一个页面内需要引入多个地图组件或热力图组件，建议先引入地图js和热力图js后再引入组件。否则多个地图组件同时初始化会同时加载多次地图js</i></b>
        <p className="container-title">代码示例</p>
        <Card>
          <BaiduMapHeatMap
            datas={datas}
            style={{ height: 500 }}
          />
          <p className="sample-title">
            数据展示：自定义热力图数据
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { BaiduMapHeatMap } from 'deep-viz';
// 创建虚假数据
const datas = [
  { lng: 116.418261, lat: 39.921984, count: 50},
  { lng: 116.423332, lat: 39.916532, count: 51},
  { lng: 116.419787, lat: 39.930658, count: 15},
  { lng: 116.418455, lat: 39.920921, count: 40},
  { lng: 116.418843, lat: 39.915516, count: 100},
  { lng: 116.42546, lat: 39.918503, count: 6},
  { lng: 116.423289, lat: 39.919989, count: 18},
  { lng: 116.418162, lat: 39.915051, count: 80},
  { lng: 116.422039, lat: 39.91782, count: 11},
  { lng: 116.41387, lat: 39.917253, count: 7},
  { lng: 116.41773, lat: 39.919426, count: 42},
  { lng: 116.421107, lat: 39.916445, count: 4},
  { lng: 116.417521, lat: 39.917943, count: 27},
  { lng: 116.419812, lat: 39.920836, count: 23},
  { lng: 116.420682, lat: 39.91463, count: 60},
  { lng: 116.415424, lat: 39.924675, count: 8},
  { lng: 116.419242, lat: 39.914509, count: 15},
  { lng: 116.422766, lat: 39.921408, count: 25},
  { lng: 116.421674, lat: 39.924396, count: 21},
  { lng: 116.427268, lat: 39.92267, count: 1},
  { lng: 116.417721, lat: 39.920034, count: 51},
  { lng: 116.412456, lat: 39.92667, count: 7},
  { lng: 116.420432, lat: 39.919114, count: 11},
  { lng: 116.425013, lat: 39.921611, count: 35},
  { lng: 116.418733, lat: 39.931037, count: 22},
  { lng: 116.419336, lat: 39.931134, count: 4},
  { lng: 116.413557, lat: 39.923254, count: 5},
  { lng: 116.418367, lat: 39.92943, count: 3},
  { lng: 116.424312, lat: 39.919621, count: 100},
  { lng: 116.423874, lat: 39.919447, count: 87},
  { lng: 116.424225, lat: 39.923091, count: 32},
  { lng: 116.417801, lat: 39.921854, count: 44},
  { lng: 116.417129, lat: 39.928227, count: 21},
  { lng: 116.426426, lat: 39.922286, count: 80},
  { lng: 116.421597, lat: 39.91948, count: 32},
  { lng: 116.423895, lat: 39.920787, count: 26},
  { lng: 116.423563, lat: 39.921197, count: 17},
  { lng: 116.417982, lat: 39.922547, count: 17},
  { lng: 116.426126, lat: 39.921938, count: 25},
  { lng: 116.42326, lat: 39.915782, count: 100},
  { lng: 116.419239, lat: 39.916759, count: 39},
  { lng: 116.417185, lat: 39.929123, count: 11},
  { lng: 116.417237, lat: 39.927518, count: 9},
  { lng: 116.417784, lat: 39.915754, count: 47},
  { lng: 116.420193, lat: 39.917061, count: 52},
  { lng: 116.422735, lat: 39.915619, count: 100},
  { lng: 116.418495, lat: 39.915958, count: 46},
  { lng: 116.416292, lat: 39.931166, count: 9},
  { lng: 116.419916, lat: 39.924055, count: 8},
  { lng: 116.42189, lat: 39.921308, count: 11},
  { lng: 116.413765, lat: 39.929376, count: 3},
  { lng: 116.418232, lat: 39.920348, count: 50},
  { lng: 116.417554, lat: 39.930511, count: 15},
  { lng: 116.418568, lat: 39.918161, count: 23},
  { lng: 116.413461, lat: 39.926306, count: 3},
  { lng: 116.42232, lat: 39.92161, count: 13},
  { lng: 116.4174, lat: 39.928616, count: 6},
  { lng: 116.424679, lat: 39.915499, count: 21},
  { lng: 116.42171, lat: 39.915738, count: 29},
  { lng: 116.417836, lat: 39.916998, count: 99},
  { lng: 116.420755, lat: 39.928001, count: 10},
  { lng: 116.414077, lat: 39.930655, count: 14},
  { lng: 116.426092, lat: 39.922995, count: 16},
  { lng: 116.41535, lat: 39.931054, count: 15},
  { lng: 116.413022, lat: 39.921895, count: 13},
  { lng: 116.415551, lat: 39.913373, count: 17},
  { lng: 116.421191, lat: 39.926572, count: 1},
  { lng: 116.419612, lat: 39.917119, count: 9},
  { lng: 116.418237, lat: 39.921337, count: 54},
  { lng: 116.423776, lat: 39.921919, count: 26},
  { lng: 116.417694, lat: 39.92536, count: 17},
  { lng: 116.415377, lat: 39.914137, count: 19},
  { lng: 116.417434, lat: 39.914394, count: 43},
  { lng: 116.42588, lat: 39.922622, count: 27},
  { lng: 116.418345, lat: 39.919467, count: 8},
  { lng: 116.426883, lat: 39.917171, count: 3},
  { lng: 116.423877, lat: 39.916659, count: 34},
  { lng: 116.415712, lat: 39.915613, count: 14},
  { lng: 116.419869, lat: 39.931416, count: 12},
  { lng: 116.416956, lat: 39.925377, count: 11},
  { lng: 116.42066, lat: 39.925017, count: 38},
  { lng: 116.416244, lat: 39.920215, count: 91},
  { lng: 116.41929, lat: 39.915908, count: 54},
  { lng: 116.422116, lat: 39.919658, count: 21},
  { lng: 116.4183, lat: 39.925015, count: 15},
  { lng: 116.421969, lat: 39.913527, count: 3},
  { lng: 116.422936, lat: 39.921854, count: 24},
  { lng: 116.41905, lat: 39.929217, count: 12},
  { lng: 116.424579, lat: 39.914987, count: 57},
  { lng: 116.42076, lat: 39.915251, count: 70},
  { lng: 116.425867, lat: 39.918989, count: 8}
    ];

ReactDOM.render(
  <BaiduMapHeatMap
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
