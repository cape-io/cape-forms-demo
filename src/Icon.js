import React, { Component, PropTypes } from 'react';
import classNames from 'classnames'

export default class Icon extends Component {
  static propTypes = {
    symbol: PropTypes.string.isRequired,
    className: PropTypes.string
  }
  static defaultProps = {
    hidden: 'false'
  }
  render() {
    const {symbol, className, hidden} = this.props;
    const classStr = `glyphicon glyphicon-${symbol}`

    return (
      <span
        className={classNames(classStr, className)}
        aria-hidden={hidden}
      />
    );
  }
}
