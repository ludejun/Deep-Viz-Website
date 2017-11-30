import React from 'react';
// import ScrollAnim, { Link as AnimeLink, Element, OverPack } from 'rc-scroll-anim';
import { Element } from 'rc-scroll-anim';
// import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
import './beforeHome.less';

// ScrollAnim.scrollScreen.init();
export default class BeforeHome extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
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
            <p>0000</p>
          </Element>
          <Element className="carousel-page carousel-page-1" id="welcome1">
            <p>0001</p>
          </Element>
          <Element className="carousel-page carousel-page-2" id="welcome2">
            <p>0002</p>
          </Element>
          <Element className="carousel-page carousel-page-3" id="welcome3">
            <p>0003</p>
          </Element>
        </div>
      </div>
    );
  }
}
