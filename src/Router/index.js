import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Private';
const Movie = lazy(() => import('../Container/Home'));
const TvShow = lazy(() => import('../Container/TvShows'));
const MyList = lazy(() => import('../Container/MyListPage'));
const ManageProfile = lazy(() => import('../Container/ManageProfile'));
const SearchData = lazy(() => import('../Container/SearchPage'));
const SignIn = lazy(() => import('../Container/SignIn'));
const SignUp = lazy(() => import('../Container/SignUp'));
const NotFound = lazy(() => import('../Container/NotFound'));
const LandingPage = lazy(() => import('../Container/LandingPage'));
const EditProOne = lazy(() => import('../Container/EditProOne'));
const Stripe = lazy(() => import('../Container/Stripe'));
const Plan = lazy(() => import('../Container/Plan'));
const PrePlan = lazy(() => import('../Container/PrePlan'));
const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/editpro1' component={EditProOne} />
        {/* New added*/}
        <Route exact path='/payment' component={Stripe} />
        <Route exact path='/plan' component={Plan} />
        <Route exact path='/preplan' component={PrePlan} />
        <PrivateRoute exact path='/manage' component={ManageProfile} />
        <PrivateRoute exact path='/movie' component={Movie} />
        <PrivateRoute exact path='/tvshow' component={TvShow} />
        <PrivateRoute exact path='/mylist' component={MyList} />
        <PrivateRoute exact path='/searchdata' component={SearchData} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
