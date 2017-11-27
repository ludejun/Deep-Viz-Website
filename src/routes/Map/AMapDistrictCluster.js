import React from 'react';
import { Icon } from 'antd';
import Highlight from 'react-highlight';
import { AMapDistrictCluster } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class AMapDistrictClusterShow extends Basic {
  render() {
    const data = [
      '113.864691,22.942327',
      '120.412618,36.382612',
      '113.370643,22.938827',
      '113.001181,23.120518',
      '112.985037,23.15046',
      '113.890205,22.798043',
      '110.361899,20.026695',
      '113.682288,34.618975',
      '121.434529,31.215641',
      '109.488707,18.309754',
      '120.682502,28.011099',
      '120.68556,30.912366',
      '126,.687123,45.787618',
      '120.48506,30.053066',
      '103.970724,30.397931',
      '117.270073,37.96162',
      '117.212164,31.831641',
      '120.256218,31.882242',
      '121.411101,31.059407',
      '113.336586,33.729581',
      '104.137953,30.784276',
      '114.141516,23.159282',
      '120.499683,30.042305',
      '120.487242,32.180365',
      '108.94686,34.362975',
      '121.299895,31.105064',
      '112.873295,22.920901',
      '114.164329,22.644532',
      '113.373916,23.086728',
      '120.282954,30.196059',
      '113.250159,23.075847',
      '121.145445,31.193621',
      '116.675933,39.986343',
      '120.896422,31.472813',
      '120.75997,31.734934',
      '118.782607,32.00381',
    ];
    const Source = [{
      parameter: 'style',
      description: '非必需，定义地图组件外层样式',
      type: 'Object',
      defaultValue: 'width: "100%"， height: 630',
    }, {
      parameter: 'lableConfig',
      description: '非必需，label的相关样式，详见下面table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'point',
      description: '必需，定义地图组件的数据源（地区的经纬度例如["121.8,32.5","231.1,562.6"]）',
      type: 'Array',
      defaultValue: 'null',
    }];
    const labelConfig = [
      {
        parameter: 'type',
        description: '非必需，定义组件label的类型，可选rect,circle',
        type: 'String',
        defaultValue: 'rect',
      },
      {
        parameter: 'fillStyle',
        description: '非必需，定义组件label的填充颜色',
        type: 'String',
        defaultValue: '#108EE9',
      },
      {
        parameter: 'color',
        description: '非必需，定义组件label的字体颜色',
        type: 'String',
        defaultValue: '#fff',
      },
    ];
    const tableConfig = [
      { title: 'AMapDistrictCluster', subtitle: '', dataSource: Source },
      { title: 'labelConfig', subtitle: '', dataSource: labelConfig },
    ];
    return (
      <div>
        <p className="container-header">AMapDistrictCluster&nbsp;高德地图行政聚合图</p>
        <p>根据地图缩放等级实现的点在行政区域上的聚合与扩散，提供两种图形样式（默认矩形），可通过点击图形或放大地图进行下钻</p>
        <p className="container-title">代码示例</p>
        <div style={{ border: '1px solid #e9e9e9', marginTop: 20, padding: 20 }}>
          <div style={{ width: '100%' }}>
            <AMapDistrictCluster
              labelConfig={{
                type: 'rect',
                fillStyle: '#108EE9',
                color: '#fff',
              }}
              point={data}
              style={{ height: 500 }}
            />
            <p className="sample-title">
              全国行政区域的聚合
              <Icon
                type="arrows-alt"
                title="Show me the code"
                onClick={this.onCodeToggleClick}
              />
            </p>
            <div className="code-container">
              <Highlight className="JavaScript">
                <div style={{ whiteSpace: 'pre' }}>
                  {`import { AMapDistrictCluster } from 'deep-viz';
ReactDOM.render(
  <AMapDistrictCluster
    labelConfig={{
      type: 'rect',
      fillStyle: 'blue',
      color: '#fff',
    }}
    style={{ height: 500 }}
  />, mountNode
);`}
                </div>
              </Highlight>
            </div>
          </div>
        </div>
        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}
