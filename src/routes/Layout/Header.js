import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import WDBasic from './WDBasic';
import './header.less';

export default class Header extends WDBasic {
  constructor(props) {
    super(props);
    // this.onMenuClick = this.onMenuClick.bind(this);
    this.type = props.type || '';
  }
  showBars = () => {
    const menu = document.getElementById('navigator');
    menu.style.display = window.getComputedStyle(menu).display === 'none' ? 'block' : 'none';
  };

  render() {
    return (
      <div className="header-container">
        <div className={`header ${this.type}`}>
          <div className="header-logo">
            <Link to="/">
              <img alt="icon" src={require('../../assets/icon.png')} className="header-icon" />
              <span className="header-title">Deep-Viz</span>
            </Link>
          </div>
          <Icon type="bars" className="header-bars" onClick={this.showBars} />
          <Menu
            className={this.type}
            selectedKeys={['/']}
            mode="horizontal"
            id="navigator"
            onClick={(e) => {
              if (e.key !== 'github') {
                this._forward(e.key);
              }
            }}
          >
            <Menu.Item key="/">首页</Menu.Item>
            <Menu.Item key="main/introduction">组件</Menu.Item>
            <Menu.Item key="github">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ludejun/Deep-Viz"
              >
                <img
                  src={require('../../assets/github.png')}
                  className={`github ${this.type}`}
                  alt="git"
                />
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
