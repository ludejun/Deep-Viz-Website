import React from 'react';
import { Card, Icon, Radio } from 'antd';
import Highlight from 'react-highlight';
import { PieChart } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class PieChartShow extends Basic {
  constructor(props) {
    super(props);
    this.state = {
      roseType: null,
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange(e) {
    this.setState({
      roseType: e.target.value,
    });
  }

  render() {
    const pieData = [];
    const nameList = ['白领', '大学生', '中小学生', '蓝领', '领导', '其他职业'];
    for (let i = 5; i >= 0; i--) {
      pieData.push({ value: (i + 10) * (i + 1), name: nameList[i] });
    }
    const chartSource = [{
      parameter: 'color',
      description: '非必需，自定义折线的颜色数组，按顺序取色',
      type: 'Array',
      defaultValue: '同LineChart.color',
    }, {
      parameter: 'config',
      description: '必需，配置饼图的数据源等，详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'style',
      description: '非必需，设置Chart的宽高等，一般格式{ height: 高度, width: 宽度 }',
      type: 'Object',
      defaultValue: '{ height: 250, width: \'100%\' }',
    }, {
      parameter: 'onTooltipFormat',
      description: '非必需，自定义提示框浮层内容及样式，传递给父组件，参数有params，具体可参考LineChart示例代码或Echarts.tooltip.formatter',
      type: 'Function',
      defaultValue: 'null',
    }, {
      parameter: 'onEvents',
      description: '非必需，所有的事件交互回调集合，可参考LineChart示例代码；一般为点击事件，参数为params及echart实例；事件类型可参考Echarts.events',
      type: 'Object',
      defaultValue: 'null',
    }];
    const configSource = [{
      parameter: 'data',
      description: '必需，定义饼图数据源，详见下面Table',
      type: 'Array',
      defaultValue: 'null',
    }, {
      parameter: 'legend',
      description: '非必需，定义图例的位置、方向；方向默认水平，位置默认底部居中；当方向为垂直时，位置默认右边；详见下面Table',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'title',
      description: '非必需，设置Chart的标题，当有title时，legend会放在右边；推荐在组件外写title',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'subtitle',
      description: '非必需，设置Chart的副标题，当有title时，legend会放在右边；推荐在组件外写subtitle',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'concentric',
      description: '非必需，是否中空，并可自定义内外圈半径；当不为null时，默认内外圈半径为50%-70%',
      type: 'Object',
      defaultValue: 'null | { innerRadius: \'50%\', outerRadius: \'70%\' }',
    }, {
      parameter: 'roseType',
      description: '非必需，是否为玫瑰饼图，并可切换两种形式radius、area；差异可参考示例代码',
      type: 'Boolean/String',
      defaultValue: 'false',
    }, {
      parameter: 'toolbox',
      description: '非必需，是否显示工具箱',
      type: 'Boolean',
      defaultValue: 'false',
    }];
    const dataSource = [{
      parameter: 'value',
      description: '必需，定义各项的数值，不需要加起来为100，会根据数值自行计算比例',
      type: 'Number',
      defaultValue: 'null',
    }, {
      parameter: 'name',
      description: '非必需，定义各项的名称，legend.data也来源于此',
      type: 'String',
      defaultValue: 'null',
    }];
    const legendSource = [{
      parameter: 'position',
      description: '非必需，定义图例的位置，以左上角为原点，自定义x、y的值，可以为绝对数字，也可为百分比字符串，' +
      '还可从top、middle、bottom|left、center、right字符串中取值；当不定义时，默认值如上表所述',
      type: 'Object',
      defaultValue: 'null',
    }, {
      parameter: 'orient',
      description: '非必需，定义图例的方向，可取值horizontal、vertical字符串，默认水平',
      type: 'String',
      defaultValue: 'null | \'horizontal\'',
    }];
    const tableConfig = [
      { title: 'PieChart', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      {
        title: 'data: [{value: , name: ""}...]',
        subtitle: 'config.data是一个定义各项饼状数据的数组，每个数组元素是一个Object，以下为每个Object的API',
        dataSource,
      },
      { title: 'legend: {position: {x:, y: }, orient: ""}', subtitle: '', dataSource: legendSource },
    ];
    return (
      <div>
        <p className="container-header">PieChart 多样饼图</p>
        <p>基础饼图、空心饼图、两种形式的南丁格尔饼图可以使用本组件；数据大小推荐从大到小顺序排列</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <PieChart
            config={{ data: pieData }}
          />
          <hr />
          <p className="sample-title">
            基本饼图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">默认颜色，基本饼图只要配上数据即可</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { PieChart } from 'deep-viz';

// 创建虚假数据
const nameList = ['白领', '大学生', '中小学生', '蓝领', '领导', '其他职业'];
for (let i = 5; i >= 0; i--) {
  pieData.push({ value: (i + 10) * (i + 1), name: nameList[i] });
}

ReactDOM.render(
  <PieChart
    config={{ data: pieData }}
  />
, mountNode);
            `}
            </Highlight>
          </div>
        </Card>

        <Card>
          <PieChart
            color={['#BF4544', '#E96A69', '#FCACAB']}
            config={{
              data: [{ name: '未婚', value: 45 }, { name: '已婚已育', value: 30 }, { name: '已婚未育', value: 25 }],
              concentric: {},
            }}
          />
          <hr />
          <p className="sample-title">
            空心饼图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">自定义同一色系更好看，默认中空半径配置</p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { PieChart } from 'deep-viz';

ReactDOM.render(
  <PieChart
    color={['#E96A69','#FCACAB','#BF4544']}
    config={{
      data: [{ name: '未婚', value: 45 }, { name: '已婚已育', value: 30 }, { name: '已婚未育', value: 25 }],
      concentric: {},
    }}
  />
, mountNode);`}
            </Highlight>
          </div>
        </Card>

        <Card>
          选择roseType：
          <Radio.Group onChange={this.onRadioChange}>
            <Radio.Button value="radius">radius</Radio.Button>
            <Radio.Button value="area">area</Radio.Button>
          </Radio.Group>
          <PieChart
            config={{
              data: pieData,
              roseType: this.state.roseType || true,
              legend: { position: { x: 'right', y: 40 }, orient: 'vertical' },
              toolbox: true,
            }}
          />
          <hr />
          <p className="sample-title">
            南丁格尔玫瑰饼图
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <p className="sample-desc">默认配色，可以选择两种roseType看看差异（area的每项圆心角一样，只有半径随数据变化；而radius是两者皆变）；
            显示图例在自定义的位置上，默认水平底部居中，图例可以点击；显示工具箱
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">{
              `import { PieChart } from 'deep-viz';

// 创建虚假数据
const pieData = [];
const nameList = ['白领', '大学生', '中小学生', '蓝领', '领导', '其他职业'];
for (let i = 5; i >= 0; i--) {
  pieData.push({ value: (i + 10) * (i + 1), name: nameList[i] });
}

// this.state.roseType in ['radius', 'area']
ReactDOM.render(
  <PieChart
    config={{
      data: pieData,
      roseType: this.state.roseType || true,
      legend: { position: { x: 'right', y: 40 }, orient: 'vertical' },
      toolbox: true,
    }}
  />
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
