import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { ScratchOff } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class GaugePan extends Basic {

  componentDidMount() {
  }

  render() {
    const Source = [{
      parameter: 'width',
      description: '非必需，刮奖卡的宽度',
      type: 'Number',
      defaultValue: '500',
    }, {
      parameter: 'height',
      description: '非必需，刮奖卡的高度',
      type: 'Number',
      defaultValue: '300',
    }, {
      parameter: 'background',
      description: '必需，定义刮奖卡的背景图片',
      type: 'String',
      defaultValue: '',
    }, {
      parameter: 'scratchPosition',
      description: '必需，定义刮奖区域的位置与大小',
      type: 'Object',
      defaultValue: '',
    }, {
      parameter: 'textContent',
      description: '必需，定义刮奖卡大中奖内容',
      type: 'String',
      defaultValue: '',
    }, {
      parameter: 'textColor',
      description: '非必需，定义刮奖卡大中奖内容文字颜色',
      type: 'Color',
      defaultValue: 'black',
    }];
    const TSource = [{
      parameter: 'offsetX',
      description: '非必需，刮奖卡刮奖区域x偏移',
      type: 'Number',
      defaultValue: '右下角',
    }, {
      parameter: 'offsetY',
      description: '非必需，刮奖卡刮奖区域y偏移',
      type: 'Number',
      defaultValue: '右下角',
    }, {
      parameter: 'width',
      description: '非必需，刮奖卡刮奖区域宽度',
      type: 'Number',
      defaultValue: '200',
    }, {
      parameter: 'height',
      description: '非必需，刮奖卡刮奖区域长度',
      type: 'Number',
      defaultValue: '100',
    }];
    const tableConfig = [
      { title: 'ScratchOff', subtitle: '', dataSource: Source },
      { title: 'scratchPosition', subtitle: '', dataSource: TSource },
    ];
    return (
      <div>
        <p className="container-header">刮奖卡</p>
        <p>该组件可以自定义刮奖背景、中奖内容、刮奖区域的位置</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <div style={{ height: 350 }}>
            <ScratchOff
              width={500}
              height={300}
              background={require('../Image/scratch.png')}
              scratchPosition={{ width: 200, height: 50 }}
              textContent={'保时捷一辆'}
              textColor={'red'}
            />
          </div>
          <hr />
          <p className="sample-title">
            刮奖卡
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { ScratchOff } from 'deep-viz';

ReactDOM.render(
    <ScratchOff
    width={500}
    height={300}
    background={require('../Image/scratch.png')}
    scratchPosition={{ width: 200, height: 50 }}
    textContent={'保时捷一辆'}
    textColor={'red'}
  />
, mountNode);`}
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
