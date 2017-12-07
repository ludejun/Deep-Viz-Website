import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { GaugePan } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class GaugePans extends Basic {
  constructor(props) {
    super(props);
    this.state = { number: 45 };
  }

  componentDidMount() {
    this.setInter();
  }

  setInter = () => {
    this.timeids = setTimeout(this.changeValue, 3000);
  };
  changeValue = () => {
    clearTimeout(this.timeid);
    const number = Math.floor(6 + Math.random() * 240);
    this.setState({ number });
    this.timeid = setTimeout(this.changeValue, 3000);
  };

  componentWillUnmount() {
    clearTimeout(this.timeid);
    clearTimeout(this.timeids);
  }

  render() {
    const Source = [{
      parameter: 'number',
      description: '必需，定义仪表盘当前刻度值',
      type: 'Number',
      defaultValue: '0',
    }, {
      parameter: 'startNumber',
      description: '非必需，定义仪表盘刻度值的初始值',
      type: 'Number',
      defaultValue: '0',
    }, {
      parameter: 'numberInterval',
      description: '非必需，定义仪表盘刻度值之间的间隔大小',
      type: 'Number',
      defaultValue: '20',
    }, {
      parameter: 'unit',
      description: '非必需，定义仪表盘刻度值的单位',
      type: 'String',
      defaultValue: 'Km／h',
    }, {
      parameter: 'displayLable',
      description: '非必需，定义仪表盘刻两侧label',
      type: 'Bool',
      defaultValue: 'false',
    }, {
      parameter: 'leftLabel',
      description: '非必需，定义仪表盘左侧label',
      type: 'String',
      defaultValue: '男',
    }, {
      parameter: 'rightLabel',
      description: '非必需，定义仪表盘右侧label',
      type: 'String',
      defaultValue: '女',
    }];
    const tableConfig = [
      { title: 'Gauge', subtitle: '', dataSource: Source },
    ];
    return (
      <div>
        <p className="container-header">仪表盘</p>
        <p>该组件可以根据传入的刻度范围、单位、当前刻度值来实现仪表盘的指示作用</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <div style={{ height: 400 }}>
            <GaugePan number={this.state.number} startNumber={6} numberInterval={20} unit={'km/h'} />
          </div>
          <div style={{ height: 400 }}>
            <GaugePan displayLable leftLabel={'男'} rightLabel={'女'} number={this.state.number} startNumber={6} numberInterval={20} unit={'个'} />
          </div>
          <hr />
          <p className="sample-title">
            自定义刻度范围，自定义刻度单位
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { GaugePan } from 'deep-viz';

ReactDOM.render(
  <GaugePan number={this.state.number} startNumber={6} numberInterval={20} unit={'km/h'} />
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
//
// GaugePans.PropTypes = {
//   option: PropTypes.object,
// };
