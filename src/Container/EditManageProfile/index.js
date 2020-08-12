import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { firestore } from '../../Firebase';
import addicon from '../../Assets/images/addicon2.svg';
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

const EditManageProfile = ({ history, currentUser, userProfile }) => {
  const classes = useStyles();
  const [profile, setProfile] = useState('');
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fethcdata = () => {
      firestore
        .collection(currentUser.uid)
        .doc('userprofile')
        .collection('profiles')
        .onSnapshot((snapshot) => {
          setUser(
            snapshot.docs.map((doc) => ({ docid: doc.id, data: doc.data() }))
          );
        });
    };
    fethcdata();
  }, [currentUser.uid]);

  const handleClick = (img, data, docid) => {
    setProfile({ img: img, profile: data, docid: docid });
  };

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
          {user.map(({ data, docid }, index) => (
            <Grid
              item
              lg={3}
              className={classes.row}
              sm={12}
              key={index}
              id='editmainimage'
              onClick={() => handleClick(data.img, data.profile, docid)}
            >
              <EditIcon class={classes.img} src={data.img} />
              {/* <img className={classes.img} src={data.img} alt='' /> */}
              <Typography align='center' variant='h6' gutterBottom>
                {data.profile}
              </Typography>
            </Grid>
          ))}
          {user.length < 4 && (
            <Grid
              item
              lg={3}
              className={classes.row}
              sm={12}
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
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
});
export default connect(mapStateToProps)(withRouter(EditManageProfile));
// https://i.ibb.co/ZGwhrNH/iu-2.jpg
// https://i.ibb.co/JpdSW1q/iu-4.jpg
// https://i.ibb.co/vvK8FX6/iu-3.jpg
// https://i.ibb.co/WKrPzZd/iu.jpg
