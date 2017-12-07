/**
 * Created by Administrator on 2017/9/28.
 */
import React from 'react';
import Highlight from 'react-highlight';
import { Card, Icon } from 'antd';
import Basic from '../Layout/WDBasic';
import { RainbowRain } from '../../components/src';

export default class Rainbow extends Basic {
  render() {
    const canvasRainSource = [
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
    ];
    const tableConfig = [
      { title: 'RainbowRain', subtitle: '', dataSource: canvasRainSource },
    ];
    return (
      <div>
        <p className="container-header">RainbowRain 彩虹雨Canvas</p>
        <p>彩虹雨背景动画</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <RainbowRain width={780} height={200} />
          <hr />
          <p className="sample-title">
            彩虹雨
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">canvas画布尺寸可调整</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { RainbowRain } from 'deep-viz';

ReactDOM.render(
  <RainbowRain
    width= {780} height= {200}
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
