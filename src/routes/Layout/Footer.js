/**
 * Created by Administrator on 2017/11/21.
 */
import React from 'react';
import { Icon } from 'antd';
import WDBasic from './WDBasic';
import './footer.less';

export default class Footer extends WDBasic {
  render() {
    return (
      <div className="footer">
        <ul>
          <li>
            <h2><Icon type="github" />Deep-via</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/">GitHub</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/">DEMO</a>
            </div>
          </li>
          <li>
            <h2><Icon type="link" />资源链接</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/">DEMO</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/">DEMO</a>
            </div>
          </li>
          <li>
            <h2>Copyright © 2017</h2>
            <div>
              <span>万达大数据中心</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
