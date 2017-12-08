import React from 'react';
import { Card, Icon } from 'antd';
import Highlight from 'react-highlight';
import _ from 'lodash';
import { ShadeMapScatter } from '../../components/src';
import Basic from '../Layout/WDBasic';

export default class ShadeMapScatterShow extends Basic {
  onTooltipFormat(params) {
    const tips = `<div class='tooltip-sample'>
      ${params.seriesName}<br>${params.name} : ${params.data.value === undefined ? '-' : params.data.value}</div>
    `;
    return tips;
  }
  onScatterClick() {
    console.log('hello Gundam');
  }
  render() {
    const geoCoordMap = {
      海门: [121.15, 31.89],
      鄂尔多斯: [109.781327, 39.608266],
      招远: [120.38, 37.35],
      舟山: [122.207216, 29.985295],
      齐齐哈尔: [123.97, 47.33],
      盐城: [120.13, 33.38],
      赤峰: [118.87, 42.28],
      青岛: [120.33, 36.07],
      乳山: [121.52, 36.89],
      金昌: [102.188043, 38.520089],
      泉州: [118.58, 24.93],
      莱西: [120.53, 36.86],
      日照: [119.46, 35.42],
      胶南: [119.97, 35.88],
      南通: [121.05, 32.08],
      拉萨: [91.11, 29.97],
      云浮: [112.02, 22.93],
      梅州: [116.1, 24.55],
      文登: [122.05, 37.2],
      上海: [121.48, 31.22],
      攀枝花: [101.718637, 26.582347],
      威海: [122.1, 37.5],
      承德: [117.93, 40.97],
      厦门: [118.1, 24.46],
      汕尾: [115.375279, 22.786211],
      潮州: [116.63, 23.68],
      丹东: [124.37, 40.13],
      太仓: [121.1, 31.45],
      曲靖: [103.79, 25.51],
      烟台: [121.39, 37.52],
      福州: [119.3, 26.08],
      瓦房店: [121.979603, 39.627114],
      即墨: [120.45, 36.38],
      抚顺: [123.97, 41.97],
      玉溪: [102.52, 24.35],
      张家口: [114.87, 40.82],
      阳泉: [113.57, 37.85],
      莱州: [119.942327, 37.177017],
      湖州: [120.1, 30.86],
      汕头: [116.69, 23.39],
      昆山: [120.95, 31.39],
      宁波: [121.56, 29.86],
      湛江: [110.359377, 21.270708],
      揭阳: [116.35, 23.55],
      荣成: [122.41, 37.16],
      连云港: [119.16, 34.59],
      葫芦岛: [120.836932, 40.711052],
      常熟: [120.74, 31.64],
      东莞: [113.75, 23.04],
      河源: [114.68, 23.73],
      淮安: [119.15, 33.5],
      泰州: [119.9, 32.49],
      南宁: [108.33, 22.84],
      营口: [122.18, 40.65],
      惠州: [114.4, 23.09],
      江阴: [120.26, 31.91],
      蓬莱: [120.75, 37.8],
      韶关: [113.62, 24.84],
      嘉峪关: [98.289152, 39.77313],
      广州: [113.23, 23.16],
      延安: [109.47, 36.6],
      太原: [112.53, 37.87],
      清远: [113.01, 23.7],
      中山: [113.38, 22.52],
      昆明: [102.73, 25.04],
      寿光: [118.73, 36.86],
      盘锦: [122.070714, 41.119997],
      长治: [113.08, 36.18],
      深圳: [114.07, 22.62],
      珠海: [113.52, 22.3],
      宿迁: [118.3, 33.96],
      咸阳: [108.72, 34.36],
      铜川: [109.11, 35.09],
      平度: [119.97, 36.77],
      佛山: [113.11, 23.05],
      海口: [110.35, 20.02],
      江门: [113.06, 22.61],
      章丘: [117.53, 36.72],
      肇庆: [112.44, 23.05],
      大连: [121.62, 38.92],
      临汾: [111.5, 36.08],
      吴江: [120.63, 31.16],
      石嘴山: [106.39, 39.04],
      沈阳: [123.38, 41.8],
      苏州: [120.62, 31.32],
      茂名: [110.88, 21.68],
      嘉兴: [120.76, 30.77],
      长春: [125.35, 43.88],
      胶州: [120.03336, 36.264622],
      银川: [106.27, 38.47],
      张家港: [120.555821, 31.875428],
      三门峡: [111.19, 34.76],
      锦州: [121.15, 41.13],
      南昌: [115.89, 28.68],
      柳州: [109.4, 24.33],
      三亚: [109.511909, 18.252847],
      自贡: [104.778442, 29.33903],
      吉林: [126.57, 43.87],
      阳江: [111.95, 21.85],
      泸州: [105.39, 28.91],
      西宁: [101.74, 36.56],
      宜宾: [104.56, 29.77],
      呼和浩特: [111.65, 40.82],
      成都: [104.06, 30.67],
      大同: [113.3, 40.12],
      镇江: [119.44, 32.2],
      桂林: [110.28, 25.29],
      张家界: [110.479191, 29.117096],
      宜兴: [119.82, 31.36],
      北海: [109.12, 21.49],
      西安: [108.95, 34.27],
      金坛: [119.56, 31.74],
      东营: [118.49, 37.46],
      牡丹江: [129.58, 44.6],
      遵义: [106.9, 27.7],
      绍兴: [120.58, 30.01],
      扬州: [119.42, 32.39],
      常州: [119.95, 31.79],
      潍坊: [119.1, 36.62],
      重庆: [106.54, 29.59],
      台州: [121.420757, 28.656386],
      南京: [118.78, 32.04],
      滨州: [118.03, 37.36],
      贵阳: [106.71, 26.57],
      无锡: [120.29, 31.59],
      本溪: [123.73, 41.3],
      克拉玛依: [84.77, 45.59],
      渭南: [109.5, 34.52],
      马鞍山: [118.48, 31.56],
      宝鸡: [107.15, 34.38],
      焦作: [113.21, 35.24],
      句容: [119.16, 31.95],
      北京: [116.46, 39.92],
      徐州: [117.2, 34.26],
      衡水: [115.72, 37.72],
      包头: [110, 40.58],
      绵阳: [104.73, 31.48],
      乌鲁木齐: [87.68, 43.77],
      枣庄: [117.57, 34.86],
      杭州: [120.19, 30.26],
      淄博: [118.05, 36.78],
      鞍山: [122.85, 41.12],
      溧阳: [119.48, 31.43],
      库尔勒: [86.06, 41.68],
      安阳: [114.35, 36.1],
      开封: [114.35, 34.79],
      济南: [117, 36.65],
      德阳: [104.37, 31.13],
      温州: [120.65, 28.01],
      九江: [115.97, 29.71],
      邯郸: [114.47, 36.6],
      临安: [119.72, 30.23],
      兰州: [103.73, 36.03],
      沧州: [116.83, 38.33],
      临沂: [118.35, 35.05],
      南充: [106.110698, 30.837793],
      天津: [117.2, 39.13],
      富阳: [119.95, 30.07],
      泰安: [117.13, 36.18],
      诸暨: [120.23, 29.71],
      郑州: [113.65, 34.76],
      哈尔滨: [126.63, 45.75],
      聊城: [115.97, 36.45],
      芜湖: [118.38, 31.33],
      唐山: [118.02, 39.63],
      平顶山: [113.29, 33.75],
      邢台: [114.48, 37.05],
      德州: [116.29, 37.45],
      济宁: [116.59, 35.38],
      荆州: [112.239741, 30.335165],
      宜昌: [111.3, 30.7],
      义乌: [120.06, 29.32],
      丽水: [119.92, 28.45],
      洛阳: [112.44, 34.7],
      秦皇岛: [119.57, 39.95],
      株洲: [113.16, 27.83],
      石家庄: [114.48, 38.03],
      莱芜: [117.67, 36.19],
      常德: [111.69, 29.05],
      保定: [115.48, 38.85],
      湘潭: [112.91, 27.87],
      金华: [119.64, 29.12],
      岳阳: [113.09, 29.37],
      长沙: [113, 28.21],
      衢州: [118.88, 28.97],
      廊坊: [116.7, 39.53],
      菏泽: [115.480656, 35.23375],
      合肥: [117.27, 31.86],
      武汉: [114.31, 30.52],
      大庆: [125.03, 46.58],
    };
    const data1 = [{ name: '海门', value: 9 }, { name: '鄂尔多斯', value: 12 }, { name: '招远', value: 12 }, { name: '舟山', value: 12 }, { name: '齐齐哈尔', value: 14 }, { name: '盐城', value: 15 }, { name: '赤峰', value: 16 }, { name: '青岛', value: 18 }];
    const data2 = [{ name: '乳山', value: 18 }, { name: '金昌', value: 19 }, { name: '泉州', value: 21 }, { name: '莱西', value: 21 }, { name: '日照', value: 21 }, { name: '胶南', value: 22 }, { name: '南通', value: 23 }, { name: '拉萨', value: 24 }, { name: '云浮', value: 24 }];
    const data3 = [{ name: '阳泉', value: 31 }, { name: '莱州', value: 32 }, { name: '湖州', value: 32 }, { name: '汕头', value: 32 }, { name: '昆山', value: 33 }, { name: '宁波', value: 33 }, { name: '湛江', value: 33 }, { name: '揭阳', value: 34 }];
    function randomValue() {
      return _.random(0, 100);
    }
    const data4 = [
      { name: '北京', value: randomValue() },
      { name: '天津', value: randomValue() },
      { name: '上海', value: randomValue() },
      { name: '重庆', value: randomValue() },
      { name: '河北', value: randomValue() },
      { name: '河南', value: randomValue() },
      { name: '云南', value: randomValue() },
      { name: '辽宁', value: randomValue() },
      { name: '黑龙江', value: randomValue() },
      { name: '湖南', value: randomValue() },
      { name: '安徽', value: randomValue() },
      { name: '山东', value: randomValue() },
      { name: '新疆', value: randomValue() },
      { name: '江苏', value: randomValue() },
      { name: '浙江', value: randomValue() },
      { name: '江西', value: randomValue() },
      { name: '湖北', value: randomValue() },
      { name: '广西', value: randomValue() },
    ];
    const shadeMapScatterSource = [
      {
        parameter: 'dataConfig',
        description: '必需，配置组件的数据和样式等，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'geoCoordMap',
        description: '必需，配置组件的所需的地点经纬度，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'mapConfig',
        description: '非必需，配置组件的样式，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'style',
        description: '非必需，设置组件的宽高等，一般格式{ height: 高度, width: 宽度 }',
        type: 'Object',
        defaultValue: "{ height: 250, width: '100%' }",
      },
      {
        parameter: 'onEvents',
        description: '非必需，所有的事件交互回调集合，可参考示例代码；一般为点击事件，参数为params及echart实例；事件类型可参考Echarts.events',
        type: 'Object',
        defaultValue: 'null',
      },
    ];
    const dataArrSource = [
      {
        parameter: 'name',
        description: '必需，，数据地点名称',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'value',
        description: '必需，，地点对应的数据值',
        type: 'Number',
        defaultValue: 'null',
      },
    ];
    const mapSource = [
      {
        parameter: 'areaColor',
        description: '非必需，自定义地图区域（省份）的填充色',
        type: 'String',
        defaultValue: '#f3f3f3',
      },
      {
        parameter: 'hoverColor',
        description: '非必需，鼠标浮上地图区域（省份）的颜色',
        type: 'String',
        defaultValue: 'rgba(243,243,243,0.5)',
      },
      {
        parameter: 'borderWidth',
        description: '非必需，自定义地图区域（省份）的边框粗细',
        type: 'Number',
        defaultValue: '1',
      },
      {
        parameter: 'borderColor',
        description: '非必需，自定义地图区域（省份）的边框色',
        type: 'String',
        defaultValue: '#C0B796',
      },
    ];
    const dataCfgSource = [
      {
        parameter: 'scatterOptions',
        description: '必需，组件中scatter配置选项，详见下面Table',
        type: 'Array',
        defaultValue: 'null',
      },
      {
        parameter: 'shadeOptions',
        description: '必需，组件shadeMap配置选项，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'title',
        description: '非必需，组件title选项，详见下面Table',
        type: 'Object',
        defaultValue: 'null',
      },
    ];
    const geoCoordMapSource = [
      {
        parameter: '地点名称',
        description: '必需，地点名称,如"上海"',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: '经纬度',
        description: '必需，，地点对应的经纬度，如[121.48, 31.22]',
        type: 'Array',
        defaultValue: 'null',
      },
    ];
    const scatterOptionsSource = [
      {
        parameter: 'name',
        description: '必需，系列名称，用于tooltip的显示，legend 的图例筛选',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'type',
        description: '必需，scatter类型，用于显示scatter的显示效果，可选择scatter和effectScatter',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'symbol',
        description: '非必需，设置symbol的形状，可选值有"circle", "triangle", "pin"',
        type: 'String',
        defaultValue: 'circle',
      },
      {
        parameter: 'color',
        description: '非必需，设置symbol的颜色',
        type: 'String',
        defaultValue: '红色',
      },
      {
        parameter: 'data',
        description: '必需，数据源',
        type: 'Array',
        defaultValue: 'null',
      },
    ];
    const shadeOptionsSource = [
      {
        parameter: 'visualMap',
        description: '非必需，设置可视化组件',
        type: 'Object',
        defaultValue: 'null',
      },
      {
        parameter: 'shadeData',
        description: '必需，数据源',
        type: 'Array',
        defaultValue: 'null',
      },
    ];
    const visualConfigSource = [{
      parameter: 'min',
      description: '非必需，设置颜色范围的最小值',
      type: 'Number',
      defaultValue: '0',
    }, {
      parameter: 'max',
      description: '非必需，设置颜色范围的最大值',
      type: 'Number',
      defaultValue: '100',
    }, {
      parameter: 'left',
      description: '非必需，设置可视化组件的水平位置',
      type: 'String',
      defaultValue: 'left',
    }, {
      parameter: 'top',
      description: '非必需，设置可视化组件的垂直位置',
      type: 'String',
      defaultValue: 'bottom',
    }, {
      parameter: 'text',
      description: '非必需，设置文本的内容',
      type: 'Array',
      defaultValue: '["高", "低"],',
    }, {
      parameter: 'calculable',
      description: '非必需，是否可以拖拽',
      type: 'Boolean',
      defaultValue: 'true',
    }, {
      parameter: 'inRange',
      description: '非必需，设置地图过渡的颜色',
      type: 'Object',
      defaultValue: '{color: ["e0ffff", "#006edd"]}',
    }];
    const proviceConfigSource = [{
      parameter: 'name',
      description: '必需，要显示省份的名字',
      type: 'String',
      defaultValue: 'null',
    }, {
      parameter: 'value',
      description: '必需，要显示省份的范围',
      type: 'String',
      defaultValue: 'null',
    }];
    const titleSource = [
      {
        parameter: 'text',
        description: '必需，标题名',
        type: 'String',
        defaultValue: 'null',
      },
      {
        parameter: 'subtitle',
        description: '非必需，副标题名',
        type: 'String',
        defaultValue: 'null',
      },
    ];
    const tableConfig = [
      { title: 'ShadeMapScatter', subtitle: '', dataSource: shadeMapScatterSource },
      { title: 'mapConfig', subtitle: '', dataSource: mapSource },
      { title: 'dataConfig', subtitle: '', dataSource: dataCfgSource },
      { title: 'scatterOptions', subtitle: '', dataSource: scatterOptionsSource },
      { title: 'shadeOptions', subtitle: '', dataSource: shadeOptionsSource },
      { title: 'visualMapConfig', subtitle: '', dataSource: visualConfigSource },
      { title: 'provice', subtitle: '', dataSource: proviceConfigSource },
      { title: 'title', subtitle: '', dataSource: titleSource },
      { title: 'data[{name:"上海",value:100},...]', subtitle: '', dataSource: dataArrSource },
      { title: 'geoCoordMap{"上海":[121.48, 31.22],...}', subtitle: '', dataSource: geoCoordMapSource },
    ];
    return (
      <div>
        <p className="container-header">ShadeMapScatter 区域阴影散点地图</p>
        <p>前面两个组件的复合，不仅可在地图上绘制不同颜色、不同大小的pointer、scatter，
          而且地图的区域（省份）颜色可通过value值大小而不同。每组数据可以拥有不同样式的scatter，每组数据可以通过legend点击显示或消失。</p>
        <p className="container-title">代码示例</p>
        <p>点Title右侧箭头查看代码</p>
        <Card>
          <ShadeMapScatter
            geoCoordMap={geoCoordMap}
            dataConfig={{
              scatterOptions: [
                {
                  name: 'No2',
                  type: 'effectScatter',
                  symbol: 'circle',
                  color: 'red',
                  data: data1,
                },
                {
                  type: 'scatter',
                  name: 'pm 2.5',
                  symbol: 'circle',
                  color: 'orange',
                  data: data2,
                },
                {
                  type: 'scatter',
                  name: 'co2',
                  symbol: 'circle',
                  color: 'blue',
                  data: data3,
                },
              ],
              shadeOptions: {
                province: data4,
                visualMap: {},
              },
            }}
            style={{ height: 450, width: '100%' }}
            onTooltipFormat={this.onTooltipFormat}
          />
          <hr />
          <p className="sample-title">
            <Icon type="arrows-alt" title="Show me the code" onClick={this.onCodeToggleClick} />
          </p>
          <p className="sample-desc">scatter、区域颜色可调，scatter形状颜色可改变，地图的区域（省份）颜色可通过value值大小而不同</p>
          <div className="code-container">
            <Highlight className="JavaScript">
              {`import { ShadeMapScatter } from 'deep-viz';
import _ from 'lodash';

// 创建虚假数据
const geoCoordMap = {"海门": [121.15, 31.89],"鄂尔多斯": [109.781327, 39.608266],"招远": [120.38, 37.35],...};
const data1 = [{name: "阳泉", value: 31}, {name: "莱州", value: 32},];
const data2 = [{ name: '海门', value: 9 }, { name: '鄂尔多斯', value: 12 },];
const data3 = [{ name: '齐齐哈尔', value: 14 }, { name: '盐城', value: 15 }];
function randomValue() {
  return _.random(0, 100);
}
const data4 = [
  { name: '北京', value: randomValue() },
  { name: '天津', value: randomValue() },
  ...
]
ReactDOM.render(
  <ShadeMapScatter
    geoCoordMap={geoCoordMap}
    dataConfig={{
      scatterOptions: [
        {
          name: 'No2',
          type: 'effectScatter',
          symbol: 'circle',
          color: 'red',
          data: data1,
        },
        {
          type: 'scatter',
          name: 'pm 2.5',
          symbol: 'circle',
          color: 'orange',
          data: data2,
        },
        {
          type: 'scatter',
          name: 'co2',
          symbol: 'circle',
          color: 'blue',
          data: data3,
        },
      ],
      shadeOptions: {
        province: data4,
        visualMap: {},
      },
    }}
    style={{ height: 450, width: '100%' }}
    onTooltipFormat={this.onTooltipFormat}
    onEvents={{ click: this.onScatterClick }}
  />
, mountNode);
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
