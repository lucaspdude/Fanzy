import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forgot from '../pages/Forgot';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Home from '~/pages/Home';
import Destaques from '~/pages/Secoes/Destaques';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/destaques" component={Destaques} />

      <Route path="/register" component={SignUp} />
      <Route path="/forgot" component={Forgot} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/dashboard/profile" exact component={Profile} isPrivate />

    </Switch>
  );
}
