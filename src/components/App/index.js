import React from 'react';
import logo from './logo.svg';
import css from './style.css';

const App = () => (
  <div className={css.app}>
    <div className={css.header}>
      <img src={logo} className={css.logo} alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className={css.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
