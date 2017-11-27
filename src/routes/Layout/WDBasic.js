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
      if (dom.parentNode === e.target.parentNode.parentNode) {
        domId = i;
        const domStyle = document.getElementsByClassName('code-container')[domId].style.display;
        if (domStyle === 'none' || domStyle === '') {
          document.getElementsByClassName('code-container')[domId].style.display = 'block';
        } else {
          document.getElementsByClassName('code-container')[domId].style.display = 'none';
        }
      }
    });
    if (e.target.getAttribute('class').indexOf('arrows-alt') > 0) {
      e.target.setAttribute('class', 'anticon anticon-shrink');
    } else {
      e.target.setAttribute('class', 'anticon anticon-arrows-alt');
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
