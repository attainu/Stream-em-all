import React from 'react';
import { Route, Switch } from 'react-router-dom';
const LandingPage = React.lazy(() => import('../Container/LandingPage'));
const LPSignInPage = React.lazy(() => import('../Container/LPSignInPage'));
const LPSignUpPage = React.lazy(() => import('../Container/LPSignUpPage'));
const ErrorPage404 = React.lazy(() => import('../Container/404'));
const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/landingpage' component={LandingPage} />
        <Route exact path='/login' component={LPSignInPage} />
        <Route exact path='/signup' component={LPSignUpPage} />
        <Route exact path='/error404' component={ErrorPage404} />
      </Switch>
    </div>
  );
};
export default AppRouter;
