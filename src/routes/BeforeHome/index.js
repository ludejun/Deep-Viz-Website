import React from 'react';
// import ScrollAnim, { Link as AnimeLink, Element, OverPack } from 'rc-scroll-anim';
import { Element } from 'rc-scroll-anim';
// import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import Header from '../Layout/Header';
// import Logo from '../Home/Logo';
import './beforeHome.less';

// ScrollAnim.scrollScreen.init();
export default class BeforeHome extends React.Component {
  render() {
    return (
      <div className="before-home">
        <div className="content-wrapper">
          {/*
          <div className="nav">
            <AnimeLink className="nav-list" to="welcome0" />
            <AnimeLink className="nav-list" to="welcome1" />
            <AnimeLink className="nav-list" to="welcome2" />
            <AnimeLink className="nav-list" to="welcome3" />
          </div>
          */}

          <Element className="carousel-page carousel-page-0" id="welcome0">
            <Header type="light" />
            <div className="page-0-content">
              <p className="logo-container">
                {/* <Logo className="logo logo1" />*/}
                DEEP VIZ
              </p>
              <p>主要专注于数据可视化，提供统一、简洁、漂亮、多样图表并糅合数据可视化经验、商业数据展示惯例的React组件库。</p>
            </div>
            {/*
              <div className="page-0-foot">
                <Row>
                  <Col span={7}>
                    <div className="line" />
                  </Col>
                  <Col span={10}>
                    <p className="company">WANDA BIGDATA<span /></p>
                  </Col>
                  <Col span={7}>
                    <div className="line" />
                  </Col>
                </Row>
              </div>
              */}
          </Element>
          <Element className="carousel-page carousel-page-1" id="welcome1">
            <div style={{ marginTop: 200 }}>
              <Row>
                <Col span={12}>
                  <img
                    alt="computer"
                    src={require('../../assets/computer.png')}
                    className="computer"
                  />
                </Col>
                <Col span={12}>
                  <div className="desc">
                    <p className="desc-0">Deep-Viz的特性</p>
                    <p className="desc-1">丰富，简洁，提供兼容性比例最高的服务支持</p>
                    <div className="desc-2">
                      <p className="para">提供丰富数据可视化组件，基础图表、电子地图、3D制图等，能满足绝大部分可视化需求</p>
                      <p className="para">简洁化代码即可画出复杂、统一、漂亮图表；通过特殊配置兼容90%其他需求</p>
                      <p className="para">糅合多年数据可视化经验、商业数据展示惯例，删除不必要的配置</p>
                      <p className="para">高质量React组件库，ES2015+编写，PropsType完善，严格Eslint规则，统一设计规范</p>
                      <p className="para">支持npm + webpack安装使用</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Element>
          <Element className="carousel-page carousel-page-2" id="welcome2">
            <div className="content">
              <p className="title">可靠且丰富的组件库</p>
              <p className="sub-title">不断完善的组件库更好的助力资源开发</p>
              <Row className="img-wrap" gutter={6}>
                {Array.from(new Array(6)).map((item, i) => (
                  <Col span={4} key={i}>
                    <img alt={i} className="pic" src={require(`../../assets/${i + 1}.png`)} />
                  </Col>
                ))}
              </Row>
            </div>
          </Element>
        </div>
      </div>
    );
  }
}
