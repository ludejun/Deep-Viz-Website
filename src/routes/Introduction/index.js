import React from 'react';
import { Collapse } from 'antd';
import IntroductionDemo from './IntroductionDemo';
import './introduction.less';

const Panel = Collapse.Panel;
const developers = [
  { name: 'ludejun', imgSrc: 'img/ludejun.jpg' },
  { name: 'shanbin', imgSrc: 'img/shanbin.jpg' },
  { name: 'hannah', imgSrc: 'img/gm.jpg' },
  { name: 'wendy🌀', imgSrc: 'img/avatar4.jpg' },
  { name: 'jinjilynn', imgSrc: 'img/jl.jpg' },
  { name: '吴一珉', imgSrc: 'img/wym.jpg' },
  { name: '曹智伟', imgSrc: 'img/czw.jpg' },
  { name: '王晓岭', imgSrc: 'img/wxl.jpg' },
  { name: '张育文', imgSrc: 'img/zhangyuwen.jpeg' },
];

export default function () {
  const onAnchorClick = (domId) => {
    document.getElementById(domId).scrollIntoView();
  };
  const customPanelStyle = {
    background: '#fbfbfb',
    // borderRadius: 4,
    marginBottom: 10,
    borderLeft: '2px solid #eee',
    borderBottom: 0,
    overflow: 'hidden',
  };

  return (
    <div className="main-introduction">
      <h1>Deep-Viz of React</h1>
      <p>主要专注于数据可视化，提供统一、简洁、漂亮、多样图表并糅合数据可视化经验、商业数据展示惯例的React组件库。</p>
      <Collapse bordered={false}>
        <Panel
          header={
            <p style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.65)' }}>查看DEMO，了解组件库特性
              <span style={{ fontSize: 12, color: '#999' }}>（以下demo仅为示例，详情参考具体组件）</span></p>}
          key="1"
          style={customPanelStyle}
        >
          <IntroductionDemo />
        </Panel>
      </Collapse>
      <ul className="anchor-list-container">
        <li onClick={() => onAnchorClick('feature')}>特性</li>
        <li onClick={() => onAnchorClick('environment')}>支持环境</li>
        <li onClick={() => onAnchorClick('version')}>版本</li>
        <li onClick={() => onAnchorClick('components')}>组件范围</li>
        <li onClick={() => onAnchorClick('contribution')}>如何贡献</li>
        <li onClick={() => onAnchorClick('thanks')}>感谢</li>
        <li onClick={() => onAnchorClick('website')}>展示网站技术栈介绍</li>
      </ul>

      <div id="feature">
        <h3>特性</h3>
        <ul className="list-container">
          <li>提供丰富数据可视化组件，基础图表、电子地图、3D制图等，能满足绝大部分可视化需求</li>
          <li>组件配置简洁化，很少的代码即可画出复杂、统一、漂亮图表；同时可通过特殊配置兼容90%其他需求</li>
          <li>糅合多年数据可视化经验、商业数据展示惯例，将不必要的配置去掉</li>
          <li>高质量React组件库，ES2015+编写，PropsType完善，严格Eslint规则，统一设计规范</li>
          <li>支持npm + webpack安装使用</li>
        </ul>
      </div>

      <div id="environment">
        <h3>支持环境</h3>
        <ul className="list-container">
          <li>现代浏览器和 IE9 及以上</li>
          <li>大部分组件在支持Canvas的浏览器上即可使用</li>
        </ul>
      </div>

      <div id="version">
        <h3>版本</h3>
        <ul className="list-container">
          <li>稳定版：</li>
        </ul>
      </div>

      <div id="components">
        <h3>组件范围</h3>
        <ul className="list-container">
          <li>Basic/Echarts 基础图表组件</li>
          <li>Map 地图组件</li>
          <li>Pictogram 象形图组件</li>
          <li>SVG 组件</li>
          <li>Canvas 组件</li>
          <li>WebGL/3D 组件</li>
        </ul>
      </div>

      <div id="contribution">
        <h3>如何贡献</h3>
        <p>第一版开发人员主要基于万达大数据前端开发和设计小组，感谢他们卓有成效的付出。</p>
        <ul className="developer">
          {developers.map((v, i) => (
            <li key={i}>
              <div
                className="imgContainer"
                style={{
                  backgroundImage: `url(${
                  (window.location.host.indexOf('github.io') > -1 ? `dist/${v.imgSrc}` : v.imgSrc) || 'img/advtor.jpg'})`,
                }}
              />
              {v.name}
            </li>
          ))}
        </ul>
        <p>
          如您希望参与贡献，欢迎 <a href="https://github.com/ludejun/Deep-Viz/pulls">Pull Request</a>，
          或给我们 <a href="https://github.com/ludejun/Deep-Viz/issues">报告 Bug</a>。
        </p>
      </div>

      <div id="thanks">
        <h3>感谢</h3>
        <p>秉持不重复造轮子的初衷，组件库开发过程中，大量使用或借鉴其他开源社区图表方案，这里一并表示感谢。有些组件想了解更深入，也可以去相应源头去了解。</p>
        <ul className="list-container">
          <li>
            <a href="http://echarts.baidu.com/" target="_blank" rel="noopener noreferrer">
              Echarts
            </a>
          </li>
          <li>
            <a
              href="http://lbsyun.baidu.com/index.php?title=jspopular"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baidu Map Javascript API
            </a>
          </li>
          <li>
            <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">
              Three
            </a>
          </li>
          <li>
            <a href="https://github.com/pa7/heatmap.js" target="_blank" rel="noopener noreferrer">
              Heatmap
            </a>
          </li>
          <li>
            <a
              href="http://lbs.amap.com/api/javascript-api/summary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gaode Map Javascript API
            </a>
          </li>
          <li>
            <a
              href="http://echarts.baidu.com/echarts2/x/doc/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Echarts-X
            </a>
          </li>
          <li>
            <a href="http://anime-js.com/" target="_blank" rel="noopener noreferrer">
              Anime
            </a>
          </li>
        </ul>
      </div>

      <div id="website">
        <h3>展示网站技术栈介绍</h3>
        <p>本展示网站技术栈主要为 React + dva + Ant-Design，对此中使用的开源产品一并表示深深的感谢，希望本组件库能像这些产品一样大大提高前端开发效率。</p>
        <p>
          <a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">
            dva
          </a>
          是一个基于 react 和 redux、sagas、roadhog 的轻量应用框架，概念来自 elm， 支持 side
          effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。
        </p>
        <p>
          <a
            href="https://github.com/ant-design/ant-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ant-Design
          </a>
          是蚂蚁金服出品的一套丰富 React UI 组件库，适合开发和服务于企业级后台产品。
        </p>
      </div>
    </div>
  );
}
