import React from 'react';
import { Menu, Icon } from 'antd';
import WDBasic from './WDBasic';
import './header.less';

export default class Header extends WDBasic {
  showBars = () => {
    const menu = document.getElementById('navigator');
    menu.style.display = window.getComputedStyle(menu).display === 'none' ? 'block' : 'none';
  }
  render() {
    return (
      <div className="header">
        <div className="header-logo">Deep-Viz</div>
        <Icon type="bars" className="header-bars" onClick={this.showBars} />
        <Menu
          selectedKeys={['main/introduction']}
          mode="horizontal"
          id="navigator"
          onClick={e => this._forward(e.key)}
        >
          <Menu.Item key="/">首页</Menu.Item>
          <Menu.Item key="main/introduction">组件</Menu.Item>
        </Menu>
      </div>
    );
  }
}
