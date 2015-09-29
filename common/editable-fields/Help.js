import React, { Component, PropTypes } from 'react';
import classNames from 'classnames'

// A simple span that displays help text.
// Optional class added when help is related to an error.

class Help extends Component {

  render() {
    const {help, hasErrors, id, suggestion, onChange} = this.props;

    const className = classNames({
      'help-block': true,
      'validation-message': hasErrors
    });

    let suggButton = false;

    if (suggestion) {
      const preTxt = 'Do you mean ';
      const postTxt = '? '

      suggButton = <span>
        {preTxt}
        <button onClick={() => {onChange(suggestion)}}>
          {suggestion}
        </button>
        {postTxt}
      </span>
    }

    return (
      <span className={className} id={`${id}-helpBlock`}>
        {suggButton}
        {help}
      </span>
    );
  }
}

Help.propTypes = {
  help: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  hasErrors: PropTypes.bool
}

export default Help;
