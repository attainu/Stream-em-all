import React, { useEffect, Fragment } from 'react';
import Header from '../../Components/Header';
import { connect, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridCard from '../../Components/GridCard';
import { getMyList } from '../../Redux/User/userActionGenerator';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '10vh',
  },
}));

const MyList = ({ userProfile, myList }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const person = userProfile.profile;

  useEffect(() => {
    dispatch(getMyList(person));
  }, [dispatch, person]);
  return (
    <Fragment>
      <Header />
      <div className={classes.root}>
        <Grid container className='grid' spacing={3}>
          {myList.map((data, index) => (
            <GridCard key={index} movie={data} />
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
  myList: user.myList,
});
export default connect(mapStateToProps)(MyList);
