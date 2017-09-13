import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="*" component={NotFound} />
    </div>
  </BrowserRouter>
);

export default Routes;
