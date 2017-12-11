import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { DataScatter } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class DataScatterShow extends Basic {

  render() {
    const Source = [{
      parameter: 'items',
      description: '必需，定义需要数据数组',
      type: 'Array',
      defaultValue: '[]',
    }, {
      parameter: 'col',
      description: '非必需，定义数据格列数',
      type: 'Number',
      defaultValue: '1',
    }, {
      parameter: 'row',
      description: '非必需，定义数据格行数',
      type: 'Number',
      defaultValue: '1',
    }];
    const tableConfig = [
      { title: 'DataScatter', subtitle: '', dataSource: Source },
    ];
    const sub = [
      {
        title: '50个百度用户',
        num: 50,
        color: 'red',
      },
      {
        title: '90个爱奇艺用户',
        num: 90,
        color: 'yellows',
      },
      {
        title: '200个腾讯用户',
        num: 200,
        color: 'blue',
      },
      {
        title: '8个新浪用户',
        num: 8,
        color: 'blue',
      }, {
        title: '20个360用户',
        num: 20,
        color: 'blue',
      }, {
        title: '70个网易用户',
        num: 70,
        color: 'red',
      },
    ];
    return (
      <div>
        <p className="container-header">DataScatter 数据散点动画格</p>
        <p>该组件可以根据传入的数据数组进行散点动画展示，散点多少为数据大小，并可自定义行列数进行展示</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card noHovering>
          <div style={{ height: 500, marginBottom: 20 }}>
            <DataScatter items={sub} col={3} row={1} />
          </div>
          <hr />
          <p className="sample-title">
            定义一行三列列数据散点动画图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { DataScatter } from 'deep-viz';
const sub = [
  {
    title: '50个百度用户',
    num: 50,
    color: 'red',
  },
  {
    title: '90个爱奇艺用户',
    num: 90,
    color: 'yellows',
  },
  {
    title: '200个腾讯用户',
    num: 200,
    color: 'blue',
  }
];
ReactDOM.render(
  <DataScatter items={sub} col={3} row={1} />
, mountNode);`}
              </div>
            </Highlight>
          </div>
        </Card>
        <Card noHovering>
          <div style={{ height: 500, marginBottom: 20 }}>
            <DataScatter items={sub} col={2} row={2} />
          </div>
          <hr />
          <p className="sample-title">
            定义两行两列数据散点动画图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { DataScatter } from 'deep-viz';
const sub = [
  {
    title: '50个百度用户',
    num: 50,
    color: 'red',
  },
  {
    title: '90个爱奇艺用户',
    num: 90,
    color: 'yellows',
  },
  {
    title: '200个腾讯用户',
    num: 200,
    color: 'blue',
  },
  {
    title: '8个新浪用户',
    num: 8,
    color: 'blue',
  }
];
ReactDOM.render(
  <DataScatter items={sub} col={2} row={2} />
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

