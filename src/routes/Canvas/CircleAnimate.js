/**
 * Created by Administrator on 2017/10/11.
 */
import React from 'react';
import Highlight from 'react-highlight';
import { Card, Icon } from 'antd';
import Basic from '../Layout/WDBasic';
import { CircleAnimate } from '../../components/src';

export default class CircleAnimates extends Basic {
  render() {
    const CricleAnimateSource = [
      {
        parameter: 'width',
        description: '非必需，设置canvas的宽，一般格式 width= "宽度"',
        type: 'Number',
        defaultValue: 'window.innerWidth',
      },
      {
        parameter: 'height',
        description: '非必需，设置canvas的高，一般格式 height= "高度"',
        type: 'Number',
        defaultValue: 'window.innerHeight',
      },
      {
        parameter: 'fillStyle',
        description: '非必需，设置气泡的填充色，一般格式 fillStyle= "#fff"',
        type: 'String',
        defaultValue: 'rgb(255,255,255)',
      },
    ];
    const tableConfig = [
      { title: 'CircleAnimate', subtitle: '', dataSource: CricleAnimateSource },
    ];
    return (
      <div>
        <p className="container-header">CircleAnimate 气泡Canvas</p>
        <p>气泡背景动画</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <CircleAnimate
            width={766} height={260} fillStyle="#fff"
          />
          <hr />
          <p className="sample-title">
            漂浮气泡
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">canvas画布尺寸可调整</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { CircleAnimate } from 'deep-viz';/**/

ReactDOM.render(
  <CircleAnimate
    width= {780} height= {200} fillStyle="#fff"
  />
,mountNode);
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
