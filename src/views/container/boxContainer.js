import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import FoodsSchedule from '../foods/foodsSchedule';
import ScheduleFood from '../schedule/scheduleFood';

const BoxContainer = () => {
  return <Switch >
    <Redirect exact from='/' to='/schedule' />
    <Route path='/schedule' exact component={FoodsSchedule} />
    <Route path='/schedule/food' exact component={ScheduleFood} />
    <Redirect to='/schedule' />
  </Switch >
}

export default BoxContainer;
