import React from "react";
import config from "./config";
import PropTypes from "prop-types";
const { colorMap } = config;

/**
 * The Componet like Shields.io badges base on CSS
 *
 */

function Badge(props) {
  const { title, prefixCls, className } = props;
  const { data } = props;
  let { backgroundColor, color } = props;

  if (!Array.isArray(data)) {
    return null;
  }
  if (!Array.isArray(backgroundColor) || backgroundColor.length === 0) {
    // default color
    backgroundColor = config.backgroundColor;
  }
  if (!Array.isArray(color) || backgroundColor.length === 0) {
    // default color
    color = config.color;
  }

  backgroundColor = backgroundColor.map(item => colorMap[item] || item);
  color = color.map(item => colorMap[item] || item);

  return (
    <span title={title} className={`${prefixCls} ${className}`} onClick={props.onClick}>
      {data.map((item, index) => {
        let index_bgc = backgroundColor[index % backgroundColor.length];
        let index_c = color[index % color.length];
        return (
          <span
            className={`${prefixCls}-badge`}
            key={index}
            style={{ backgroundColor: index_bgc, color: index_c }}
          >
            {item}
          </span>
        );
      })}
    </span>
  );
}
Badge.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.array,
  backgroundColor: PropTypes.array,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
Badge.defaultProps = {
  data: [],
  color: [],
  backgroundColor: [],
  prefixCls: "rc-shields",
  className: "",
  onClick: () => {}
};

export default React.memo(Badge);
