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
            <h2><Icon type="github" />Deep-Viz</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ludejun/Deep-Viz">Deep-Viz GitHub</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ludejun/Deep-Viz-Website">Deep-Viz-Website</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ludejun/Deep-Viz-Start">Deep-Viz-Start</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/deep-viz">Deep-Viz npm库</a>
            </div>
          </li>
          <li>
            <h2><Icon type="link" />资源链接</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://carp.wanda-group.tv/">鲸商顾问</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://brand.wanda-group.tv/">品牌顾问</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://bigdata.wanda-group.net/">万达大数据</a>
            </div>
          </li>
          <li>
            <h2>Copyright © 2017</h2>
            <div>
              <p>万达大数据中心</p>
              <p>上海市浦东新区杨高南路729号陆家嘴世纪金融广场1号楼29层</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
