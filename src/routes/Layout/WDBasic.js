import React, { Component } from 'react';
import { Table } from 'antd';

export default class WDBasic extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '参数',
        dataIndex: 'parameter',
        width: 110,
      },
      {
        title: '说明',
        dataIndex: 'description',
      },
      {
        title: '类型',
        dataIndex: 'type',
        width: 80,
      },
      {
        title: '默认值',
        dataIndex: 'defaultValue',
      },
    ];
  }

  onCodeToggleClick(e) {
    let domId;
    [...document.getElementsByClassName('code-container')].forEach((dom, i) => {
      // Dom是否被包含使用contains判断，不管层级！
      if (dom.parentNode.contains(e.target)) {
        domId = i;
        const domStyle = document.getElementsByClassName('code-container')[
          domId
        ].style.display;
        if (domStyle === 'none' || domStyle === '') {
          document.getElementsByClassName('code-container')[
            domId
          ].style.display = 'block';
        } else {
          document.getElementsByClassName('code-container')[
            domId
          ].style.display = 'none';
        }
      }
    });
    toggleIcon(e.target); // 改变点击Icon

    function toggleIcon(target) {
      if (target.getAttribute('d')) {
        if (target.getAttribute('d').indexOf('M881') >= 0) {
          target.setAttribute(
            'd',
            'M855 160.1l-189.2 23.5c-6.6.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5a8.03 8.03 0 0 0 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7a7.94 7.94 0 0 0 13.5-4.7L863.9 169a7.9 7.9 0 0 0-8.9-8.9zM416.6 562.3a8.03 8.03 0 0 0-11.3 0L251.8 715.9l-54.7-54.7a7.94 7.94 0 0 0-13.5 4.7L160.1 855c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z',
          );
        } else {
          target.setAttribute(
            'd',
            'M881.7 187.4l-45.1-45.1a8.03 8.03 0 0 0-11.3 0L667.8 299.9l-54.7-54.7a7.94 7.94 0 0 0-13.5 4.7L576.1 439c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 157.6-157.6c3-3 3-8.1-.1-11.2zM439 576.1l-189.2 23.5c-6.6.8-9.3 8.9-4.7 13.5l54.7 54.7-157.5 157.5a8.03 8.03 0 0 0 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l157.6-157.6 54.7 54.7a7.94 7.94 0 0 0 13.5-4.7L447.9 585a7.9 7.9 0 0 0-8.9-8.9z',
          );
        }
      } else {
        toggleIcon(target.firstChild);
      }
    }
  }

  /**
   * @description 内部跳转方法，可自动为有id的元素埋点
   * @param url：必填，跳转url。
   * @param e：被点击元素，可空。如果为空或无法取到当前元素id信息则不另做埋点。若无法取到e，则需要手动调用_traceLog()方法。
   */
  _forward = (url) => {
    // e && e.currentTarget && e.currentTarget.id && this._traceLog(e.currentTarget.id);
    !!url && this.context.router.push(url);
  };

  _back() {
    this.context.router.goBack();
  }

  _renderAPI(configs) {
    return configs.map((it, index) => (
      <div key={index}>
        <p className="container-sub-title">{it.title}</p>
        {it.subtitle && <p>{it.subtitle}</p>}
        <Table
          columns={it.columns || this.columns}
          dataSource={it.dataSource}
          rowKey={'parameter'}
          pagination={false}
        />
      </div>
    ));
  }
}

WDBasic.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
