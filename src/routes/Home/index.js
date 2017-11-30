import React, { Component } from 'react';
import { Link } from 'dva/router';
import Logo from './Logo';
import './home.less';

const MAX_ANGLE = 20;
const CIRCLE_NUM = 100;
const CIRCLE_NUM_OUT = 200;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { rotateX: 0, rotateY: 0 };
  }
  moveMouse = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const centerWidth = innerWidth / 2;
    const centerHeight = innerHeight / 2;

    const moveX = clientX - centerWidth;
    const moveY = clientY - centerHeight;

    const rotateX = -moveY / centerHeight * MAX_ANGLE;
    const rotateY = moveX / centerWidth * MAX_ANGLE;

    this.setState({ rotateX, rotateY });
  };

  renderCircle(circleR, num) {
    const dom = [];
    for (let i = 0; i < num; i++) {
      dom.push(
        <span
          className="circle"
          key={i}
          style={{ transform: `rotateZ(${360 / num * i}deg) translateX(${circleR}px)` }}
        />,
      );
    }
    return dom;
  }

  render() {
    const { rotateX, rotateY } = this.state;
    return (
      <div className="home-page" onMouseMove={this.moveMouse}>
        <div
          className="circle-container"
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
          <div className="circle-anime">
            {this.renderCircle(400, CIRCLE_NUM)}
            {this.renderCircle(480, CIRCLE_NUM_OUT)}
          </div>
        </div>
        <Link to="front-page">
          <Logo className="logo" />
        </Link>
      </div>
    );
  }
}
