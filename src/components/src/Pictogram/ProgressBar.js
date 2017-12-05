/**
 * Created by Administrator on 2017/9/29.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.less';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.data,
    };
  }
  transformValue(number) {
    if (number.length <= 3) {
      return number === '' ? '0' : number;
    } else {
      const mod = number.length % 3;
      let output = (mod === 0 ? '' : (number.substring(0, mod)));
      for (let i = 0; i < Math.floor(number.length / 3); i++) {
        if (mod === 0 && i === 0) {
          output += number.substring(mod + 3 * i, mod + 3 * i + 3);
        } else {
          output += `,${number.substring(mod + 3 * i, mod + 3 * i + 3)}`;
        }
      }
      return (output);
    }
  }
  render() {
    const { data } = this.props;
    let allV = 0;
    data.forEach((item) => {
      allV += item.value;
    });
    const defaultPosition = {
      position: 'absolute',
      left: 0,
      top: '-25px',
    };
    const lettPosition = {
      marginRight: '10px',
    };
    const { namePosition } = this.props;
    return (
      <div>
        {this.state.dataList.map((item, i) =>
          <div key={i} className="progress-wrap">
            <div className="bar-name" style={namePosition === 'left' ? lettPosition : defaultPosition}>{item.name}</div>
            <div className="outer-bar">
              <div className="inner-bar" style={{ width: `${item.value / allV * 100}%` }}>
                <div className="child-item" style={{ background: item.backgroundColor ? item.backgroundColor : '#2CA51A' }} />
              </div>
            </div>
            <div className="bar-value">{this.transformValue(item.value.toString())}{this.props.unit}</div>
          </div>,
        )}
      </div>
    );
  }
}
ProgressBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      backgroundColor: PropTypes.string,
    }),
  ).isRequired,
  unit: PropTypes.string,
  namePosition: PropTypes.string,
};
