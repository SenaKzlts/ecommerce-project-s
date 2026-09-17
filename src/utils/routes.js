import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  // Add more routes here
];

const RouteConfig = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
};

export default RouteConfig;