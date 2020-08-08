import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/User/userActionGenerator';
import { withRouter } from 'react-router-dom';
import Logo from '../../Components/Logo';
import './index.scss';

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
    width: '200px',
    height: '200px',
    cursor: 'pointer',
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

const ManageProfile = ({ history, setUserProfile, currentUser }) => {
  const classes = useStyles();
  const [profile, setProfile] = useState('');
  const [listItems, setListItems] = useState('');

  useEffect(() => {
    setUserProfile(profile);
    profile && history.push('/movie');
  }, [history, profile, setUserProfile]);

  const handleClick = (img, data) => {
    setProfile({ img: img, profile: data });
  };
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
        <Grid className={classes.row} container item lg={5}>
          <Typography align='center' variant='h3' gutterBottom>
            Who's Watching ?
          </Typography>
        </Grid>
        <Grid container item lg={8} sm={8} className={classes.row}>
          {[
            { img: 'https://i.ibb.co/zHLQ73n/profile-1.png', profile: 'Cat' },
            {
              img: 'https://i.ibb.co/TkgbZxd/profile-2.png',
              profile: currentUser.displayName,
            },
            { img: 'https://i.ibb.co/xC2p5TT/profile-3.png', profile: 'Bird' },
            { img: 'https://i.ibb.co/xJqw8sC/profile-4.png', profile: 'Dog' },
          ].map((data, index) => (
            <Grid
              item
              lg={3}
              className={classes.row}
              sm={12}
              key={index}
              onClick={() => handleClick(data.img, data.profile)}
            >
              <img className={classes.img} src={data.img} alt='' />
              <Typography align='center' variant='h6' gutterBottom>
                {data.profile}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.row} item lg={8}>
          <Grid container item className={classes.manageButton} lg={3}>
            <Typography align='center' variant='h6' gutterBottom>
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
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ManageProfile));
