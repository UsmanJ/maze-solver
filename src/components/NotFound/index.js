import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// import './style.css';

export default class NotFound extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = { className: '' };
