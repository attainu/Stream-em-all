import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Private';
const Home = React.lazy(() => import('../Container/Home'));
const SignIn = React.lazy(() => import('../Container/SignIn'));
const SignUp = React.lazy(() => import('../Container/SignUp'));
const NotFound = React.lazy(() => import('../Container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
