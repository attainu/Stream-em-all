import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('../Container/Home'));
const SignIn = React.lazy(() => import('../Container/SignIn'));
const NotFound = React.lazy(() => import('../Container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
