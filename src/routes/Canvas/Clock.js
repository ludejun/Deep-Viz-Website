/**
 * Created by Administrator on 2017/10/16.
 */
import React from 'react';
import Highlight from 'react-highlight';
import { Card, Icon } from 'antd';
import Basic from '../Layout/WDBasic';
import { Clock } from '../../components/src';

export default class ClockShow extends Basic {
  render() {
    const ClockSource = [
      {
        parameter: 'width',
        description: '非必需，设置时钟的宽，一般格式 width= {宽度}',
        type: 'Number',
        defaultValue: '200',
      },
      {
        parameter: 'height',
        description: '非必需，设置时钟的高，一般格式 height= {高度}',
        type: 'Number',
        defaultValue: '200',
      },
    ];
    const tableConfig = [
      { title: 'Clock', subtitle: '', dataSource: ClockSource },
    ];
    return (
      <div>
        <p className="container-header">Clock 时钟Canvas</p>
        <p>时钟</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card noHovering>
          <Clock width={300} height={300} />
          <hr />
          <p className="sample-title">
            时钟
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">时钟尺寸可调整</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { Clock } from 'deep-viz';/**/

ReactDOM.render(
  <Clock
    width= {300} height= {300}
  />
  ,mountNode
);
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
