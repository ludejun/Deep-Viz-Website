import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { ImagePercent } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ImagePercentShow extends Basic {
  render() {
    const dataSource = [
      {
        parameter: 'dataList',
        description: '必需，见dataList',
        type: 'Array',
        defaultValue: 'null',
      },
    ];
    const dataList = [
      {
        parameter: 'itemImage',
        description: '必需，每组类型所用的图片，可以为图片路径或reactdom元素',
        type: 'String|ReactDom',
        defaultValue: 'null',
      },
      {
        parameter: 'percent',
        description: '可选，控制百分比显示。若为空，则不显示百分比。如果类型为Number则自动四舍五入至整数值，String类型则不做处理',
        type: 'Number|String',
        defaultValue: 'null',
      },
      {
        parameter: 'color',
        description: '可选，控制百分比显示颜色。',
        type: 'String',
        defaultValue: '#999',
      },
      {
        parameter: 'name',
        description: '可选，控制类型名称',
        type: 'String',
        defaultValue: '""',
      },
    ];
    const tableConfig = [
      { title: 'ImagePercent', subtitle: '', dataSource },
      { title: 'dataList', subtitle: '', dataSource: dataList },
    ];

    return (
      <div>
        <p className="container-header">ImagePercent 柱状象形图</p>
        <p>用带百分比的图片展示一组数据对比。</p>
        <p className="container-title">代码示例</p>
        <Card>
          <ImagePercent
            dataList={[
              {
                itemImage: 'img/icon_male.png', // 单个图片
                percent: 54, // 百分比，整数
                color: '#4C9DFF', //  百分比颜色
                name: '男', // 标题
              },
              {
                itemImage: 'img/icon_female.png',
                percent: 46,
                color: '#EA6C6B',
                name: '女',
              },
            ]}
          />
          <hr />
          <p className="sample-title">
            有百分比，两个显示项目，传入类型为图片url
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc" />
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ImagePercent } from 'deep-viz';
<ImagePercent
  dataList={[
    {
      itemImage: 'img/icon_male.png', // 单个图片
      percent: 54, // 百分比，整数
      color: '#4C9DFF', //  百分比颜色
      name: '男', // 标题
    },
    {
      itemImage: 'img/icon_female.png',
      percent: 46,
      color: '#EA6C6B',
      name: '女',
    },
  ]}
/>
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <ImagePercent
            dataList={[
              {
                itemImage: (
                  <Icon type="smile-o" style={{ color: '#4C9DFF', fontSize: 24, marginRight: 5 }} />
                ), // 单个图片
                percent: 54, // 百分比，整数
                color: '#4C9DFF', //  百分比颜色
                name: '满意', // 标题
              },
              {
                itemImage: (
                  <Icon type="meh-o" style={{ color: '#4caf50', fontSize: 24, marginRight: 5 }} />
                ), // 单个图片
                percent: 20, // 百分比，整数
                color: '#4caf50', //  百分比颜色
                name: '一般', // 标题
              },
              {
                itemImage: (
                  <Icon type="frown-o" style={{ color: '#EA6C6B', fontSize: 24, marginRight: 5 }} />
                ),
                percent: 26,
                color: '#EA6C6B',
                name: '不满意',
              },
            ]}
          />
          <hr />
          <p className="sample-title">
            有百分比，三个显示项目，传入类型为ReactDom
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc" />
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ImagePercent } from 'deep-viz';
import { Icon } from 'antd';
<ImagePercent
  dataList={[
    {
      itemImage: <Icon type="smile-o" style={{ color: '#4C9DFF', fontSize: 24, marginRight: 5 }} />,
      percent: 54,
      color: '#4C9DFF',
      name: '满意',
    },
    {
      itemImage: <Icon type="meh-o" style={{ color: '#4caf50', fontSize: 24, marginRight: 5 }} />,
      percent: 20,
      color: '#4caf50',
      name: '一般',
    },
    {
      itemImage: <Icon type="frown-o" style={{ color: '#EA6C6B', fontSize: 24, marginRight: 5 }} />,
      percent: 46,
      color: '#EA6C6B',
      name: '不满意',
    },
  ]}
/>
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <ImagePercent
            dataList={[
              {
                itemImage: <Icon type="smile-o" style={{ color: '#4C9DFF', fontSize: 24 }} />, // 单个图片
                name: '满意', // 标题
              },

              {
                itemImage: <Icon type="frown-o" style={{ color: '#EA6C6B', fontSize: 24 }} />,
                name: '不满意',
              },
            ]}
          />
          <hr />
          <p className="sample-title">
            没有百分比，只有标题
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc" />
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ImagePercent } from 'deep-viz';
import { Icon } from 'antd';
<ImagePercent
  dataList={[
    {
      itemImage: <Icon type="smile-o" style={{ color: '#4C9DFF', fontSize: 24 }} />,
      name: '满意',
    },

    {
      itemImage: <Icon type="frown-o" style={{ color: '#EA6C6B', fontSize: 24 }} />,
      name: '不满意',
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
