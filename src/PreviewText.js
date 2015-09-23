import React, { Component, PropTypes } from 'react';
import classNames from 'classNames'

export default class PreviewText extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    editable: PropTypes.bool
  }
  // static defaultProps = {
  // }

  render() {
    const {defaultValue, editable, className, onClick} = this.props;
    const cssClasses = {
      'editable-click': editable,
      'editable-empty': !defaultValue,
      'form-value': true
    };

    return (
      <div className={classNames(cssClasses, className)}>
        <button className="btn btn-default btn-outline" onClick={onClick} title="click to edit">{defaultValue || 'Empty'}</button>
      </div>
    );
  }
}
