import React from 'react';
import { Menu } from 'antd';
import Header from './Header';
import Footer from './Footer';
import WDBasic from './WDBasic';
import './main.less';

const SubMenu = Menu.SubMenu;

export default class Main extends WDBasic {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick(item) {
    this._forward(`main/${item.keyPath.reverse().join('/')}`);
  }

  renderMenuRecursive(rootRoutes) {
    return (
      !!(rootRoutes && rootRoutes.length) &&
      rootRoutes.map((r) => {
        if (r.childRoutes && r.childRoutes.length) {
          return (
            <SubMenu key={r.path} title={r.title}>
              {this.renderMenuRecursive(r.childRoutes)}
            </SubMenu>
          );
        } else {
          return <Menu.Item key={r.path}>{r.title}</Menu.Item>;
        }
      })
    );
  }

  render() {
    const { routes } = this.props;
    // 用于生成Menu
    const rootRoutes = routes.filter(v => v.path === 'main')[0].childRoutes;
    // 用于生成defaultOpenKeys 和 defaultSelectedKeys
    const defaultRoutes = routes.filter((v) => {
      return v.path !== '/' && v.path !== 'main';
    });
    const defaultOpenKeys = ['components'];
    let defaultSelectedKeys = '';
    if (defaultRoutes && defaultRoutes.length) {
      defaultSelectedKeys = defaultRoutes[defaultRoutes.length - 1].path;
      if (defaultRoutes.length > 1) {
        for (let i = 0; i < defaultRoutes.length - 1; i += 1) {
          defaultOpenKeys.push(defaultRoutes[i].path);
        }
      }
    }

    return (
      <div className="main-bg">
        <Header />
        <div className="main-content">
          <Menu
            defaultSelectedKeys={[defaultSelectedKeys]}
            defaultOpenKeys={defaultOpenKeys}
            mode="inline"
            id="main-menu"
            onClick={this.onMenuClick}
          >
            {this.renderMenuRecursive(rootRoutes)}
          </Menu>
          <div className="main-container clearfix">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
