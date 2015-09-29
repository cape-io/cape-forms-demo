import React, { Component, PropTypes } from 'react';

class Head extends Component {
  // Only update when the title changes.
  render() {
    const { css, js, meta, title, ...rest } = this.props;

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
