import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { AuthContext } from '../../utility/AuthContext';

const PrivateRoute = ({ component: RouteComponent, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/signin'} />
        )
      }
    />
  );
};
const mapStateToProps = ({ currentUser }) => ({
  currentUser: currentUser,
});
export default connect(mapStateToProps)(PrivateRoute);
