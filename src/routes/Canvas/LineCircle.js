/**
 * Created by Administrator on 2017/10/16.
 */
import React from 'react';
import Highlight from 'react-highlight';
import { Card, Icon } from 'antd';
import Basic from '../Layout/WDBasic';
import { LineCircle } from '../../components/src';

export default class LineCircleShow extends Basic {
  render() {
    const LineCircleSource = [
      {
        parameter: 'height',
        description: '非必需，设置组件的高，一般格式 height= {高度}',
        type: 'Number',
        defaultValue: 'window.innerHeight',
      },
    ];
    const tableConfig = [
      { title: 'LineCircle', subtitle: '', dataSource: LineCircleSource },
    ];
    return (
      <div>
        <p className="container-header">LineCircle</p>
        <p>LineCircle，可用作背景墙，宽高自适应</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card noHovering>
          <LineCircle
            height={500}
          />
          <hr />
          <p className="sample-title">
            时钟
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">LineCircle尺寸可调整</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { LineCircle } from 'deep-viz';/**/

ReactDOM.render(
  <LineCircle
   height= {300}
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
