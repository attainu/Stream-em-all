import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import addicon from '../../Assets/images/addicon2.svg';
import { getProfiles } from '../../Redux/Profiles/profileActionGenerator';
import Logo from '../../Components/Logo';
import EditIcon from '../../Components/Editoption';
import EditProTwo from '../../Components/EditProfile';
import AddProfile from '../../Components/AddProfile';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    background: '#111',
    color: '#fff',
    height: '100vh',
  },
  mainConatiner: {
    paddingTop: '20vh',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  manageButton: {
    color: '#333',
    background: '#fff',
    fontSize: '28px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10vh',
    cursor: 'pointer',
  },
}));

const EditManageProfile = ({ history, currentUser, userProfile, profiles }) => {
  const classes = useStyles();
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  const handleClick = (img, data, docid) => {
    setProfile({ img: img, profile: data, docid: docid });
  };
  console.log(profiles);
  if (!currentUser) {
    return <Redirect to='/signin' />;
  }
  return profile === '' ? (
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
            Manage Profiles:
          </Typography>
        </Grid>
        <Grid container item lg={9} sm={8} className={classes.row}>
          {profiles.map(({ data, docid }, index) => (
            <Grid
              item
              lg={3}
              className={classes.row}
              sm={3}
              key={index}
              id='editmainimage'
              onClick={() => handleClick(data.img, data.profile, docid)}
            >
              <EditIcon class={classes.img} src={data.img} />
              <Typography align='center' variant='h6' gutterBottom>
                {data.profile}
              </Typography>
            </Grid>
          ))}
          {profiles.length < 4 && (
            <Grid
              item
              
              lg={3}
              className={classes.row}
              sm={3}
              id='editmainimage'
            >
              <div
                id='editicon'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className='editicon'
                onClick={() => setProfile('add')}
              >
                <img
                  src={addicon}
                  style={{
                    width: '70%',
                  }}
                  alt='editicon'
                />
              </div>
              <Typography align='center' variant='h6' gutterBottom>
                Add Profile
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid container className={classes.row} item lg={8}>
          <Grid container item className={classes.manageButton} lg={1}>
            <Typography
              align='center'
              variant='h6'
              onClick={() => history.push('/manage')}
              gutterBottom
            >
              Done
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ) : profile === 'add' ? (
    <AddProfile setProfile={setProfile} />
  ) : (
    <EditProTwo props={profile} setProfile={setProfile} />
  );
};
const mapStateToProps = ({ user, profiles }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
  profiles: profiles.Profiles,
});
export default connect(mapStateToProps)(withRouter(EditManageProfile));
