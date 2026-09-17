import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PageContent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
};

export default PageContent;