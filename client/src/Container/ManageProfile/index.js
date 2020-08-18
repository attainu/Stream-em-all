import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { setUserProfile, setUser } from '../../Redux/User/userActionGenerator';
import { getProfiles } from '../../Redux/Profiles/profileActionGenerator';
import { withRouter, Redirect } from 'react-router-dom';
import { auth } from '../../Firebase';
import Logo from '../../Components/Logo';
import Swal from 'sweetalert2';
import './index.scss';
import { ManageggProfile } from '../../Utils/addProfile';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    background: '#111',
    color: '#fff',
    height: '100vh',
  },
  mainConatiner: {
    paddingTop: '22vh',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100px',
    height: '190px',
    cursor: 'pointer',
    objectFit: 'cover',
    [theme.breakpoints.up('sm')]: {
      width: '200px',
      height: '200px',
    },
  },
  manageButton: {
    border: '3px solid rgb(140,140,140)',
    color: 'rgb(140,140,140)',
    fontSize: '28px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10vh',
    cursor: 'pointer',
  },
}));

const ManageProfile = ({
  history,
  setUserProfile,
  currentUser,
  userProfile,
  setupdatedUser,
  profiles,
}) => {
  const classes = useStyles();
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const updateEmail = async () => {
      if (currentUser.email === null) {
        const { value: email } = await Swal.fire({
          title: 'Input email address',
          input: 'email',
          inputPlaceholder: 'Enter your email address',
        });
        if (email) {
          auth.currentUser.updateEmail(email);
          Swal.fire(`Entered email: ${email}`);
        } else {
          auth.signOut();
        }
      }
    };
    updateEmail();
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setupdatedUser(user);
    });
  }, [setupdatedUser]);
  useEffect(() => {
    ManageggProfile();
  }, []);

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  useEffect(() => {
    setUserProfile(profile);
    profile && history.push('/movie');
  }, [history, profile, setUserProfile]);

  const handleClick = (img, data) => {
    setProfile({ img: img, profile: data });
  };
  if (!currentUser) {
    return <Redirect to='/signin' />;
  }
  return (
    <div className={classes.root}>
      <Logo />
      <Grid
        container
        className={classes.mainConatiner}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid className={classes.row} container item xs={5} lg={5} sm={5}>
          <Typography align='center' variant='h3' gutterBottom>
            Who's Watching ?
          </Typography>
        </Grid>
        <Grid container item xs={12} lg={8} sm={8} className={classes.row}>
          {profiles.map(({ data, docid }) => (
            <Grid
              item
              xs={3}
              lg={3}
              sm={3}
              className={classes.row}
              key={docid}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => handleClick(data.img, data.profile)}
            >
              <img className={classes.img} src={data.img} alt='' />
              <Typography align='center' variant='h6' gutterBottom>
                {data.profile}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.row} item xs={8} lg={8} sm={8}>
          <Grid
            container
            item
            className={classes.manageButton}
            xs={8}
            lg={8}
            sm={8}
          >
            <Typography
              align='center'
              onClick={() => history.push('/editmanage')}
              variant='h6'
              gutterBottom
            >
              Manage profile
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setUserProfile: (user) => dispatch(setUserProfile(user)),
  setupdatedUser: (user) => dispatch(setUser(user)),
});
const mapStateToProps = ({ user, profiles }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
  profiles: profiles.Profiles,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ManageProfile));
