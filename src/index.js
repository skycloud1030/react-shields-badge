import React from "react";
import config from "./config";
import PropTypes from "prop-types";
const { backgroundColor: backgroundColor_default, color: color_default, colorMap } = config;

/**
 * The Componet like Shields.io badges base on CSS
 *
 */
export default class Badge extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    color: PropTypes.array,
    backgroundColor: PropTypes.array,
    prefixCls: PropTypes.string,
    onClick: PropTypes.func
  };
  static defaultProps = {
    data: [],
    color: [],
    backgroundColor: [],
    prefixCls: "rc-shields",
    onClick: () => {}
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { title, prefixCls } = this.props;
    const { data } = this.props;
    let { backgroundColor, color } = this.props;
    backgroundColor = backgroundColor.length === 0 ? backgroundColor_default : backgroundColor;
    color = color.length === 0 ? color_default : color;

    backgroundColor = backgroundColor.map(item => colorMap[item] || item);
    color = color.map(item => colorMap[item] || item);
    
    return (
      <span title={title} className={prefixCls} onClick={this.props.onClick}>
        {data.map((item, index) => (
          <span
            className={`${prefixCls}-badge`}
            key={index}
            style={{
              backgroundColor: backgroundColor[index % backgroundColor.length],
              color: color[index % color.length]
            }}
          >
            {item}
          </span>
        ))}
      </span>
    );
  }
}
