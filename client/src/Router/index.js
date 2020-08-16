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
const Editmanage = lazy(() => import('../Container/EditManageProfile'));
const Plan = lazy(() => import('../Container/Plan'));
const PrePlan = lazy(() => import('../Container/PrePlan'));
const Video = lazy(() => import('../Container/Video'));
const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/editmanage' component={Editmanage} />
        <PrivateRoute exact path='/plan' component={Plan} />
        <PrivateRoute exact path='/video' component={Video} />
        <PrivateRoute exact path='/preplan' component={PrePlan} />
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
