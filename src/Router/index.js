import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Private';
const Movie = React.lazy(() => import('../Container/Home'));
const TvShow = React.lazy(() => import('../Container/TvShows'));
const MyList = React.lazy(() => import('../Container/MyListPage'));
const ManageProfile = React.lazy(() => import('../Container/ManageProfile'));
const SearchData = React.lazy(() => import('../Container/SearchPage'));
const SignIn = React.lazy(() => import('../Container/SignIn'));
const SignUp = React.lazy(() => import('../Container/SignUp'));
const NotFound = React.lazy(() => import('../Container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        {/* <PrivateRoute exact path='/' component={Home} /> */}
        <PrivateRoute exact path='/movie' component={Movie} />
        <PrivateRoute exact path='/tvshow' component={TvShow} />
        <PrivateRoute exact path='/mylist' component={MyList} />
        <PrivateRoute exact path='/searchdata' component={SearchData} />
        <PrivateRoute exact path='/' component={ManageProfile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
