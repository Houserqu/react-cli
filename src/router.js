import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './routes/App';
import Index from './routes/index/Index';
import Login from './routes/login/Login';

const Routers = function(){
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='/login' component={Login} />
      </Route>
    </Router>
  );
};

export default Routers;