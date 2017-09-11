import React from 'react';
import classnames from 'classnames';

// import './style.css';

const NotFound = (props) => {
  const { className } = this.props;
  return (
    <div className={classnames('NotFound', className)} {...props}>
      <h1>
        404 <small>Not Found :(</small>
      </h1>
    </div>
  );
};

NotFound.defaultProps = { className: '' };
