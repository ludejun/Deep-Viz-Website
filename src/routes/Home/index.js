import React from 'react';
import { Element, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Logo from './Logo';
import NetLine from './NetLine';
import './home.less';
import Basic from '../Layout/WDBasic';

const titleAnim = { y: '+=60', opacity: 0, type: 'from' };
const oneAnim = { y: '+=50', opacity: 0, type: 'from', ease: 'easeOutQuad' };
const twoAnim = { x: '+=100', opacity: 0, type: 'from' };
const threeAnim = { x: '-=150', opacity: 0, type: 'from' };
const picTitle = ['基础图表组件', 'Map地图组件', '象形图组件', 'SVG组件', 'Canvas组件', 'WebGL/3D组件'];
// ScrollAnim.scrollScreen.init();
export default class Home extends Basic {
  render() {
    return (
      <div className="home">
        <div className="content-wrapper">
          <Element className="carousel-page carousel-page-0" id="welcome0">
            <div className="svg-container">
              <NetLine className="net-line" />
            </div>
            <div className="page-0-content">
              <Header type="light" />
              <div className="title">
                <div className="logo-container" onClick={() => this._forward('main/introduction')}>
                  <Logo className="logo" />
                </div>
                <OverPack replay key="0o">
                  <TweenOne animation={titleAnim} reverseDelay={100} key="3z">
                    <p className="sub-title">
                      主要专注于数据可视化，提供统一、简洁、漂亮、多样图表并糅合数据可视化经验、商业数据展示惯例的React组件库。
                    </p>
                  </TweenOne>
                </OverPack>
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
            </div>
          </Element>
          <Element className="carousel-page carousel-page-1" id="welcome1">
            <div style={{ marginTop: 200 }}>
              <Row>
                <Col md={12} sm={24}>
                  <OverPack replay playScale={0.2} key="2oi">
                    <TweenOne
                      animation={{ ...threeAnim, x: '-=100' }}
                      key="2i1"
                      component="img"
                      src={require('../../assets/computer.png')}
                      className="computer"
                    />
                  </OverPack>
                </Col>
                <Col md={12} sm={24}>
                  <OverPack replay playScale={0.2} key="2o" className="desc">
                    <TweenOne animation={twoAnim} key="2t" component="p" className="desc-0">
                      Deep-Viz的特性
                    </TweenOne>
                    <TweenOne
                      animation={{ ...twoAnim, delay: 100 }}
                      component="p"
                      key="2s"
                      className="desc-1"
                    >
                      功能强大，简洁易用。Canvas、SVG、E-Map、WebGL、DOM，你想要的它都有
                    </TweenOne>
                    <QueueAnim key="2d" delay={250} leaveReverse className="desc-2">
                      <p key="2d-0" className="para">
                        提供丰富数据可视化组件，基础图表、电子地图、3D制图等，能满足绝大部分可视化需求
                      </p>
                      <p key="2d-1" className="para">
                        简洁化代码即可画出复杂、统一、漂亮图表；通过特殊配置兼容90%其他需求
                      </p>
                      <p key="2d-2" className="para">
                        糅合多年数据可视化经验、商业数据展示惯例，删除不必要的配置
                      </p>
                      <p key="2d-3" className="para">
                        高质量React组件库，ES2015+编写，PropsType完善，严格Eslint规则，统一设计规范
                      </p>
                      <p key="2d-4" className="para">
                        支持npm + webpack安装使用
                      </p>
                    </QueueAnim>
                  </OverPack>
                </Col>
              </Row>
            </div>
          </Element>
          <Element className="carousel-page carousel-page-2" id="welcome2">
            <div className="content">
              <OverPack replay key="3o">
                <TweenOne animation={oneAnim} reverseDelay={120} key="3t">
                  <p className="title">可靠且丰富的组件库</p>
                </TweenOne>
                <TweenOne animation={{ ...oneAnim, delay: 100 }} key="3s">
                  <p className="sub-title">不断完善的组件库更好的助力前端开发</p>
                </TweenOne>
                <Row className="img-wrap" gutter={6} key="3p">
                  <QueueAnim leaveReverse key="3d">
                    {Array.from(new Array(6)).map((item, i) => (
                      <Col span={4} key={`3d-${i}`}>
                        <div className="pic-container">
                          <img alt={i} className="pic" src={require(`../../assets/${i + 1}.png`)} />
                          <p key={i} className="pic-title">
                            {picTitle[i]}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </QueueAnim>
                </Row>
              </OverPack>
            </div>
          </Element>
        </div>
        <Footer />
      </div>
    );
  }
}
