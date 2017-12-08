import React from 'react';
import { Card, Icon } from 'antd';
import _ from 'lodash';
import Highlight from 'react-highlight';
import { ScatterNet } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ScatterNetShow extends Basic {
  dealScatter(data) {
    const yList = [];
    const xList = [];
    const normal = [];
    const topData = [];

    data &&
    data.forEach((d, i) => {
      yList.push(
        `${`0${i + 1}`.substr(-2)} ${`\xa0\xa0\xa0\xa0\xa0\xa0\xa0${d.division_name}`.substr(
          -7,
        )} ${`\xa0\xa0\xa0\xa0\xa0\xa0\xa0${d.business}`.substr(-7)}`,
      );
      d.details &&
      d.details.forEach((detail, j) => {
        i === 0 && xList.push(detail.info_name || ''); // xLabel
        normal.push([j, i, detail.num || 0]);
        this.minMarketSource = Math.min(this.minMarketSource, detail.num || 0);
        this.maxMarketSource = Math.max(this.maxMarketSource, detail.num || Infinity);
      });
    });

    xList &&
    xList.forEach((x, i) => {
      const t = normal
        .filter((n) => {
          return n[0] === i;
        })
        .reduce((pre, cur) => {
          return pre[2] > cur[2] ? pre : cur;
        });
      topData.push(t);
    });
    return { x: xList, y: yList, normalData: normal, effectData: topData };
  }

  render() {
    const chartSource = [
      {
        parameter: 'style',
        description: '非必需，定义chart的宽高等样式',
        type: 'Object',
        defaultValue: "{ height: 450, width: '100%' }",
      },
      {
        parameter: 'color',
        description: '非必需，定义默认点和高亮点的颜色',
        type: 'Object',
        defaultValue: "{effect:'#108EE9', normal:'#D7D7D7'}",
      },
      {
        parameter: 'config',
        description: '必需，配置x轴、y轴的标签及数据源。',
        type: 'Object',
        defaultValue: 'null',
      },
    ];
    const configSource = [
      {
        parameter: 'x',
        description: '必需，定义x轴数据源，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'y',
        description: '必需，定义y轴数据源，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'data',
        description: '必需，定义数据源',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'minSize',
        description: '非必需，定义点的最小size',
        type: 'Number',
        defaultValue: 5,
      },
      {
        parameter: 'maxSize',
        description: '非必需，定义点的最大size',
        type: 'Number',
        defaultValue: 20,
      },
      {
        parameter: 'option',
        description: '非必需，预留接口',
        type: 'Object',
        defaultValue: '',
      },
    ];
    const xSource = [
      {
        parameter: 'name',
        description: '非必需，坐标轴名称',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'data',
        description: '非必需，定义坐标轴标签',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'type',
        description: '非必需，定义坐标轴类型',
        type: 'String',
        defaultValue: 'category',
      },
    ];
    const dataSource = [
      {
        parameter: 'type',
        description: '必需，定义点的类型目前为scatter和effectScatter两种。',
        type: 'String',
        defaultValue: '',
      },
      {
        parameter: 'typeData',
        description: '必需，定义数据源',
        type: 'Array',
        defaultValue: '',
      },
      {
        parameter: 'option',
        description: '非必需，预留接口',
        type: 'Object',
        defaultValue: '',
      },
    ];
    const tableConfig = [
      { title: 'ScatterNet', subtitle: '', dataSource: chartSource },
      { title: 'config', subtitle: '', dataSource: configSource },
      { title: 'x', subtitle: "{name:'',data:[]}", dataSource: xSource },
      { title: 'data', subtitle: '', dataSource },
    ];
    const testData = [
      {
        division_name: '成都市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
        ],
        business: 100.0,
      },
      {
        division_name: '重庆市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
        ],
        business: 94.86,
      },
      {
        division_name: '杭州市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
        ],
        business: 82.3,
      },
      {
        division_name: '武汉市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
        ],
        business: 81.18,
      },
      {
        division_name: '天津市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
        ],
        business: 78.36,
      },
      {
        division_name: '苏州市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
        ],
        business: 77.16,
      },
      {
        division_name: '南京市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
        ],
        business: 69.8,
      },
      {
        division_name: '西安市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
        ],
        business: 62.46,
      },
      {
        division_name: '青岛市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
        ],
        business: 58.75,
      },
      {
        division_name: '沈阳市',
        details: [
          {
            num: _.random(10, 100),
            info_name: '超市',
          },
          {
            num: _.random(10, 100),
            info_name: '个人护理',
          },
          {
            num: _.random(10, 100),
            info_name: '珠宝钟表',
          },
          {
            num: _.random(10, 100),
            info_name: '快时尚集合店',
          },
          {
            num: _.random(10, 100),
            info_name: '休闲餐饮',
          },
          {
            num: _.random(10, 100),
            info_name: '快餐',
          },
        ],
        business: 55.68,
      },
    ];
    const data = this.dealScatter(testData);
    return (
      <div>
        <p className="container-header">ScatterNet 网格散点图</p>
        <p>每一个网格中的散点直径大小代表此坐标系上的value，高亮动画的散点代表每一列的最大值。</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <ScatterNet
            config={{
              x: { data: data.x, position: 'top', axisLine: { show: false } },
              y: { data: data.y, inverse: true },
              data: [
                { type: 'normal', typeData: data.normalData },
                { type: 'effect', typeData: data.effectData },
              ],
            }}
          />
          <hr />
          <p className="sample-title">
            网格散点图
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">尺寸可调整，坐标轴可做出复杂label</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {` import {ScatterNet} from 'deep-viz';
  const testData = [
    {
      division_name: '成都市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
      ],
      business: 100.0,
    },
    {
      division_name: '重庆市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
      ],
      business: 94.86,
    },
    {
      division_name: '杭州市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
      ],
      business: 82.3,
    },
    {
      division_name: '武汉市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
      ],
      business: 81.18,
    },
    {
      division_name: '天津市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
      ],
      business: 78.36,
    },
    {
      division_name: '苏州市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
      ],
      business: 77.16,
    },
    {
      division_name: '南京市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
      ],
      business: 69.8,
    },
    {
      division_name: '西安市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
      ],
      business: 62.46,
    },
    {
      division_name: '青岛市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
      ],
      business: 58.75,
    },
    {
      division_name: '沈阳市',
      details: [
        {
          num: _.random(10, 100),
          info_name: '超市',
        },
        {
          num: _.random(10, 100),
          info_name: '个人护理',
        },
        {
          num: _.random(10, 100),
          info_name: '珠宝钟表',
        },
        {
          num: _.random(10, 100),
          info_name: '快时尚集合店',
        },
        {
          num: _.random(10, 100),
          info_name: '休闲餐饮',
        },
        {
          num: _.random(10, 100),
          info_name: '快餐',
        },
      ],
      business: 55.68,
    },
  ];
const data = this.dealScatter(testData);
ReactDOM.render(
<ScatterNet config={{
  x: { data: data.x, position: 'top', axisLine: { show: false } },
  y: { data: data.y, inverse: true },
  data: [
    { type: 'normal', typeData: data.normalData },
    { type: 'effect', typeData: data.effectData },
  ],
}} />
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
