import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../views/auth/login';
import Container from '../views/container/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/" component={Container} />
        {/* <PrivateRoute></PrivateRoute> */}
        <Redirect from='/' to='/signin' />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;