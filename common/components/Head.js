import React, { Component, PropTypes } from 'react';

import InitialState from './InitialState';

class Head extends Component {
  // Only update when the title changes.
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.title !== this.props.title;
  }
  componentWillReceiveProps(nextProps) {
    if (this.isMounted()) {
      const oldTitle = this.state.title;
      const newTitle = nextProps.title;
      if (newTitle && newTitle !== oldTitle) {
        document.title = newTitle;
      }
    }
  }
  render() {
    const { css, js, meta, title, initialState, ...rest } = this.props;

    // @TODO css: integrity, crossorigin props?

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {meta.map((metaArr, i) =>
          <meta key={'m'+i} name={metaArr[0]} content={metaArr[1]} />
        )}
        {css.map((cssFilePath, i) =>
          <link key={'c'+i} rel="stylesheet" type="text/css" href={cssFilePath} />
        )}
        <InitialState initialState={initialState} />
        {js.map((jsFilePath, i) =>
          <script key={'j'+i} type="text/javascript" src={jsFilePath} async defer />
        )}
      </head>
    );
  }
}

Head.propTypes = {
  css: PropTypes.array.isRequired,
  js: PropTypes.array.isRequired,
  meta: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Head;
