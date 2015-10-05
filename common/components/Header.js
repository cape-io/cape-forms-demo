import React, { Component, PropTypes } from 'react';

class Header extends Component {
  // Never update?
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    const { children, title, tagline, about, menu, homeLink, ...other } = this.props;

    let TitleEl = false;
    let TaglineEl = false;
    let AboutEl = false;
    let MenuEl = false;

    if (title) {
      if (homeLink) {
        // @TODO Create link if homeLink.
      }
      else {
        TitleEl = <h1>{title}</h1>
      }
    }
    if (tagline) {
      TaglineEl = <h2>{tagline}</h2>
    }
    if (about) {
      AboutEl = <p className="about">{about}</p>
    }
    if (menu) {
      // @TODO Replace with real navigation component.
      MenuEl = <nav menu={menu} />
    }

    return (
      <header {...other}>
        <div className="inner">
          {TitleEl}
          {TaglineEl}
          {AboutEl}
          {MenuEl}
          {children}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
