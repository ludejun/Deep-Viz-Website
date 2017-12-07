import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { BallMove } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class BallMoveShow extends Basic {
  render() {
    const configSource = [
      {
        parameter: 'width',
        description: '必需，定义SVG宽度',
        type: 'String',
        defaultValue: '727px',
      },
      {
        parameter: 'ballColor',
        description: '必需，定义运动的小球颜色',
        type: 'String',
        defaultValue: 'orange',
      },
      {
        parameter: 'dur',
        description: '可选，控制小球运动快慢，单位s',
        type: 'String',
        defaultValue: '5s',
      },
      {
        parameter: 'direction',
        description: '可选，定义小球运动方向，可选值alternate',
        type: 'String',
        defaultValue: 'normal',
      },
    ];
    const tableConfig = [{ title: 'config', subtitle: '', dataSource: configSource }];
    return (
      <div>
        <p className="container-header">BallMove 小球曲线运动</p>
        <p>svg实现的小球运动。</p>
        <p className="container-title">代码示例</p>
        <Card>
          <BallMove ballColor="orange" width="727px" dur="5s" />
          <hr />
          <p className="sample-title">
            小球曲线运动
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">尺寸可调整</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {` import {BallMove} from 'deep-viz';
          ReactDOM.render(
          <BallMove ballColor="orange" width="727px" dur="5s" direction="alternate" />
        , mountNode);`}
            </Highlight>
          </div>
        </Card>
        <p className="container-title">API</p>
        {this._renderAPI(tableConfig)}
      </div>
    );
  }
}
