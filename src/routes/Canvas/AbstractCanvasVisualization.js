import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import { AbstractCanvasVisualization } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class AbstractCanvasVisualizationShow extends Basic {
  rand(rMi, rMa) {
    return ~~((Math.random() * ((rMa - rMi) + 1)) + rMi);
  }

  render() {
    const AbstractSource = [{
      parameter: 'width',
      description: '非必需，自定义canvas的宽',
      type: 'String',
      defaultValue: '400',
    }, {
      parameter: 'height',
      description: '非必需，自定义canvas的高',
      type: 'String',
      defaultValue: '400',
    }, {
      parameter: 'color',
      description: '非必需，自定义canvas的颜色',
      type: 'String',
      defaultValue: `hsla(${this.rand(170, 300)}, 100%, ${this.rand(50, 75)}%, 1)`,
    }];

    const AbstractConfig = [
      { title: 'AbstractBasic', subtitle: '', dataSource: AbstractSource },
    ];

    return (
      <div>
        <p className="container-header">Abstract 抽象图 Canvas</p>
        <p>抽象图背景动画</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card noHovering>
          <AbstractCanvasVisualization
            width="400" height="400"
          />
          <hr />
          <p className="sample-title">
            抽象图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">抽象的canvas图</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { AbstractCanvasVisualization } from 'deep-viz';

  // 创建虚假数据

  ReactDOM.render(
  <AbstractCanvasVisualization
    width="400" height="400"/>
  , mountNode);
            `}
            </Highlight>
          </div>
        </Card>
        {this._renderAPI(AbstractConfig)}
      </div>
    );
  }
}
