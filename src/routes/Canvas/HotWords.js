import React from 'react';
import { Icon, Card } from 'antd';
import Highlight from 'react-highlight';
import { HotWords } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class HotWordsC extends Basic {

  render() {
    const Source = [{
      parameter: 'words',
      description: '非必需，定义需要展示的热词数组',
      type: 'Array',
      defaultValue: '[]',
    }, {
      parameter: 'speed',
      description: '非必需，定义热词运动的速度',
      type: 'Number',
      defaultValue: '3',
    }, {
      parameter: 'circleOutline',
      description: '非必需，定义热词容器的形状是否为圆形',
      type: 'Boolean',
      defaultValue: 'false',
    }];
    const tableConfig = [
      { title: 'HotWords', subtitle: '', dataSource: Source },
    ];
    const words = [
      '10年谈心3268次',
      '遛螃哥',
      '杜汶泽瘦身',
      '安倍名字被写错',
      '金色iPhone受欢迎',
      '王菲离婚后全面复出',
      '朱莉还有3年生命',
      '五姐妹集体自杀',
      '上海地铁进食罚',
      '美女怒抽猥琐男',
      '怒吼马英九',
      '台风“天兔”',
      '民政部回应以房养老',
      '王菲李亚鹏过中秋',
      '高档餐厅中秋宴遇冷',
      '举报富人名人超生',
      '连战赴湖北谒祖',
      '无准生证看病被拒',
      '最美抗癌女孩离世',
    ];
    return (
      <div>
        <p className="container-header">HotWords 热词</p>
        <p>该组件可以根据传入的热词数组进行动画展示</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card noHovering>
          <div style={{ height: 500, marginBottom: 20 }}>
            <HotWords words={words} />
          </div>
          <hr />
          <p className="sample-title">
          定义热词展示动画
            <Icon
              type="arrows-alt"
              title="Show me the code"
              onClick={this.onCodeToggleClick}
            />
          </p>
          <div className="code-container">
            <Highlight className="JavaScript">
              <div style={{ whiteSpace: 'pre' }}>
                {`import { HotWords } from 'deep-viz';
const words = [
  '10年谈心3268次',
  '遛螃哥',
  '杜汶泽瘦身',
  '安倍名字被写错',
  '金色iPhone受欢迎',
  '王菲离婚后全面复出',
  '朱莉还有3年生命',
  '五姐妹集体自杀',
  '上海地铁进食罚',
  '美女怒抽猥琐男',
  '怒吼马英九',
  '台风“天兔”',
  '民政部回应以房养老',
  '王菲李亚鹏过中秋',
  '高档餐厅中秋宴遇冷',
  '举报富人名人超生',
  '连战赴湖北谒祖',
  '无准生证看病被拒',
  '最美抗癌女孩离世',
];
ReactDOM.render(
  <HotWords words={words} />
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

