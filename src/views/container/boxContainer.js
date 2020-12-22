import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import FoodsSchedule from '../foods/foodsSchedule';

const BoxContainer = () => {
  return <Switch >
    <Redirect exact from='/' to='/schedule' />
    <Route path='/schedule' exact component={FoodsSchedule} />
    <Redirect to='/schedule' />
  </Switch >
}

export default BoxContainer;
