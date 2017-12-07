import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { ImageBar } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ImageBarShow extends Basic {
  getMapOption() {
    const plazaMap = [
      {
        baidu_lng: 121.331128,
        baidu_lat: 31.242078,
        name: '上海江桥万达广场',
      },
      {
        baidu_lng: 116.647155,
        baidu_lat: 39.912058,
        name: '北京通州万达广场',
      },
      {
        baidu_lng: 114.344807,
        baidu_lat: 30.562822,
        name: '武汉汉街万达广场',
      },
    ];

    const option = {
      colors: '#E96A69',
      series: [
        {
          coordinateSystem: 'geo',
          hoverAnimation: true,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          type: 'effectScatter',
          data: plazaMap.map((p) => {
            return [p.baidu_lng, p.baidu_lat, p.name];
          }),
        },
      ],
    };

    return option;
  }

  render() {
    const dataSource = [
      {
        parameter: 'dataList',
        description: '必需，见dataList',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'direction',
        description: '可空，取"x"或"y"，x代表横行，y代表纵向',
        type: 'String',
        defaultValue: '"x"',
      },
    ];
    const dataList = [
      {
        parameter: 'itemImage',
        description: '必需，每组类型所用的图片路径',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'percent',
        description: '必需，该类型所占百分比，范围0-100。',
        type: 'Number',
        defaultValue: 'null',
      },
      {
        parameter: 'color',
        description: '可选，控制百分比显示颜色。若为空，则不显示百分比，几组对比在一行中显示',
        type: 'String',
        defaultValue: 'null',
      },
    ];
    const tableConfig = [
      { title: 'ImageBar', subtitle: '', dataSource },
      { title: 'dataList', subtitle: '', dataSource: dataList },
    ];

    return (
      <div>
        <p className="container-header">ImageBar 柱状象形图</p>
        <p>用象形图展示一组数据对比，多用于性别等。</p>
        <p className="container-title">代码示例</p>
        <Card>
          <ImageBar
            dataList={[
              {
                itemImage: 'img/icon_male.png',
                percent: 60,
                color: '#4C9DFF',
              },
              {
                itemImage: 'img/icon_female.png',
                percent: 40,
                color: '#EA6C6B',
              },
            ]}
          />
          <hr />
          <p className="sample-title">
            有百分比，图片分多行显示
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc" />
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ImageBar } from 'deep-viz';
<ImageBar
  dataList={[
    {
      itemImage: 'img/icon_male.png',
      percent: 60,
      color: '#4C9DFF',
    },
    {
      itemImage: 'img/icon_female.png',
      percent: 40,
      color: '#EA6C6B',
    },
  ]}
/>
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <ImageBar
            dataList={[
              {
                itemImage: 'img/icon_male.png',
                percent: 60,
                color: '#4C9DFF',
              },
              {
                itemImage: 'img/icon_female.png',
                percent: 40,
                color: '#EA6C6B',
              },
            ]}
            direction="y"
          />
          <hr />
          <p className="sample-title">
            纵向图片显示
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">根据dataList的长度来生成几列纵向象形柱状图</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ImageBar } from 'deep-viz';
<ImageBar
  dataList={[
    {
      itemImage: 'img/icon_male.png',
      percent: 60,
      color: '#4C9DFF',
    },
    {
      itemImage: 'img/icon_female.png',
      percent: 40,
      color: '#EA6C6B',
    },
  ]}
  direction="y"
/>
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <ImageBar
            dataList={[
              {
                itemImage: 'img/icon_male.png',
                percent: 60,
              },
              {
                itemImage: 'img/icon_female.png',
                percent: 40,
              },
            ]}
          />
          <hr />
          <p className="sample-title">
            无百分比，图片单行显示
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc" />
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ImageBar } from 'deep-viz';
<ImageBar
  dataList={[
    {
      itemImage: 'img/icon_male.png',
      percent: 60,
    },
    {
      itemImage: 'img/icon_female.png',
      percent: 40,
    },
  ]}
/>
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
