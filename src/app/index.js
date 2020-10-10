import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';

import AppRouter from './router';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
        {renderRoutes(AppRouter)}
    </Router>
  );
}

export default App;
